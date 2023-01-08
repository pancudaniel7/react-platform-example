
import { Button } from '@mui/material';
import './MediumButton.css';

interface MediumButton {
  buttonText: string
}

export default function MediumButton(props: MediumButton) {
  return (
    <div>
      <Button className='mid-button' variant="contained">{props.buttonText}</Button>
    </div>
  );
}