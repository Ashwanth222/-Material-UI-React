import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function BasicSwitches() {
    return (
        <div>
            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
            <Switch {...label} defaultChecked size="small" />
            <Switch {...label} defaultChecked />
            <Switch {...label} defaultChecked />
            <Switch {...label} defaultChecked color="secondary" />
            <Switch {...label} defaultChecked color="warning" />
            <Switch {...label} defaultChecked color="default" />
            {/* <PinkSwitch {...label} defaultChecked /> */}
        </div>
    );
}
