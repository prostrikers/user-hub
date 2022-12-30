import { Paper, Stack, Typography } from "@mui/material";

export const BookingDetails = () => {
  return (
    <>
      <Paper
        elevation={5}
        sx={{ px: 4, py: 3 }}
        style={{
          width: "100%",
          borderRadius: 20,
        }}
      >
        <Stack spacing={2} sx={{ px: 2, py: 2 }}>
          <Typography variant="h4">My bookings</Typography>
        </Stack>
      </Paper>
    </>
  );
};
