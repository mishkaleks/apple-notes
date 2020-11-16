// Base
import React from 'react';
import clsx from 'clsx';

// Material-UI
import { CssBaseline, Box } from '@material-ui/core';

// Components
import TopBar from '../top-bar/top-bar';
import StableDrawer from '../stable-drawer/stable-drawer';
import ListNotes from '../list-notes/list-notes';
import NoteContent from '../note-content/note-content';

// Styles
import useStyles from './app-styles';

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar open={open} setOpen={setOpen} />
      <StableDrawer open={open} setOpen={setOpen} />
      <main className={clsx(classes.content, {
        [classes.contentShift]: open
      })}>
        <div className={classes.drawerHeader} />
        <Box className={classes.wrColumn}>
          <ListNotes />
          <NoteContent classes={classes} />    
        </Box>
      </main>    
    </div>
  );
}
