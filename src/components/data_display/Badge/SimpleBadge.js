import * as React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

export function SimpleBadge() {
    return (
        <>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge><Badge badgeContent={4} color="secondary">
                <MailIcon color="action" />
            </Badge><Badge badgeContent={4} color="success">
                <MailIcon color="action" />
            </Badge>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <Badge color="secondary" badgeContent={0}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={0} showZero>
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={99}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={100}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" variant="dot">
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent=" ">
                {rectangle}
            </Badge>
            <Badge color="secondary" badgeContent=" " variant="dot">
                {rectangle}
            </Badge>
            <Badge color="secondary" overlap="circular" badgeContent=" ">
                {circle}
            </Badge>
            <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                {circle}
            </Badge>
        </>
    );
}
