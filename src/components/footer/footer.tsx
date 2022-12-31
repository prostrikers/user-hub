import {
  Box,
  Stack,
  Grid,
  Typography,
  Button,
  Container,
  Divider,
} from "@mui/material";
import { FOOTER_BACKGROUND_COLOR } from "../../constants/colors";

const footerLinks = [
  {
    link: "Rentals",
    url: "#",
  },
  {
    link: "Training",
    url: "#",
  },
  {
    link: "Shop ",
    url: "#",
  },
  {
    link: "Contact",
    url: "#",
  },
  {
    link: "Privacy & terms",
    url: "#",
  },
];

export const Footer = () => {
  return (
    <>
      <Box
        style={{
          background: FOOTER_BACKGROUND_COLOR,
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={7} xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ p: 5 }}
            >
              <img src="/logo.png" />

              <Stack
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  INDOOR SPORTS FACILITIES
                </Typography>

                <Typography variant="body1">
                  We are the Pioneer indoor sports and training facility in
                  Sacramento California
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ mt: 2 }}
                  style={{
                    borderRadius: 13,
                    textTransform: "none",
                    background: "#06283D",
                  }}
                >
                  Make a booking now
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={5} xs={12}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems={{ xs: "center", md: "end" }}
              spacing={{
                xs: 0,
                md: 10,
              }}
              sx={{ p: 5 }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={{
                  xs: 2,
                  md: 12,
                }}
              >
                {footerLinks.map((link) => {
                  return <Typography variant="body1">{link.link}</Typography>;
                })}
              </Stack>
            </Stack>

            <Divider />

            <Container>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={{ xs: "center", md: "flex-end" }}
                alignItems={{ xs: "center", md: "end" }}
                spacing={{ xs: 3, md: 12 }}
                sx={{ mt: 2, mb: 1 }}
              >
                <Typography variant="body1">Follow us on</Typography>
                <Typography variant="body1">test</Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={{ xs: "center", md: "flex-end" }}
                alignItems={{ xs: "center", md: "end" }}
                spacing={{ xs: 3, md: 12 }}
                sx={{ mt: 2, mb: 1 }}
              >
                <Typography variant="body1">Payment options</Typography>
                <Typography variant="body1">test</Typography>
              </Stack>
            </Container>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: 5, py: 2 }}>
        <Container maxWidth="xl">
          <Typography variant="body1">
            © 2022 Pro Strikers Indoor sports facilities
          </Typography>
        </Container>
      </Box>
    </>
  );
};
