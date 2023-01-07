import TicketFooter from "./TicketFooter/TicketFooter";
import TicketFrame from "../../components/TicketFrame/TicketFrame";
import "./TicketPage.css";

function TicketPage() {
  return (
    <div className="background">
      <TicketFrame />
      <TicketFooter />
    </div>
  );
}

export default TicketPage;
