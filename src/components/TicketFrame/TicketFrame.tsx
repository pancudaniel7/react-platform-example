import { Grid } from '@mui/material';
import './TicketFrame.css';
import DateWidget from '../DateWidget/DateWidget';

function TicketFrame() {
  return (
    <div className='ticket-frame'>
      <Grid container spacing={4} className='ticket-upper-grid'>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <DateWidget from='05' to={undefined} />
        </Grid>
        <Grid item xs={8}>
          <p>Title</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default TicketFrame;
