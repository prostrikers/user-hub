import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import AccountPopover from "./AccountPopover";
import Iconify from "../Iconify";
import { bgBlur } from "../../utils/styles";
import { useUserStore } from "../../store/createUserSlice";
import { Link } from "react-router-dom";

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

//@ts-ignore
const StyledRoot = styled(AppBar)(({ theme }: { theme: DefaultTheme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
}));

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

export default function Header({ onOpenNav }: { onOpenNav: any }) {
  const { user } = useUserStore();
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
          {user ? <AccountPopover /> : <Button> Login </Button>}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
