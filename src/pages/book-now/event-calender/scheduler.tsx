import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ITransactionDetails } from "../interface";
import { mapArrayEventCalendar } from "./event-calender";
import "./style.css";
import { DateSelectArg } from "@fullcalendar/core";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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
  const [displayTime, setDisplayTime] = useState<DateSelectArg | null>(null);
  const [count, setCount] = useState(1);

  const listAllEventsCalendar = mapArrayEventCalendar(eventsCalendar);

  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const handleAddEventSelectAndOpenModal = (selectInfo: DateSelectArg) => {
    setShowModal(true);
    setDisplayTime(selectInfo);
    setSelectedTime(selectInfo);
  };

  const updateTimeByMinutes = (action: string) => {
    let updatedTime = displayTime;
    let minutes = 30;

    if (action === "ADD") {
      updatedTime!.end = new Date(displayTime!.end.getTime() + minutes * 60000);
    } else if (action === "REMOVE") {
      updatedTime!.end = new Date(displayTime!.end.getTime() - minutes * 60000);
    } else {
      console.log("Invalid action. Please use 'ADD' or 'REMOVE'");
      return;
    }
    updatedTime!.endStr = updatedTime!.end.toISOString();
    setDisplayTime(updatedTime);
    setCount(count + 1);
  };

  const successSubmit = () => {
    setSelectedTime(displayTime);
    setShowModal(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 2,
    bgcolor: "background.paper",
    boxShadow: 2,
    p: 4,
  };

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={style}>
          <Stack direction="row" spacing={2}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Your selected time is
            </Typography>

            <Box>
              <Stack direction="row" spacing={2}>
                <Box
                  style={{
                    height: "100%",
                    margin: "auto",
                  }}
                >
                  {displayTime && (
                    <IconButton
                      aria-label="remove"
                      size="small"
                      disabled={
                        displayTime!.end.getTime() -
                          displayTime!.start.getTime() <=
                        1000 * 60 * 30
                          ? true
                          : false
                      }
                      style={{
                        backgroundColor:
                          displayTime!.end.getTime() -
                            displayTime!.start.getTime() <=
                          1000 * 60 * 30
                            ? "#EBEBE4"
                            : "#F24E1E",
                      }}
                      onClick={() => updateTimeByMinutes("REMOVE")}
                    >
                      <RemoveIcon
                        fontSize="small"
                        style={{
                          color: "white",
                        }}
                      />
                    </IconButton>
                  )}
                </Box>

                <Box
                  style={{
                    backgroundColor: "#EFEEEE",
                    fontSize: 10,
                    textAlign: "center",
                    margin: "auto",
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                  sx={{ p: 1 }}
                >
                  <Typography variant="body1">
                    {`${displayTime?.start.toLocaleTimeString()} - ${displayTime?.end.toLocaleTimeString()}`}
                  </Typography>
                </Box>

                <Box
                  style={{
                    height: "100%",
                    margin: "auto",
                  }}
                >
                  <IconButton
                    aria-label="remove"
                    size="small"
                    style={{
                      backgroundColor: "#85B6FF",
                    }}
                    onClick={() => updateTimeByMinutes("ADD")}
                  >
                    <AddIcon
                      fontSize="small"
                      style={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          </Stack>

          <Typography id="modal-modal-description" color="red" sx={{ mt: 2 }}>
            Please note that a slot is limited to 30 mins*
          </Typography>

          <ButtonGroup sx={{ mt: 5 }} size="small">
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              style={{ borderRadius: 5 }}
              component={"a"}
              href="#proceed-button"
              onClick={successSubmit}
            >
              Confirm
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
            start: "prev,next",
            end: "dayGridMonth,timeGridWeek,timeGridDay,",
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
          height="700px"
          timeZone="local"
        />
      </div>
    </>
  );
};
