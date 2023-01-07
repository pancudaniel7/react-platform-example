
import { Button } from '@mui/material';
import './MidButton.css';

interface MidButton {
  buttonText: string
}

export default function MidButton(props: MidButton) {
  return (
    <div>
      <Button className='mid-button' variant="contained">{props.buttonText}</Button>
    </div>
  );
}