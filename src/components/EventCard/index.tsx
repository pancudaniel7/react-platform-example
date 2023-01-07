import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

interface EventCardProps {
  from: string;
  to?: string;
}
export default function EventCard({ from, to }: EventCardProps) {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 150,
        height: "100%",
        bgcolor: "rgb(62, 81, 246)",
        elevation: 10,
        color: "white",
      }}
    >
      <Box
        sx={{
          my: 2,
          mx: 2,
          paddingTop: 2,
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {from} {to ? `- ${to}` : ""}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          October
        </Typography>

        <Divider variant="middle" color="white" />

        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Typography variant="body1">Event Date</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
