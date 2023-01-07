import { Grid } from '@mui/material';
import './TicketFrame.css';
import DateWidget from '../DateWidget/DateWidget';
import BuyTicket from '../BuyTicket/BuyTicket';

export default function TicketFrame() {
  return (
    <div className='ticket-frame'>
      <Grid container spacing={4} className='ticket-upper-grid'>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <DateWidget from='05' to={undefined} month='OCT' year='2022' />
        </Grid>
        <Grid item xs={8}>
          <BuyTicket
            title='PRESENTING'
            mainTitle='#1 Virtual Video Marketing Conference'
            buttonTitle='Buy Ticket'
          />
        </Grid>
      </Grid>
    </div>
  );
}
