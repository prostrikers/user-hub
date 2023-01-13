import { Backdrop, CircularProgress } from "@mui/material";

export const FullScreenLoader = () => {
  return (
    <>
      <Backdrop
        sx={{ color: "#06283D" }}
        style={{
          backgroundColor: "white",
        }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
