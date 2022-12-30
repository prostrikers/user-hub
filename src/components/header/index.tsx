import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import AccountPopover from "./AccountPopover";
import Iconify from "../Iconify";
import { bgBlur } from "../../utils/styles";
import { useUserStore } from "../../store/createUserSlice";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({
  onOpenNav,
  removeBlur,
}: {
  onOpenNav: any;
  removeBlur?: boolean;
}) {
  const { user } = useUserStore();

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

        <Box component={Link} to="/">
          <img src="/logo.png" />
        </Box>

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
