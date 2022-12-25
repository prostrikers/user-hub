import { Box, Container, Stack, Typography } from "@mui/material";

const offers = [
  {
    img: "/what-we-offer/cage.png",
    title: "Indoor cages and field rentals",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },

  {
    img: "/what-we-offer/coach.png",
    title: "Professional coaching",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },

  {
    img: "/what-we-offer/league.png",
    title: "Indoor cricket t10 league",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },

  {
    img: "/what-we-offer/event.png",
    title: "Hosting indoor  recreational events",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },
];

export const WhatWeOffer = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: 'url("/what-we-offer.png")',
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container style={{ textAlign: "center" }} sx={{ p: 5 }}>
          <Typography
            variant="h2"
            color="white"
            style={{ textTransform: "uppercase" }}
          >
            What we offer
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ mt: 5, mb: 5 }}
          >
            {offers.map((offer) => {
              return (
                <OfferCard
                  title={offer.title}
                  img={offer.img}
                  description={offer.description}
                />
              );
            })}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const OfferCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <Box
        sx={{ p: 3 }}
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          textAlign: "left",
        }}
      >
        <img src={img} alt={title} style={{ width: "100%" }} />

        <Typography variant="h5" sx={{ mt: 2 }}>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </Box>
    </>
  );
};
