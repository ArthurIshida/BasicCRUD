import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Switch from 'react-switch'


export default function Switches(props){
  const classes = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    fontSize: 20,
    paddingRight: 2,
    justifyContent:"flex-start",
    color: "white",
  };
  const [checked, setCheck] = useState(true);

  const handleChange = () => {
      if(checked === true){
        setCheck(!checked);
      }else{
        setCheck(!checked);
      }
  }

  return (
    <FormGroup row style={{marginTop: 15}}>
      <Switch checked={checked} onChange={handleChange} value="checked"
        uncheckedIcon={
          <Typography variant="h6" style={classes}>
            {props.text}
          </Typography>
        }
        checkedIcon={
          <Typography variant="h6" style={classes}>
            {props.text}
          </Typography>
        }
        height={30} width={150} />
    </FormGroup>
      );
}
