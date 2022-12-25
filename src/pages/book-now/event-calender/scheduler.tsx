import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { IBookingDetails } from "../interface";
import { mapArrayEventCalendar } from "./event-calender";
import "./style.css";
import { DateSelectArg } from "@fullcalendar/core";
import { Dispatch, SetStateAction, useState } from "react";

type CalendarSchedulerProps = {
  eventsCalendar: IBookingDetails[];
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

  return (
    <>
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

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div
                className="relative w-auto mx-auto max-w-3xl"
                style={{
                  minWidth: "40%",
                }}
              >
                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative pl-6 pr-6 flex-auto">
                    <p className="mt-5 text-black-500 text-2xl leading-relaxed p-2">
                      Your selected time is
                      <span className="bg-gray-200 p-2 rounded-md ml-5 text-lg">
                        {`${selectedTime?.start.toLocaleTimeString()} - ${selectedTime?.end.toLocaleTimeString()}`}
                      </span>
                    </p>

                    <p className="text-red-500 text-lg leading-relaxed p-2 my-1">
                      Please note that a slot is limited to 30 mins*
                    </p>
                  </div>
                  <div className="justify-start p-5 w-auto">
                    <button
                      className="bg-main-400 text-white active:bg-main-600 font-bold text-sm px-6 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Proceed
                    </button>
                    <button
                      className="text-main-400  font-bold text-sm px-6 py-2 rounded-lg outline outline-1 ml-5"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
};
