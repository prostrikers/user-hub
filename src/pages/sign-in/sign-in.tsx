import { Link, Container, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet-async";
import { LoginForm } from "../../components/auth/login";
import { AppName } from "../../constants/app";
import { Link as ReactRouterLink } from "react-router-dom";
import { ApplicationRoutes } from "../../routes/constants";

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title> Login | {AppName} </title>
      </Helmet>

      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box style={{ width: "100%" }}>
          <Container maxWidth="sm">
            <StyledContent>
              <Box
                style={{
                  alignContent: "center",
                }}
              >
                <img src="/logo.png" style={{ width: "30%" }} />
              </Box>
              <Box sx={{ mt: 5, mb: 5 }}>
                <LoginForm />
              </Box>

              <Typography variant="body2" sx={{ mb: 5 }}>
                Don’t have an account? {""}
                <Link
                  variant="subtitle2"
                  component={ReactRouterLink}
                  to={ApplicationRoutes.SIGN_UP}
                >
                  Sign up here
                </Link>
              </Typography>
            </StyledContent>
          </Container>
        </Box>

        <Box
          style={{
            background: "url(/sign-in.png)",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
            sx={{
              height: "100%",
              p: {
                xs: 3,
                md: 10,
              },
            }}
          >
            <Box style={{ textAlign: "right" }}>
              <Typography variant="h2" gutterBottom>
                Do you aspire to be an <br />
                <span
                  style={{
                    color: "white",
                  }}
                >
                  indoor champion?{" "}
                </span>
              </Typography>
              <Typography variant="body1" gutterBottom color="white">
                The only indoor sports facility and training center in
                Sacramento CA, specializing in Baseball, Softball, Futsal and
                Cricket. Book now for an action packed fun and learning.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
