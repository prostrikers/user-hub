import {
  Avatar,
  Stack,
  Box,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/createUserSlice";
import { BookingList } from "./BookingList";

export const ProfileDetails = () => {
  const { user } = useUserStore();

  return (
    <>
      <Paper
        elevation={3}
        style={{
          width: "100%",
          borderRadius: 20,
          minHeight: "70vh",
        }}
        sx={{ px: 3, py: 2 }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5" style={{ fontWeight: 500 }}>
            My profile
          </Typography>

          <Avatar
            alt={user?.firstName}
            src={user?.profileImgUrl}
            sx={{ width: 100, height: 100, alignItems: "center" }}
          />

          <Box style={{ textAlign: "center" }}>
            <Typography variant="h5" style={{ fontWeight: 500 }}>
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#948C8C",
              }}
            >
              Member
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
          >
            <Button
              variant="outlined"
              color="info"
              style={{ height: 40 }}
              component={Link}
              to="/dashboard/edit"
            >
              <EditIcon />
            </Button>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                height: 40,
              }}
              color="info"
              component={Link}
              to="/dashboard/view"
            >
              View full profile
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ mt: 3, mb: 3 }} />

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="left"
          spacing={2}
        >
          <Typography variant="h5" style={{ fontWeight: 500 }}>
            Your last transactions
          </Typography>
          <BookingList />
        </Stack>
      </Paper>
    </>
  );
};
