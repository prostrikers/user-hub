import { Box, IconButton, Paper, Stack } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  currentTime: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "2px",
    background: "#0066FF",
    zIndex: 1,
  },
}));

export const CalenderComponent = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [days, setDays] = useState<any>([]);
  const [currentTime, setCurrentTime] = useState<any>(moment().format("HH"));
  const classes = useStyles();

  useEffect(() => {
    let newDays = [];
    for (let i = 0; i < 7; i++) {
      newDays.push(currentDate.clone().startOf("week").add(i, "day"));
    }
    setDays(newDays);
  }, [currentDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevWeek = () => {
    setCurrentDate(currentDate.subtract(1, "week"));
    let newDays = [];
    for (let i = 0; i < 7; i++) {
      newDays.push(currentDate.clone().startOf("week").add(i, "day"));
    }
    setDays(newDays);
  };

  const handleNextWeek = () => {
    setCurrentDate(currentDate.add(1, "week"));
    let newDays = [];
    for (let i = 0; i < 7; i++) {
      newDays.push(currentDate.clone().startOf("week").add(i, "day"));
    }
    setDays(newDays);
  };

  return (
    <>
      <Paper
        style={{
          backgroundColor: "#EAEEF1",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <div>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ m: 2, mb: 3 }}
          >
            <IconButton
              onClick={handlePrevWeek}
              style={{
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#fff",
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Box
              style={{
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#fff",
              }}
            >
              {currentDate.toDate().toDateString()}
            </Box>

            <IconButton
              onClick={handleNextWeek}
              style={{
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#fff",
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </div>
        <div>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 0 }}
          >
            <div
              style={{
                width: "50%",
                color: "#696767",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: 50,
                  padding: "10px",
                  fontWeight: 400,
                  borderTop: "1px solid #B3B3B3",
                  borderBottom: "1px solid #B3B3B3",
                }}
              >
                <AccessTimeIcon />
              </div>

              {Array.from({ length: 24 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    height: "50px",
                    textAlign: "center",
                    bottom: 0,
                    padding: 20,
                  }}
                >
                  {i + 1}:00
                </div>
              ))}
            </div>
            {days.map((day: any) => (
              <div
                key={day.format("DD-MM-YYYY")}
                style={{
                  width: "100%",
                  color: "#696767",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    height: 50,
                    padding: "10px",
                    borderTop: "1px solid #B3B3B3",
                    fontWeight: 400,
                  }}
                >
                  {day.format("DD")} {day.format("ddd")}
                </div>

                {Array.from({ length: 24 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      borderTop: "1px solid #B3B3B3",
                      borderLeft: "1px solid #B3B3B3",
                      height: "50px",
                      padding: 20,
                    }}
                  ></div>
                ))}
                <div
                  className={classes.currentTime}
                  style={{ top: currentTime * 40 + 20 }}
                />
              </div>
            ))}
          </Stack>
        </div>
      </Paper>
    </>
  );
};
