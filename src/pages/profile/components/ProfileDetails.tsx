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

export const ProfileDetails = () => {
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
            alt="Cindy Baker"
            sx={{ width: 100, height: 100, alignItems: "center" }}
          />

          <Box style={{ textAlign: "center" }}>
            <Typography variant="h5" style={{ fontWeight: 500 }}>
              Kavindu Rupasinghe
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
            <Button variant="outlined" color="info" style={{ height: 40 }}>
              <EditIcon />
            </Button>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                height: 40,
              }}
              color="info"
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
        </Stack>
      </Paper>
    </>
  );
};
