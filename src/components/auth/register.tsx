import { Stack, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iconify from "../Iconify";
import { useSignUpMutation } from "../../hooks/auth/sign-up";
import { ApplicationRoutes } from "../../routes/constants";

export const RegisterForm = () => {
  const signUpMutation = useSignUpMutation();
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    await signUpMutation.mutateAsync({
      email: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    navigate(ApplicationRoutes.SIGN_IN);
  };

  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <TextField
            name="firstName"
            label="First Name"
            value={firstName}
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Stack>

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
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
        loading={signUpMutation.isLoading}
        sx={{ mt: 3 }}
      >
        Sign Up
      </LoadingButton>
    </>
  );
};
