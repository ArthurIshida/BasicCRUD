import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Links from './Links'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

export default function Bar(props){
  const classes = useStyles();
  const linkStyle = {
    color: "white"
  }

  return(
      <div>
      <AppBar position="sticky" className={clsx({[classes.appBarShift]: props.open})}>
        <Toolbar>
          <IconButton color="inherit" onClick={props.onClick} edge="start" className={clsx(props.open)} style={{display: props.open ? "none" : null}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Title
          </Typography>
          <Links link="/" text="home" style={linkStyle}/>
        </Toolbar>
      </AppBar>
      </div>
  )
}
