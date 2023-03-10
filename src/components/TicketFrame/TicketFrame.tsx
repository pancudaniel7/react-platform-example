import { Grid } from '@mui/material';
import DateWidget from '../DateWidget/DateWidget';
import './TicketFrame.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CustomerTicketDetails from '../CustomerTicketDetails/CustomerTicketDetails';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

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
          {/* <BuyTicket
            title='PRESENTING'
            mainTitle='#1 Virtual Video Marketing Conference'
            buttonTitle='Buy Ticket'
          /> */}

          {/* <BuyTicketDetails ticketPrice={40} currency={'RON'} buttonTitle={'Next'} sliderWidth='250px'/> */}

          <CustomerTicketDetails width={200} buttonTitle={'Buy Ticket'} />
        </Grid>
      </Grid>
    </div>
  );
}
