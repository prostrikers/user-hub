import { LoadingButton } from "@mui/lab";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import useFindPlans from "../../hooks/meta/usePlans";
import { IPlan } from "../../interfaces/plans";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import { makeStyles } from "@mui/styles";
import { useRef, useState } from "react";
import { useHover } from "../../hooks/useHover";

const useStyles = makeStyles({
  planCardBox: {
    width: "100%",
    transition: "background-color 0.2s ease-out",
    color: "#686868",
    borderRadius: 20,
    "&:hover": {
      backgroundColor: "#06283D",
      color: "#DADADA",
    },
  },
  headerStack: {
    "&:hover": {
      color: "#DADADA",
    },
  },
});

export const Plans = () => {
  const { isLoading, data } = useFindPlans();

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Select a plan
        </Typography>

        {isLoading && (
          <>
            <CircularProgress />
          </>
        )}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {data && (
            <>
              {data.data.map((plan: IPlan) => {
                return (
                  <>
                    <PlanCard key={plan._id} {...plan} />
                  </>
                );
              })}
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

const PlanCard = (props: IPlan) => {
  const classes = useStyles();
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <Box
      ref={ref}
      className={classes.planCardBox}
      sx={{ p: 4 }}
      style={{
        width: "100%",
        color: "#686868",
      }}
    >
      <Stack spacing={1} className={classes.headerStack}>
        <Typography variant="h5"> {props.planName}</Typography>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Typography
            component="h2"
            variant="h3"
            style={{
              color: `${isHovering ? "#FFFFFF" : "#333333"}`,
            }}
          >
            {props.price}
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: `${isHovering ? "#DADADA" : "#A4A4A4"}`,
            }}
          >
            /mo
          </Typography>
        </Stack>

        <Typography
          variant="h5"
          style={{
            color: `${isHovering ? "#DADADA" : "#A4A4A4"}`,
          }}
        >
          Get our individual plan for getting lorem{" "}
        </Typography>
      </Stack>

      <Stack
        spacing={2}
        sx={{ mt: 3 }}
        style={{
          color: `${isHovering ? "#FFFFFF" : "#686868"}`,
        }}
      >
        <PlanItem text={"open cricket net sessions for $20 per hour"} />
        <PlanItem text={"open cricket net sessions for $20 per hour"} />
        <PlanItem text={"open cricket net sessions for $20 per hour"} />
        <PlanItem text={"open cricket net sessions for $20 per hour"} />
        <PlanItem text={"open cricket net sessions for $20 per hour"} />
      </Stack>

      <LoadingButton
        variant={isHovering ? "contained" : "outlined"}
        color={isHovering ? "primary" : "inherit"}
        sx={{ mt: 5 }}
        fullWidth
      >
        Chose Plan
      </LoadingButton>
    </Box>
  );
};

const PlanItem = ({ text }: { text: string }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <IconButton
        color="primary"
        size="small"
        style={{
          background: "#D9D9D9",
          color: "black",
          fontWeight: 20,
        }}
      >
        <DoneSharpIcon style={{ fontSize: 15 }} />
      </IconButton>

      <Typography variant="subtitle1">{text}</Typography>
    </Stack>
  );
};
