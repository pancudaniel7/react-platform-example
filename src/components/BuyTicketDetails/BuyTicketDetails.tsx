import { Button, Grid, Slider } from '@mui/material';
import NumberInput from '../NumberInput/NumberInput';
import './BuyTicketDetails.css';

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
          <NumberInput
            regex={/^[0-9]{0,4}$/}
            errorMessage='Invalid!'
            width={110}
            currency='RON'
          />
        </Grid>
        <Grid item xs={5}>
          <div className='counter-slider'>
            <Slider
              // getAriaValueText={valuetext}
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const SliderStyles = {
//   ''
// };
