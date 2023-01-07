import { Box } from "@mui/system";
import EventCard from "../../../components/EventCard";

export default function Banner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <EventCard from="05" />
      <EventCard from="05" to="06" />
    </Box>
  );
}
