import { Paper, Stack, Typography } from "@mui/material";
import { useUserStore } from "../../../store/createUserSlice";

export const MembershipCard = () => {
  const { user } = useUserStore();

  return (
    <Paper
      elevation={5}
      sx={{ px: 4, py: 3 }}
      style={{
        width: "100%",
        background: " linear-gradient(92.09deg, #07293E 1.01%, #305D7A 98.65%)",
        borderRadius: 20,
      }}
    >
      <Stack spacing={2} sx={{ px: 2, py: 2 }}>
        <Typography variant="h4" color="white" style={{ fontWeight: "normal" }}>
          Membership
        </Typography>

        <Typography
          variant="h2"
          color="white"
          style={{ textTransform: "uppercase" }}
        >
          {user?.plan ? <> {user.plan.planName}</> : "Rookie"}
        </Typography>

        <Typography variant="body1" color="white">
          Your have subscribed to{" "}
          {user?.plan ? <> {user.plan.planName}</> : "Rookie"} plan.
        </Typography>
      </Stack>
    </Paper>
  );
};
