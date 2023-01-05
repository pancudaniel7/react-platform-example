import './TicketFrame.css';
import ticketImage from '../../assets/images/ticket.jpg';

function TicketFrame() {
  return (
    <div className='ticket-frame'>
      <img
        height='160px'
        width='380px'
        src={ticketImage}
        alt='Ticket image not found!'
      />
    </div>
  );
}

export default TicketFrame;
