import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
import { useUserStore } from "../../store/createUserSlice";
import { Link } from "react-router-dom";
import { clearAuthToken } from "../../helpers/token";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const MENU_OPTIONS = [
  {
    label: "Dashboard",
    icon: "eva:home-fill",
    link: "/dashboard",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    link: "/dashboard/view",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    link: "/dashboard/settings",
  },
];

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const { user, clear } = useUserStore();

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    setOpen(null);
    clearAuthToken();
    clear();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        style={{
          color: "#06283D",
        }}
      >
        <PermIdentityOutlinedIcon />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            py: 1,
            mt: 1.5,
            ml: 0.75,
            borderRadius: 3,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={handleClose}
              component={Link}
              to={option.link}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
