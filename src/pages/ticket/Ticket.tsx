import { Grid } from '@mui/material';
import TicketFrame from '../../components/TicketFrame/TicketFrame';
import './Ticket.css';
import LinearProgressBar from '../../components/LinearProgressBar/LinearProgressBar';

function Ticket() {
  return (
    <div className='ticket'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LinearProgressBar percentage={80}/>
        </Grid>
        <Grid item xs={4}>
          <h1 className='title-page'>The title of the page</h1>
        </Grid>
        <Grid item xs={8}>
          <TicketFrame />
        </Grid>
        <Grid item xs={12}>
          <p>
            “The Yellow Wallpaper” by Charlotte Perkins Gilman explores a
            woman’s descent into madness after she’s confined to a room with
            yellow wallpaper to help her nervous disorder. It is a
            groundbreaking short story that drew attention to mental health and
            women’s rights when it was released and has influenced many writers,
            including Alice Walker and Sylvia Plath. “The Yellow Wallpaper” by
            Charlotte Perkins Gilman explores a woman’s descent into madness
            after she’s confined to a room with yellow wallpaper to help her
            nervous disorder. It is a groundbreaking short story that drew
            attention to mental health and women’s rights when it was released
            and has influenced many writers, including Alice Walker and Sylvia
            Plath. “The Yellow Wallpaper” by Charlotte Perkins Gilman explores a
            woman’s descent into madness after she’s confined to a room with
            yellow wallpaper to help her nervous disorder. It is a
            groundbreaking short story that drew attention to mental health and
            women’s rights when it was released and has influenced many writers,
            including Alice Walker and Sylvia Plath. “The Yellow Wallpaper” by
            Charlotte Perkins Gilman explores a woman’s descent into madness
            after she’s confined to a room with yellow wallpaper to help her
            nervous disorder. It is a groundbreaking short story that drew
            attention to mental health and women’s rights when it was released
            and has influenced many writers, including Alice Walker and Sylvia
            Plath. “The Yellow Wallpaper” by Charlotte Perkins Gilman explores a
            woman’s descent into madness after she’s confined to a room with
            yellow wallpaper to help her nervous disorder. It is a
            groundbreaking short story that drew attention to mental health and
            women’s rights when it was released and has influenced many writers,
            including Alice Walker and Sylvia Plath. “The Yellow Wallpaper” by
            Charlotte Perkins Gilman explores a woman’s descent into madness
            after she’s confined to a room with yellow wallpaper to help her
            nervous disorder. It is a groundbreaking short story that drew
            attention to mental health and women’s rights when it was released
            and has influenced many writers, including Alice Walker and Sylvia
            Plath.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ticket;
