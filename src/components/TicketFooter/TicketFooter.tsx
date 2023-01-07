import { Grid } from "@mui/material";
import "./TicketFooter.css";

export default function TicketFooter() {

  const divStyle = {
    color: 'blue',
  };

  return (
    <div>
      <Grid container spacing={4} className='ticket-upper-grid'>
        <Grid item xs={5}>
          <h1> Title of the <span style={divStyle}>Description</span></h1>
        </Grid>
        <Grid item xs={7}>
            
        </Grid>
      </Grid>
    </div>
  );
}
