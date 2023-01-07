import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LineProgressBar(props: { percentage: number | undefined; }) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={props.percentage} />
    </Box>
  );
}