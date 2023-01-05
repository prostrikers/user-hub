import { DateSelectArg } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import useCompletedBookings from "../../hooks/meta/completed-bookings";
import { CalendarScheduler } from "./event-calender/scheduler";
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useCreateBooking } from "../../hooks/bookings/createBookingMutation";
import { Helmet } from "react-helmet-async";
import { AppName } from "../../constants/app";
import { useNavigate, useParams } from "react-router-dom";

export const BookNow = () => {
  const [selectedTime, setSelectedTime] = useState<DateSelectArg | null>(null);
  const [selectedLane, setSelectedLane] = useState("1");
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const bookedEvents = useCompletedBookings(selectedLane);
  const bookingMutation = useCreateBooking();
  const navigate = useNavigate();

  let { type } = useParams();

  useEffect(() => {
    setSelectedTime(null);
    bookedEvents.refetch();
  }, [selectedLane]);

  useEffect(() => {
    const includes = ["cricket", "softball", "baseball"].includes(type!);

    if (!includes) {
      navigate("/errors/sport/not-found");
    }
  }, [type]);

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const placeOrder = () => {
    if (selectedTime) {
      bookingMutation.mutate({
        startTime: selectedTime.start.toISOString(),
        endTime: selectedTime.end.toISOString(),
        place: `lane${selectedLane}`,
        sport: type,
        numberOfPeople: numberOfPeople,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title> Book Now | {AppName} </title>
      </Helmet>

      <div
        className="container"
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <img
          src="/cricket.png"
          style={{
            width: "100%",
            height: "30%",
            color: "white",
          }}
        />
        <Typography
          variant="h2"
          gutterBottom
          style={{
            position: "absolute",
            color: "white",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            textTransform: "uppercase",
          }}
        >
          {type} cage
        </Typography>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={bookingMutation.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box>
        <Typography variant="h3" gutterBottom sx={{ mt: 5 }}>
          Membership plan : Individual
        </Typography>

        <Box sx={{ mt: 5, mb: 5 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <FormControl style={{ width: "30%" }}>
              <InputLabel>Select a lane</InputLabel>
              <Select
                value={selectedLane}
                label="Select a lane"
                onChange={(e) => setSelectedLane(e.target.value)}
              >
                <MenuItem value={"1"}>Lane 1</MenuItem>
                <MenuItem value={"2"}>Lane 2</MenuItem>
                <MenuItem value={"3"}>Lane 3</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Number of people"
              variant="outlined"
              type="number"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            />
          </Stack>
        </Box>

        {bookedEvents.isRefetching ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <>
            {bookedEvents.isLoading ? (
              <>
                <CircularProgress />
              </>
            ) : (
              <>
                {bookedEvents.isSuccess && (
                  <CalendarScheduler
                    eventsCalendar={bookedEvents.data.data}
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                  />
                )}
              </>
            )}
          </>
        )}

        <Box sx={{ mt: 4 }}>
          {/*
          <Typography variant="h4" gutterBottom>
            Add ons
          </Typography>


          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Pro bowling machine (Baseball/Cricket) speed up to 100mph with more options ($20.00 / per hour)"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Baseball/Cricket/Softball Bowling machine up to 60mph ($15.00 /per hour)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="(Baseball/Cricket) Junior bowling machine up to 40mph ($10.00 /per hour)"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Cricket gear kit (stumps, 2 cricket bats, and ball) ($20.00 /per slot)"
            />
          </FormGroup>
        */}
        </Box>

        <Box sx={{ mt: 3 }}>
          <Button
            id="proceed-button"
            size="large"
            disabled={!selectedTime}
            variant="contained"
            onClick={() => placeOrder()}
          >
            Proceed
          </Button>

          {selectedTime && (
            <Typography
              variant="body1"
              gutterBottom
              style={{ color: "red" }}
              sx={{ mt: 2 }}
            >
              * Order will be placed for{" "}
              <code>
                {`${selectedTime?.start.toLocaleTimeString()} - ${selectedTime?.end.toLocaleTimeString()}`}
              </code>
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
