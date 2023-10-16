import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export function ContinuousSlider() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        console.log(value);
        return `${value}°C`;
      }

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                color="secondary"
            />
        </Box>
    );
}
