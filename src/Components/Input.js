import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
    },
    textField: {
      width: "90%",
      display: "flex"
    },
}));

export default function Input(props){
  const classes = useStyles();

  return(
    <TextField required="true" borderRadius={14} className={classes.textField}
        label={props.text}
        margin="normal"
        variant="filled"
        type={props.text.toLocaleLowerCase() === "senha" ? "password" : "normal"}
        value={props.value}
        onChange={props.changeValue}
        style={{backgroundColor: "white"}}
    />
  )
}
