import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ITransactionDetails } from "../interface";
import { mapArrayEventCalendar } from "./event-calender";
import "./style.css";
import { DateSelectArg } from "@fullcalendar/core";
import { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";

type CalendarSchedulerProps = {
  eventsCalendar: ITransactionDetails[];
  selectedTime: DateSelectArg | null;
  setSelectedTime: Dispatch<SetStateAction<DateSelectArg | null>>;
};

export const CalendarScheduler = ({
  eventsCalendar,
  selectedTime,
  setSelectedTime,
}: CalendarSchedulerProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const listAllEventsCalendar = mapArrayEventCalendar(eventsCalendar);

  console.log(listAllEventsCalendar);

  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const handleAddEventSelectAndOpenModal = (selectInfo: DateSelectArg) => {
    setShowModal(true);
    setSelectedTime(selectInfo);
    console.log(selectInfo);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    borderRadius: "5px",
    bgcolor: "background.paper",
    boxShadow: 2,
    p: 4,
  };

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Your selected time is
            <code style={{ marginLeft: 10 }}>
              {`${selectedTime?.start.toLocaleTimeString()} - ${selectedTime?.end.toLocaleTimeString()}`}
            </code>
          </Typography>
          <Typography id="modal-modal-description" color="red" sx={{ mt: 2 }}>
            Please note that a slot is limited to 30 mins*
          </Typography>

          <ButtonGroup sx={{ mt: 5 }} size="small">
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              style={{ borderRadius: 5 }}
              onClick={() => setShowModal(false)}
            >
              Proceed
            </Button>
            <Button
              style={{ borderRadius: 5 }}
              onClick={() => {
                setSelectedTime(null);
                setShowModal(false);
              }}
            >
              Go back
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>

      <div className="mx-auto mt-10">
        <FullCalendar
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          weekends={weekends.weekendsVisible}
          select={handleAddEventSelectAndOpenModal}
          eventClick={() => console.log("click")}
          eventChange={() => console.log("change event")}
          initialEvents={listAllEventsCalendar}
          longPressDelay={1000}
          eventLongPressDelay={1000}
          selectLongPressDelay={1000}
          selectable={true}
          dayMaxEvents={true}
          allDaySlot={false}
          editable={true}
          height="500px"
          timeZone="local"
        />
      </div>
    </>
  );
};
