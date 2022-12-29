import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useTransactions } from "../../../hooks/transaction/useTransactions";

export const BookingList = () => {
  const { data, isLoading, isSuccess } = useTransactions();

  return (
    <>
      {isLoading && <CircularProgress />}

      {isSuccess && data && (
        <>
          <Stack spacing={2}>
            {data.data.map((data) => {
              return (
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={12}
                  >
                    <Typography variant="body1">
                      {data.transactionType}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#B3B6B9",
                        fontWeight: "normal",
                      }}
                    >
                      {new Date(data.createdAt).toDateString()}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </>
      )}
    </>
  );
};
