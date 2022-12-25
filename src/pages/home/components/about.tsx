import { Box, Grid, Stack, Typography } from "@mui/material";

export const About = () => {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h2" sx={{ mb: 5 }}>
          About us
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          <Grid item xs={1} sm={4} md={4}>
            <img src="/about/xsports-arena.png" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <Stack spacing={2}>
              <Box sx={{ p: 5 }}>
                <Typography
                  variant="h4"
                  style={{
                    color: "#138180",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  "We are the Pioneer indoor sports and training facility in
                  Sacramento California"
                </Typography>
              </Box>

              <Box>
                Our aim is to promote indoor sports within the local community
                and to create an indoor sporting lifestyle among families,
                friends and sporting professionals in Sacramento.The indoor
                sports facility provides a variety of sporting activities such
                as Indoor Baseball, Softball, Field hockey, Futsal and cricket.
                Due to the high demand in Baseball, Softball, Field hockey and
                Futsal our open Facility turf is specially customized to sooth
                these indoor sports with all necessary amenities. We are also
                equipped with a state of the art batting cage facility and
                automatic bowling machines containing three full run lanes
                especially supporting professionals in baseball, softball and
                cricket to improve their technical skills in the game. The
                indoor open facility is a great place for parties and any sports
                event limited to its size. We also provide one to one training
                sessions in indoor cricket and soft ball to groups and
                individuals who are keen to groom the sport professionally. Our
                trainers are certified and well experienced in their specialized
                sport.
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={1} sm={4} md={4}>
            <img src="/about/owner.png" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
