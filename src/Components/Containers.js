import React, { useState } from 'react';
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

    const buttonPress = () => {
        if(nome !== "" && conta !== "" && cpf !== "" && senha !== ""){
          alert(`CPF: ${cpf}    Option 1: ${check1}
                \nConta: ${conta}    Option 2: ${check2}
                \nNome: ${nome}    Option 3: ${check3}
                \nSenha: ${senha}    Option 4: ${check4}`)
        }
    };

    const keyPress = (e) => {
      if(e.key === "Enter"){
        buttonPress()
      }
    }

    return (
      <Grid container spacing={10} className={classes.gridStyle} onKeyPress={e => keyPress(e)}>
          <Grid item xm>
            <Paper className={classes.paper} style={{marginLeft: 240}}>
              <Typography variant="h5" noWrap className={classes.textTitle}>
                Title
              </Typography>
              <GridList xm spacing={10}>
                <Grid item>
                  <Input id="1" text="CPF" value={cpf} changeValue={(e) => setCpf(e.target.value)} />
                  <Input text="Conta" value={conta} changeValue={(e) => setConta(e.target.value)} />
                </Grid>
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

          <Grid item sm>
            <Paper className={classes.paper}>
              <Typography variant="h5" noWrap className={classes.textTitle}>
                Switches
              </Typography>
              <GridList>
                  <Grid item>
                    <Switches checked={check1} changeState={(e) => setCheck1(!check1)} text="Option 1"/>
                    <Switches checked={check2} changeState={(e) => setCheck2(!check2)} text="Option 2"/>
                  </Grid>
                  <Grid item>
                    <Switches checked={check3} changeState={(e) => setCheck3(!check3)} text="Option 3"/>
                    <Switches checked={check4} changeState={(e) => setCheck4(!check4)} text="Option 4"/>
                  </Grid>
              </GridList>
            </Paper>
          </Grid>
    </Grid>
    );
}
