import { Container, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import { AppName } from "../constants/app";
import { useUserStore } from "../store/createUserSlice";
import ThemeProvider from "../theme";
import ScrollToTop from "../utils/scrollTop";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const { user } = useUserStore();

  return (
    <>
      <Helmet>
        <title> Dashboard | {AppName} </title>
      </Helmet>
      <ScrollToTop />
      <Header onOpenNav={() => setOpen(true)} />

      <ThemeProvider>
        <Container maxWidth="xl">
          <Main>
            <Typography variant="h3" sx={{ mb: 5 }}>
              Hello,{" "}
              <span style={{ fontWeight: "normal" }}>
                {user?.firstName} {user?.lastName}
              </span>
            </Typography>
            {children}
          </Main>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ProfileLayout;
