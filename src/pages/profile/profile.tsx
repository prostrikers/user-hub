import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { BookingDetails } from "./components/BookingDetails";
import { MembershipCard } from "./components/MembershipCard";
import { ProfileDetails } from "./components/ProfileDetails";

export const ProfilePage = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Hello, <span style={{ fontWeight: "normal" }}>Kavindu Rupasinghe</span>
      </Typography>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={9}>
          <Stack spacing={2}>
            <MembershipCard
              name="Membership"
              plan="Rookie"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing "
            />
            <BookingDetails />
          </Stack>
        </Grid>
        <Grid item xs={9} md={3}>
          <ProfileDetails />
        </Grid>
      </Grid>
    </>
  );
};
