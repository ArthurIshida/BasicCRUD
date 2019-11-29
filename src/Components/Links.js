import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

export default function Links(props){
  var icon;

  /*If home render icon else render title*/
  if(props.text === "home"){
    icon = <IconButton style={props.style} onClick={<Redirect to={`${props.link}`}/>}>
              <HomeIcon />
           </IconButton>
  }else{
    icon = <IconButton onClick={<Redirect to={`${props.link}`}/>}>
              {props.text}
           </IconButton>
  }

  return(
    <Router>
      <ListItem component={Link} to={`${props.link}`}>
        {icon}
      </ListItem>
    </Router>
  )
}
