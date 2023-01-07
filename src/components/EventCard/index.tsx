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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h4" component="h1">
          {from} {to ? `- ${to}` : ""}
        </Typography>
        <Typography gutterBottom variant="h6" component="h1">
          OCTOBER
        </Typography>
      </Box>
      <Divider variant="middle" color="white" />
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Typography variant="body1">
          {to ? "Event Date" : "Event Start Date"}
        </Typography>
      </Box>
    </Paper>
  );
}
