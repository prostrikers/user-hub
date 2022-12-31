import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import AccountPopover from "./AccountPopover";
import Iconify from "../Iconify";
import { bgBlur } from "../../utils/styles";
import { useUserStore } from "../../store/createUserSlice";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState } from "react";

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const NavItems = [
  {
    name: "Membership",
    link: "/coming-soon",
  },
  {
    name: "Shop & rentals ",
    link: "/coming-soon",
  },
  {
    name: "Training",
    link: "/coming-soon",
  },

  {
    name: "Events",
    link: "/coming-soon",
  },
];

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }: { onOpenNav: any }) {
  const { user } = useUserStore();

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  //@ts-ignore
  const StyledRoot = styled(AppBar)(({ theme }: { theme: DefaultTheme }) => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
    background: "transparent",
  }));

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Box component={Link} to="/">
            <img src="/logo.png" />
          </Box>

          {isMobile ? null : (
            <>
              {NavItems.map((item) => {
                return (
                  <Typography
                    style={{ color: "#333333", textDecoration: "none" }}
                    variant="h6"
                    component={Link}
                    to={item.link}
                  >
                    {item.name}
                  </Typography>
                );
              })}
            </>
          )}
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={3}
          >
            {user ? (
              <>
                {isMobile ? null : (
                  <>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      style={{
                        borderRadius: 20,
                        textTransform: "none",
                        paddingLeft: 35,
                        paddingRight: 35,
                        background: "#06283D",
                      }}
                      component={Link}
                      to="/"
                    >
                      Book now
                    </Button>
                  </>
                )}

                <AccountPopover />
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{
                    borderRadius: 20,
                    textTransform: "none",
                    paddingLeft: 35,
                    paddingRight: 35,
                    background: "#06283D",
                  }}
                  component={Link}
                  to="/sign-in"
                >
                  Login
                </Button>
              </>
            )}

            <IconButton
              style={{
                color: "#06283D",
              }}
            >
              <SearchOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
