import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';

const handleClick = () => {
    console.info('You clicked the Chip.');
};

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};
export function BasicChips() {
    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />
            <Chip label="Clickable" onClick={handleClick} />
            <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
            <Chip
                label="Clickable Deletable"
                onClick={handleClick}
                onDelete={handleDelete}
            />
            <Chip
                label="Clickable Deletable"
                variant="outlined"
                onClick={handleClick}
                onDelete={handleDelete}
            />
            <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
            <Chip
                label="Clickable Link"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
            />
            <Chip
                label="Custom delete icon"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                label="Custom delete icon"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
            />
            <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
            <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
            />
            <Chip icon={<FaceIcon />} label="With Icon" />
            <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
            <Stack direction="row" spacing={1}>
                <Chip label="primary" color="primary" />
                <Chip label="success" color="success" />
            </Stack>
            <Stack direction="row" spacing={1}>
                <Chip label="primary" color="primary" variant="outlined" />
                <Chip label="success" color="success" variant="outlined" />
            </Stack>
            <Chip label="Small" size="small" />
            <Chip label="Small" size="small" variant="outlined" />
            <Chip
                sx={{
                    height: 'auto',
                    '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                    },
                }}
                clickable
                label="This is a chip that has multiple lines."
            />
        </Stack>
    );
}
