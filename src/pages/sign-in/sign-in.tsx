import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { DefaultTheme } from "@mui/private-theming";
import { Helmet } from "react-helmet-async";
import { LoginForm } from "../../components/auth/login";

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledSection = styled("div")(({ theme }: { theme: DefaultTheme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

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
        <title> Login | Minimal UI </title>
      </Helmet>
      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {""}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};
