/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Grid } from '@mui/material';
import CustomTextField from '../CustomTextField/CustomTextField';

interface CustomerTicketDetailsProps {
  width: number;
  buttonTitle: string;
}

export default function CustomerTicketDetails(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: CustomerTicketDetailsProps
) {
  return (
    <div className='customer-ticket-details'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <CustomTextField
            width={250}
            regex={/^[a-zA-Z]{1,10}$/}
            label={'Name'}
            errorMessage={'Invalid name!'}
            onChange={(value: string) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={9}>
        <CustomTextField
            width={250}
            regex={/^[a-zA-Z]{1,10}$/}
            label={'Surname'}
            errorMessage={'Invalid surname!'}
            onChange={(value: string) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
        <CustomTextField
            width={250}
            regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            label={'Email'}
            errorMessage={'Invalid email!'}
            onChange={(value: string) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={9}>
        <CustomTextField
            width={250}
            regex={/^(\+[1-9])?[0-9]{10}$/} 
            label={'Phone Number'}
            errorMessage={'Invalid hone number!'}
            onChange={(value: string) => {
              console.log(value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained'>{props.buttonTitle}</Button>
        </Grid>
      </Grid>
    </div>
  );
}
