import { IBookingDetails } from "../interface";

export interface IEventCalendar {
  _id: string;
  id?: string;
  title: string;
  end: string;
  start: string;
  user: string;
  backgroundColor: string;
  textColor: string;
  allDay: boolean;
}

export const mapEventCalendar = (
  bookingDetails: IBookingDetails
): IEventCalendar => ({
  _id: bookingDetails._id,
  id: bookingDetails._id,
  title: "Booked",
  start: bookingDetails.startTime,
  end: bookingDetails.endTime,
  user: "unknown",
  backgroundColor: "#06283D",
  textColor: "white",
  allDay: false,
});

export const mapArrayEventCalendar = (
  listEventsCalendar: IBookingDetails[]
) => {
  const listEventsCalendarFormated = listEventsCalendar.map((eventCalendar) =>
    mapEventCalendar(eventCalendar)
  );

  return listEventsCalendarFormated;
};
