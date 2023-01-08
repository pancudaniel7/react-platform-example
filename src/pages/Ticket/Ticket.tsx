import TicketFooter from '../../components/TicketFooter/TicketFooter';
import TicketFrame from '../../components/TicketFrame/TicketFrame';
import './Ticket.css';

function Ticket() {
  return (
    <div className='background'>
      <TicketFrame />
      <TicketFooter />
    </div>
  );
}

export default Ticket;
