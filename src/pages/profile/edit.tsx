import {
  Avatar,
  Box,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUserStore } from "../../store/createUserSlice";
import { PROFILE_DETAILS_COLOR } from "../../constants/colors";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useUserUpdateMutation } from "../../hooks/users/useUpdateUser";

export const EditProfilePage = () => {
  const userUpdateMutation = useUserUpdateMutation();
  const { user } = useUserStore();

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      profileImgUrl: user?.profileImgUrl,
      bio: user?.bio,
    },

    onSubmit: (values) => {
      userUpdateMutation.mutate(values);
    },
  });

  return (
    <>
      <Paper elevation={3} sx={{ p: 5 }} style={{ borderRadius: 20 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Edit Profile
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} md={11} sm={6}>
              <Stack>
                <Box>
                  <Typography variant="h3">
                    {user?.firstName} {user?.lastName}
                  </Typography>

                  <Typography
                    variant="h5"
                    style={{
                      color: PROFILE_DETAILS_COLOR,
                      fontWeight: "normal",
                    }}
                  >
                    Member
                  </Typography>
                </Box>

                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  spacing={3}
                  style={{ width: "80%" }}
                  sx={{
                    mt: 5,
                  }}
                >
                  <Box>
                    <TextField
                      label="First name"
                      variant="outlined"
                      id="firstName"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                  </Box>

                  <Box>
                    <TextField
                      id="lastName"
                      label="Last name"
                      variant="outlined"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                  </Box>

                  <Box>
                    <TextField
                      id="bio"
                      label="Bio"
                      variant="outlined"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.bio}
                      multiline
                      minRows={3}
                      maxRows={5}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4} md={1} sm={2}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="end"
                spacing={2}
              >
                <Avatar
                  alt={user?.profileImgUrl}
                  sx={{ width: 100, height: 100, alignItems: "center" }}
                  src={user?.profileImgUrl}
                />
              </Stack>
            </Grid>
          </Grid>

          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={userUpdateMutation.isLoading}
            sx={{ mt: 5, borderRadius: 2 }}
          >
            Update profile
          </LoadingButton>
        </form>
      </Paper>
    </>
  );
};
