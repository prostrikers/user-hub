import { Paper, Stack, Typography } from "@mui/material";

export const MembershipCard = ({
  name,
  plan,
  description,
}: {
  name: string;
  plan: string;
  description: string;
}) => {
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
          {name}
        </Typography>

        <Typography
          variant="h2"
          color="white"
          style={{ textTransform: "uppercase" }}
        >
          {plan}
        </Typography>

        <Typography variant="body1" color="white">
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};
