import { Box, Button, Grid, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SportsCard } from "../../components/sport-card";
import { AppName } from "../../constants/app";
import { About } from "./components/about";
import { WhatWeOffer } from "./components/offer";
import "./styles.css";

export const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <Helmet>
        <title> Home | {AppName} </title>
      </Helmet>
      <section>
        <Box>
          <Grid
            container
            spacing={0}
            columns={{ xs: 1, sm: 1, md: 11 }}
            maxWidth="100%"
            sx={{ m: 0 }}
          >
            <Grid item xs={1} sm={1} md={6} sx={{ m: 0 }}>
              <Box
                style={{
                  height: width < breakpoint ? 500 : 500,
                }}
                sx={{ p: { xs: 2, md: 15 }, mt: { xs: 15, md: 5 } }}
              >
                <Typography
                  variant="h2"
                  style={{
                    textTransform: "uppercase",
                  }}
                >
                  Do you aspire to be an{" "}
                </Typography>
                <Typography
                  variant="h2"
                  style={{
                    textTransform: "uppercase",
                    background:
                      "linear-gradient(90deg, #0A5888 10.68%, #25ADAC 62.87%),linear-gradient(0deg, #333333, #333333), linear-gradient(89.33deg, #6ED7D6 1.97%, rgba(110, 215, 214, 0) 73.18%)",
                    WebkitTextFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  indoor champion?
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ mt: 2 }}
                  style={{ fontWeight: "semibold" }}
                >
                  The only indoor sports facility and training center in
                  Sacramento CA, specializing in Baseball, Softball, Futsal and
                  Cricket. Book now for an action packed fun and learning.
                </Typography>

                <Button
                  variant="contained"
                  sx={{ mt: 4 }}
                  color="secondary"
                  size="large"
                  style={{
                    borderRadius: 13,
                    paddingLeft: 35,
                    paddingRight: 35,
                    background: "#06283D",
                  }}
                >
                  Virtual tour
                </Button>
              </Box>
            </Grid>
            {width < breakpoint ? null : (
              <Grid item xs={1} sm={1} md={5} sx={{ m: 0 }}>
                <Box
                  style={{
                    backgroundColor: "rgba(14, 189, 187, 0.6)",
                    height: 700,
                    clipPath: "polygon(17% 1%, 100% 0%, 100% 99%, 0 100%)",
                    alignItems: "flex-end",
                    filter: "drop-shadow(0px 16px 29px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <img
                    src="hero-content/baseball.png"
                    style={{
                      height: 700,
                      bottom: 0,
                      right: 0,
                      float: "right",
                      opacity: 0.5,
                      verticalAlign: "bottom",
                      marginTop: 50,
                    }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>

          <Container maxWidth="xl" sx={{ mt: width < breakpoint ? 0 : -10 }}>
            <SportsCard />
          </Container>

          <Container maxWidth="xl" sx={{ mt: 10, mb: 20 }}>
            <About />
          </Container>
        </Box>
        <WhatWeOffer />
      </section>
    </>
  );
};
