import MidButton from '../MidButton/MidButton';
import './BuyTicket.css';

interface BuyTicketProps {
  title: string;
  mainTitle: string;
  buttonTitle: string;
}

export default function BuyTicket(props: BuyTicketProps) {

  return (
    <div className='buy-ticket'>
      <h2>{props.title}</h2>
      <h1>{props.mainTitle}</h1>
      <MidButton buttonText={props.buttonTitle} />
    </div>
  );
}