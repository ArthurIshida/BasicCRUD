import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';
import Switches from './Switches';

const useStyles = makeStyles(theme => ({
  textTitle: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "oblique",
    fontFamily: "Trebuchet MS"
  },
  gridStyle: {
    backgroundColor: "lightgray",
    marginTop: 0,
    marginLeft: 0,
    width: "100%",
    borderRadius: 0,
  },
  paper: {
    backgroundColor: "#0B86A7",
    borderRadius: 14,
    padding: theme.spacing(3,2),
  },
}));

export default function Containers(){
    const classes = useStyles();
    const [person, setPerson] = useState("");
    const num = Math.floor(Math.random()*10);
    //TextField
    const [cpf, setCpf] = useState("");
    const [conta, setConta] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    //Switch
    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(true);
    const [check5, setCheck5] = useState(true);
    const [check6, setCheck6] = useState(true);

    const buttonPress = () => {
        if(nome !== "" && conta !== "" && cpf !== "" && senha !== ""){
          alert(`CPF: ${cpf}    Option 1: ${check1}    Option 4: ${check4}
                \nConta: ${conta}    Option 2: ${check2}    Option 5: ${check5}
                \nNome: ${nome}    Option 3: ${check3}    Option 6: ${check6}
                \nSenha: ${senha}`)
        }
    };

    const keyPress = (e) => {
      if(e.key === "Enter"){
        buttonPress()
      }
    }

    const fetch = () => {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
           .then(res => {console.log(res.data[num].name); setPerson(res.data[num].name)})
    }

    return (
      <Grid container spacing={4} className={classes.gridStyle} onKeyPress={e => keyPress(e)}>

          {/*TextField Grid*/}
          <Grid item xm>
            <Paper className={classes.paper} style={{marginLeft: 240}}>
              <Typography variant="h5" noWrap className={classes.textTitle}>
                Title
              </Typography>
              <GridList xm spacing={10}>
                {/*TextField Row 1*/}
                <Grid item>
                  <Input id="1" text="CPF" value={cpf} changeValue={(e) => setCpf(e.target.value)} />
                  <Input text="Conta" value={conta} changeValue={(e) => setConta(e.target.value)} />
                </Grid>
                {/*TextField Row 2*/}
                <Grid item>
                  <Input text="Nome" value={nome} changeValue={(e) => setNome(e.target.value)} />
                  <Input text="Senha" value={senha} changeValue={(e) => setSenha(e.target.value)} />
                </Grid>
              </GridList>
              <Button variant="contained" onClick={buttonPress}>
                Submit
              </Button>
            </Paper>
          </Grid>

          {/*Switch Grid*/}
          <Grid item xm>
            <Paper className={classes.paper}>
              <Typography variant="h5" noWrap className={classes.textTitle}>
                Switches
              </Typography>
              <GridList>
                  {/*Switch Row 1*/}
                  <Grid item>
                    <Switches checked={check1} changeState={(e) => setCheck1(!check1)} text="Option 1"/>
                    <Switches checked={check2} changeState={(e) => setCheck2(!check2)} text="Option 2"/>
                    <Switches checked={check3} changeState={(e) => setCheck3(!check3)} text="Option 3"/>
                  </Grid>
                  {/*Switch Row 2*/}
                  <Grid item>
                    <Switches checked={check4} changeState={(e) => setCheck4(!check4)} text="Option 4"/>
                    <Switches checked={check5} changeState={(e) => setCheck5(!check5)} text="Option 5"/>
                    <Switches checked={check6} changeState={(e) => setCheck6(!check6)} text="Option 6"/>
                  </Grid>
              </GridList>
            </Paper>
          </Grid>

          {/*Axios Grid*/}
          <Grid item xm>
            <Paper className={classes.paper} style={{marginLeft: 240}}>
              <Typography variant="h5" noWrap className={classes.textTitle}>
                Axios
              </Typography>
              <Button variant="contained" onClick={fetch} style={{marginTop: 12}}>
                Generate
              </Button>
              <Typography variant="h6" noWrap className={classes.textTitle} style={{marginTop: 10}}>
                {person}
              </Typography>
            </Paper>
          </Grid>
    </Grid>
    );
}
