import React, { FC } from 'react';
import styles from './BuyTicketDetails.module.css';

interface BuyTicketDetailsProps {}

const BuyTicketDetails: FC<BuyTicketDetailsProps> = () => (
  <div className={styles.BuyTicketDetails}>
    BuyTicketDetails Component
  </div>
);

export default BuyTicketDetails;
