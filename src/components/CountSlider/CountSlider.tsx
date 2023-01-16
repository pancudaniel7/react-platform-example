import { Box, Slider } from '@mui/material';
import './CountSlider.css';

interface NumberSliderProps {
  ariaLabel: string;
  maxNumber: number;
  width: number;
}

export default function NumberSlider(props: NumberSliderProps) {
  return (
    <Box sx={{ width: props.width }}>
      <Slider
        aria-label={props.ariaLabel}
        defaultValue={1}
        // getAriaValueText={value}
        valueLabelDisplay='auto'
        step={1}
        marks
        min={1}
        max={props.maxNumber}
      />
    </Box>
  );
}
      