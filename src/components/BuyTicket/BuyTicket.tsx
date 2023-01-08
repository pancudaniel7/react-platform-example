import { theme } from '../../App';
import MediumButton from '../MediumButton/MediumButton';
import './BuyTicket.css';

interface BuyTicketProps {
  title: string;
  mainTitle: string;
  buttonTitle: string;
}

export default function BuyTicket(props: BuyTicketProps) {
  return (
    <div className='buy-ticket'>
      <h3>{props.title}</h3>
      <MainTitle {...props} />
      <MediumButton buttonText={props.buttonTitle} />
    </div>
  );
}

function MainTitle(props: BuyTicketProps) {
  const words: string[] = props.mainTitle.split(' ');
  const element: JSX.Element = (
    <div>
      <h1>
        {words.slice(0, 1)}
        &nbsp;
        <span style={{ color: theme.palette.primary.main }}>
          {words.slice(2, 3)}
        </span>
        &nbsp;
        {words.slice(3, words.length).join(' ')}
      </h1>
    </div>
  );
  return element;
}
