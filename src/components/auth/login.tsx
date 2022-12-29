import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iconify from "../Iconify";
import { useSignInMutation } from "../../hooks/auth/sign-in";
import { setAuthToken, setRefreshToken } from "../../helpers/token";
import { request } from "../../utils/request";
import API from "../../hooks/users/constraints";
import { useUserStore } from "../../store/createUserSlice";

export const LoginForm = () => {
  const signInMutation = useSignInMutation();
  const { setUser } = useUserStore();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = async () => {
    setIsLoading(true);
    const data = await signInMutation.mutateAsync({
      name: userName,
      password: password,
    });
    setAuthToken(data.data.idToken.jwtToken);
    setRefreshToken(data.data.refreshToken.token);

    const currentUser = await request(
      {
        path: API.CURRENT_USER.path,
        method: API.CURRENT_USER.method,
      },
      null,
      true
    );

    setUser(currentUser.data);
    navigate("/dashboard");
    setIsLoading(false);
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
        loading={isLoading}
      >
        Login
      </LoadingButton>
    </>
  );
};
