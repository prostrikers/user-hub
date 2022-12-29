import { Paper, Typography } from "@mui/material";

export const EditProfilePage = () => {
  return (
    <>
      <Paper elevation={3} sx={{ px: 3, py: 2 }} style={{ borderRadius: 20 }}>
        <Typography variant="h5">My profile</Typography>
      </Paper>
    </>
  );
};
