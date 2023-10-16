import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
            <CircularProgress variant="determinate" value={25} />
            <CircularProgress variant="determinate" value={50} />
            <CircularProgress variant="determinate" value={75} />
            <CircularProgress variant="determinate" value={100} />
            <CircularProgress variant="determinate" value={progress} />
        </Box>
    );
}
