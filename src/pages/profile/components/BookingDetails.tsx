import { Box, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import Kalend, { CalendarEvent, CalendarView, CALENDAR_VIEW } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles
import { useMyBookings } from "../../../hooks/bookings/useMyBookings";
import { IBookingDetails } from "../../../interfaces/bookings";
import "../styles/bookings.css";

export const BookingDetails = () => {
  const { data, isLoading, isSuccess } = useMyBookings();

  const formattedEvents = (data: IBookingDetails[]) => {
    const formattedEvents: CalendarEvent[] = [];

    for (const booking of data) {
      formattedEvents.push({
        id: booking._id,
        startAt: booking.startTime,
        endAt: booking.endTime,
        summary: `Booking for ${booking.place} - ${booking.transactionId.status}`,
        color: `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")}`,
      });
    }

    return formattedEvents;
  };

  return (
    <>
      <Paper
        elevation={5}
        sx={{ px: 4, py: 3 }}
        style={{
          width: "100%",
          borderRadius: 20,
        }}
      >
        <Stack spacing={2} sx={{ px: 2, py: 2 }}>
          <Typography variant="h4">My bookings</Typography>

          <Box style={{ minWidth: "50vh" }}>
            {isLoading && <CircularProgress />}

            {isSuccess && data && (
              <Kalend
                onEventClick={() => console.log("test")}
                onNewEventClick={() => console.log("test")}
                events={formattedEvents(data.data)}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.AGENDA}
                disabledViews={[
                  CalendarView.DAY,
                  CalendarView.THREE_DAYS,
                  CalendarView.MONTH,
                  CalendarView.WEEK,
                ]}
                timeFormat={"24"}
                weekDayStart={"Monday"}
                calendarIDsHidden={["work"]}
                language={"en"}
              />
            )}
          </Box>
        </Stack>
      </Paper>
    </>
  );
};
