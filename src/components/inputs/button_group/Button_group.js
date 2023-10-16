import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/material';

export function BasicButtonGroup() {
    const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
    ];
    return (
        <Box
            sx={{
                display: 'block',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 2,
                },
            }}
        ><ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                {buttons}
            </ButtonGroup>
            <ButtonGroup size="small" aria-label="small button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
            >
                <Button>One</Button>
                <Button>Two</Button>
            </ButtonGroup>
        </Box>
    );
}