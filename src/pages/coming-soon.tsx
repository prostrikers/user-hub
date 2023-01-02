import { Box, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AppName } from "../constants/app";

export const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title> Coming-Soon | {AppName} </title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Coming Soon
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            This feature is still under development. Please check back later.
          </Typography>
          <Typography variant="body1" component={Link} to="/">
            Back to Home
          </Typography>
        </Container>
      </Box>
    </>
  );
};
