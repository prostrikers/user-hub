import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { PROFILE_DETAILS_COLOR } from "../../constants/colors";
import { useUserStore } from "../../store/createUserSlice";
import { BookingList } from "./components/BookingList";

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

                <InforamtionDisplay name={"Age"} details={`20`} />
                <InforamtionDisplay name={"Living in"} details={"Colombo"} />
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

                <InforamtionDisplay
                  name={"Preferred sport"}
                  details={`Baseball`}
                />
                <InforamtionDisplay name={"Gender "} details={"Male"} />
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
