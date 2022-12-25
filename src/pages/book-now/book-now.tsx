import { DateSelectArg } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import useCompletedBookings from "../../hooks/meta/completed-bookings";
import { CalendarScheduler } from "./event-calender/scheduler";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

export const BookNow = () => {
  const [selectedTime, setSelectedTime] = useState<DateSelectArg | null>(null);
  const [selectedLane, setSelectedLane] = useState("1");
  const [showBackDrop, setShowBackDrop] = useState(false);

  const bookedEvents = useCompletedBookings(selectedLane);

  useEffect(() => {
    setSelectedTime(null);
    bookedEvents.refetch();
  }, [selectedLane]);

  const placeOrder = () => {
    setShowBackDrop(true);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackDrop}
        onClick={() => setShowBackDrop(true)}
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

        <div className="mt-20">
          <h2 className="text-3xl font-medium sm:text-3xl"></h2>
        </div>

        <div className="mt-10">
          <dl>
            <div className="bg-white py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
              <dt className="text-sm font-medium text-gray-900">
                <div className="w-5"></div>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="w-1/5"></div>
              </dd>
            </div>
          </dl>
        </div>

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

          <ul className="list-disc mt-5">
            <li>
              <Typography variant="body1" gutterBottom>
                Pro bowling machine (Baseball/Cricket) speed up to 100mph with
                more options ($20.00 / per hour)
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom>
                Baseball/Cricket/Softball Bowling machine up to 60mph ($15.00 /
                per hour)
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom>
                (Baseball/Cricket) Junior bowling machine up to 40mph ($10.00 /
                per hour)
              </Typography>
            </li>

            <li>
              <Typography variant="body1" gutterBottom>
                Cricket gear kit (stumps, 2 cricket bats, and ball) ($20.00 /
                per slot)
              </Typography>
            </li>
          </ul>
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
