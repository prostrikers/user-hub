import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";

export const ViewProfile = () => {
  return (
    <>
      <Paper elevation={3} sx={{ px: 3, py: 2 }} style={{ borderRadius: 20 }}>
        <Typography variant="h5">My profile</Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={11} sm={6}>
            <Box
              style={{ backgroundColor: "black", width: "100%", height: 500 }}
            ></Box>
          </Grid>
          <Grid item xs={4} md={1} sm={2}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="end"
              spacing={2}
            >
              <Avatar
                alt="Cindy Baker"
                sx={{ width: 100, height: 100, alignItems: "center" }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
