import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Links from './Links';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    height: 10,
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

export default function Drawers(props) {
  const classes = useStyles();
  
  return(
      <Drawer className={{width: drawerWidth, flexShrink: 0}} variant="persistent" anchor="left" open={props.open}
        classes={{ paper: classes.drawerPaper}}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.onClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      <Divider />
      <List>
        <Links link="/teste" text="Teste" />
        <Links link="/teste1" text="Teste1" />
        <Links link="/teste2" text="Teste2" />
        <Links link="/teste3" text="Teste3" />
        <Links link="/teste4" text="Teste4" />
      </List>
      </Drawer>
  );
}
