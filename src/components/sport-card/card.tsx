import { Box, Button, Card, Stack, Typography } from "@mui/material";
import "./style.css";

const playModes = [
  {
    id: 1,
    name: "Baseball cage",
    image: "/play-modes/baseball.png",
  },
  {
    id: 2,
    name: "Softball cage",
    image: "/play-modes/baseball.png",
  },
  {
    id: 3,
    name: "Cricket cage",
    image: "/play-modes/baseball.png",
  },
  {
    id: 4,
    name: "Open field",
    image: "/play-modes/baseball.png",
  },
];

const SportsCard = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{ p: 5 }}
        style={{
          background: "#06283D",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Stack spacing={0}>
              <Typography
                variant="h3"
                color="white"
                style={{ fontWeight: "normal" }}
              >
                Play modes
              </Typography>

              <Typography
                variant="h6"
                color="gray"
                style={{ fontWeight: "normal" }}
              >
                Select your champion sport to proceed
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Button variant="contained" size="large">
              Proceed{" "}
            </Button>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ mt: 3 }}
        >
          {playModes.map((mode) => {
            return <SportDetailsCard img={mode.image} sport={mode.name} />;
          })}
        </Stack>
      </Card>
    </>
  );
};

export default SportsCard;
const SportDetailsCard = ({ img, sport }: { img: string; sport: string }) => {
  return (
    <Box
      sx={{ p: 2 }}
      style={{
        display: "flex",
        height: 200,
        width: "100%",
        borderRadius: 10,
        cursor: "pointer",
        alignItems: "end",
        justifyContent: "center",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h6" color="white">
        {sport}
      </Typography>
    </Box>
  );
};
