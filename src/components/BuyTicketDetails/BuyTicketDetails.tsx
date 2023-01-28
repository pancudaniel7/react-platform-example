import { Button, Grid, Slider } from '@mui/material';
import './BuyTicketDetails.css';
import CustomTextField from '../CustomTextField/CustomTextField';

interface BuyTicketDetailsProps {
  ticketPrice: number;
  currency: string;
  buttonTitle: string;
  sliderWidth: string;
}

export default function BuyTicketDetails(props: BuyTicketDetailsProps) {
  return (
    <div className='buy-ticket-details'>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <h1>Ticket price &nbsp;</h1>
        </Grid>
        <Grid item xs={7}>
          <h1>
            {props.ticketPrice}
            {props.currency}
          </h1>
        </Grid>
        <Grid item xs={5}>
          <h3>Donation amount (Optional)</h3>
        </Grid>
        <Grid item xs={7}>
          <CustomTextField
            width={110}
            regex={/^([0-9]{1,4})?$/}
            label={'RON'}
            errorMessage={'Invalid price!'}
            onChange={function (value: string): void {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <div className='counter-slider'>
            <Slider
              marks
              valueLabelDisplay='auto'
              defaultValue={1}
              step={1}
              min={1}
              max={7}
              size='medium'
              sx={{
                width: props.sliderWidth,
                color: 'secondary.contrastText',
              }}
            />
          </div>
        </Grid>
        <Grid item xs={7}>
          <h3>2 tickets</h3>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained'>{props.buttonTitle}</Button>
        </Grid>
      </Grid>
    </div>
  );
}
