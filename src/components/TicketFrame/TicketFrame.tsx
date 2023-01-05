import { Grid } from '@mui/material';
import './TicketFrame.css';

function TicketFrame() {
  return (
    <div className='ticket-frame'>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </div>
  );
}

export default TicketFrame;
