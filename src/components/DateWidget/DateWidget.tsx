import { Divider } from '@mui/material';
import './DateWidget.css';

interface DateWidgetProps {
  from: string;
  to?: string;
}

export default function DateWidget(props: DateWidgetProps) {
  return (
    <div className='date-widget'>
      <div className='date-panel'>
        <UpperPanel {...props} />
        <Divider
          variant='middle'
          className='divider-line divider-big-line opacity'
        />
        <div className='date-bottom-panel'>
          <h3 className='date-text'>OCT</h3>
          <h3 className='low-opacity'>2020</h3>
        </div>
      </div>
    </div>
  );
}

function UpperPanel({ to, from }: DateWidgetProps): JSX.Element {
  let upperPanel: JSX.Element;
  if (to) {
    upperPanel = (
      <div className='date-upper-panel'>
        <h1 className='date-text'>{from}</h1>
        <Divider variant='middle' className='divider-line  high-opacity' />
        <h1 className='date-text'>{to}</h1>
      </div>
    );
  } else {
    upperPanel = <h1 className='date-text'>{from}</h1>;
  }
  return upperPanel;
}
