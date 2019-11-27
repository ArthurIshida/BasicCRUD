import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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

export default function Drawers() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const links = {
    test: "/teste",
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    classes.marginLeft = drawerWidth
  };

  const handleDrawerClose = () => {
    setOpen(false);
    classes.marginLeft = "auto"
  };

  //color: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}

  return(
    <Router>
    <div>
      <AppBar position="sticky" className={clsx({[classes.appBarShift]: open})}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start" className={clsx(open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Title
          </Typography>
          <Link to="/">
            <IconButton style={{color: "white"}} onClick={<Redirect to="/" />}>
              <HomeIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer className={{width: drawerWidth, flexShrink: 0}} variant="persistent" anchor="left" open={open}
        classes={{ paper: classes.drawerPaper}}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      <Divider />
      <List>
        <ListItem component={Link} to={links.test}>
          <IconButton onClick={<Redirect to={links.test}/>}>
            Teste
          </IconButton>
        </ListItem>
      </List>
      </Drawer>
    </div>
    </Router>
  );
}
