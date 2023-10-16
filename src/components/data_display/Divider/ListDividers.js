import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem ListItemListItemButton>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem ListItemButton divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem ListItemButton>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem ListItemButton>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
