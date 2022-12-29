import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { MembershipCard } from "./components/MembershipCard";

export const ProfilePage = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Hello, <span style={{ fontWeight: "normal" }}>Kavindu Rupasinghe</span>
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={8}>
          <MembershipCard
            name="Membership"
            plan="Rookie"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            style={{ width: "100%", height: 500, backgroundColor: "black" }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};
