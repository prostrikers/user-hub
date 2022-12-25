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

export const BookNow = () => {
  const [selectedTime, setSelectedTime] = useState<DateSelectArg | null>(null);
  const [selectedLane, setSelectedLane] = useState("1");

  const bookedEvents = useCompletedBookings(selectedLane);
  const bookingMutation = useCreateBooking();

  useEffect(() => {
    setSelectedTime(null);
    bookedEvents.refetch();
  }, [selectedLane]);

  const placeOrder = () => {
    if (selectedTime) {
      bookingMutation.mutate({
        startTime: selectedTime.start.toISOString(),
        endTime: selectedTime.end.toISOString(),
        place: `lane${selectedLane}`,
      });
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={bookingMutation.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box sx={{ mt: 20, mb: 20 }}>
        <Typography variant="h3" gutterBottom>
          Membership plan : Individual
        </Typography>

        <Box sx={{ mt: 15, mb: 10 }}>
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

        <Box sx={{ mt: 10 }}>
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
        </Box>

        <Box sx={{ mt: 10 }}>
          <Button
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
              sx={{ mt: 5 }}
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
