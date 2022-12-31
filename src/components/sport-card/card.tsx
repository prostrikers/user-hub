import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface IPlayMode {
  id: number;
  name: string;
  image: string;
  link: string;
}

const playModes = [
  {
    id: 1,
    name: "Baseball cage",
    image: "/play-modes/baseball.png",
    link: "/book-now/baseball",
  },
  {
    id: 2,
    name: "Softball cage",
    image: "/play-modes/baseball.png",
    link: "/book-now/softball",
  },
  {
    id: 3,
    name: "Cricket cage",
    image: "/play-modes/baseball.png",
    link: "/book-now/cricket",
  },
  {
    id: 4,
    name: "Open field",
    image: "/play-modes/baseball.png",
    link: "/book-now/open",
  },
];

const SportsCard = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const navigate = useNavigate();

  const findModeById = (id: number): IPlayMode => {
    const [key, mode]: any = Object.entries(playModes).find(
      ([key, mode]: any) => mode.id === id
    );
    return mode;
  };

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
            <Button
              variant="contained"
              size="large"
              disabled={selectedCard == 0}
              sx={{ px: 5 }}
              onClick={() => navigate(findModeById(selectedCard).link)}
            >
              Proceed
            </Button>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ mt: 3 }}
        >
          {playModes.map((mode) => {
            return (
              <SportDetailsCard
                id={mode.id}
                img={mode.image}
                sport={mode.name}
                onClick={setSelectedCard}
                selectedCard={selectedCard}
              />
            );
          })}
        </Stack>
      </Card>
    </>
  );
};

export default SportsCard;
const SportDetailsCard = ({
  id,
  img,
  sport,
  onClick,
  selectedCard,
}: {
  id: number;
  img: string;
  sport: string;
  onClick: Dispatch<SetStateAction<number>>;
  selectedCard: number;
}) => {
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
        border: `${selectedCard == id ? "2px solid red" : "2px solid #06283D"}`,
      }}
      onClick={() => onClick(id)}
    >
      <Typography variant="h6" color="white">
        {sport}
      </Typography>
    </Box>
  );
};
