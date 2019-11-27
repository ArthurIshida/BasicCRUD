import React, { useState } from 'react';
//import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
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
    const [cpf, setCpf] = useState("");
    const [conta, setConta] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const changeCpf = (e) => setCpf(e.target.value);
    const changeConta = (e) => setConta(e.target.value);
    const changeNome = (e) => setNome(e.target.value);
    const changeSenha = (e) => setSenha(e.target.value);

    const keyPress = () => {
        if(nome !== "" && conta !== "" && cpf !== "" && senha !== ""){
          alert(`Nome: ${nome}\nConta: ${conta}\nCPF: ${cpf}\nSenha: ${senha} `)
        }
    }

    const buttonPress = (e) => {
      if(e.key === "Enter" || e.keyCode === 13){
        keyPress()
      }
    }

    return (
      <Grid container spacing={10} className={classes.gridStyle} onKeyPress={e => buttonPress(e)}>
          <Grid item xm>
            <Paper className={classes.paper} style={{marginLeft: 240}}>
              <Typography variant="h5" noWrap className={classes.textTitle}>
                Title
              </Typography>
              <GridList xm spacing={10}>
                <Grid item>
                  <Input text="CPF" value={cpf} changeValue={changeCpf} />
                  <Input text="Conta" value={conta} changeValue={changeConta} />
                </Grid>
                <Grid item>
                  <Input text="Nome" value={nome} changeValue={changeNome} />
                  <Input text="Senha" value={senha} changeValue={changeSenha} />
                </Grid>
              </GridList>
              <Button variant="contained" onClick={keyPress}>
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
                    <Switches id="1" text="Options"/>
                    <Switches id="2" text="Options"/>
                    <Switches id="3" text="Options"/>
                  </Grid>
                  <Grid item>
                    <Switches id="4" text="Options"/>
                    <Switches id="5" text="Options"/>
                    <Switches id="6" text="Options"/>
                  </Grid>
              </GridList>
            </Paper>
          </Grid>
    </Grid>
    );
}
