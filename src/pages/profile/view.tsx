import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { PROFILE_DETAILS_COLOR } from "../../constants/colors";
import { useUserStore } from "../../store/createUserSlice";
import { BookingList } from "./components/BookingList";
import Cards from "react-credit-cards";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCards } from "../../hooks/cards/useCard";
import "./styles/credit-cards.styles.css";
import { useManageSession } from "../../hooks/manageSession/useManageSession";
import { LoadingButton } from "@mui/lab";

export const ViewProfile = () => {
  const { user } = useUserStore();

  return (
    <>
      <Paper elevation={3} sx={{ p: 5 }} style={{ borderRadius: 20 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          My profile
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={11} sm={6}>
            <Stack>
              <Box>
                <Typography variant="h3">
                  {user?.firstName} {user?.lastName}
                </Typography>

                <Typography
                  variant="h5"
                  style={{ color: PROFILE_DETAILS_COLOR, fontWeight: "normal" }}
                >
                  Member
                </Typography>
              </Box>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={12}
                sx={{ mt: 5 }}
              >
                <InforamtionDisplay
                  name={"Full name"}
                  details={`${user?.firstName} ${user?.lastName}`}
                />

                <InforamtionDisplay name={"Age"} details={`-`} />
                <InforamtionDisplay name={"Living in"} details={"-"} />
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={12}
                sx={{ mt: 5 }}
              >
                <InforamtionDisplay
                  name={"Membership type"}
                  details={"Rookie"}
                />

                <InforamtionDisplay name={"Preferred sport"} details={`-`} />
                <InforamtionDisplay name={"Gender "} details={"-"} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4} md={1} sm={2}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="end"
              spacing={2}
            >
              <Avatar
                alt={user?.profileImgUrl}
                sx={{ width: 100, height: 100, alignItems: "center" }}
                src={user?.profileImgUrl}
              />
              <ViewUserCards />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 5, mb: 5 }} />

        <Typography variant="h5" sx={{ mb: 3 }}>
          Your last transactions
        </Typography>

        <BookingList />
      </Paper>
    </>
  );
};

const InforamtionDisplay = ({
  name,
  details,
}: {
  name: string;
  details: string;
}) => {
  return (
    <Box>
      <Typography
        variant="h5"
        style={{ color: PROFILE_DETAILS_COLOR, fontWeight: "normal" }}
      >
        {name}
      </Typography>

      <Typography variant="h5">{details}</Typography>
    </Box>
  );
};

const ViewUserCards = () => {
  const cardData = useCards();
  const manageSession = useManageSession();

  const moveToManageSession = () => {
    if (manageSession.isSuccess) {
      window.location.href = manageSession.data.data.url;
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mb={2}
        mt={3}
      >
        <Typography variant="h5">Your Cards</Typography>

        <LoadingButton
          type="submit"
          variant="outlined"
          sx={{ mt: 3 }}
          loading={manageSession.isLoading}
          onClick={moveToManageSession}
        >
          Update Payments
        </LoadingButton>
      </Stack>

      {cardData.isLoading && <CircularProgress color="inherit" />}
      {cardData.isSuccess && (
        <>
          <Carousel
            centerSlidePercentage={80}
            width={"300px"}
            infiniteLoop={true}
          >
            {cardData.data.data.data.map((card) => {
              return (
                <div key={card.id}>
                  <Cards
                    cvc={1234}
                    expiry={`${card.exp_year}/${card.exp_month}`}
                    name={"Dasith Vidanage"}
                    number={`***************${card.last4}`}
                    preview={true}
                    issuer={card.brand.toLowerCase()}
                  />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </div>
  );
};
