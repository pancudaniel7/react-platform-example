import { Grid } from "@mui/material";
import "./TicketFrame.css";

function TicketFrame() {
  return (
    <div className="ticket-frame">
      <Grid container spacing={4} className="ticket-upper-grid">
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <p>Date</p>
        </Grid>
        <Grid item xs={8}>
          <p>Title</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default TicketFrame;
