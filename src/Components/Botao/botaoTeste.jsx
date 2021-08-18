import * as React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './botao.css'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        //main: purple[500],
        main: 'rgb(3, 3, 80)',
        
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });


const BotaoTeste = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
        variant="contained"
        className="teste"
      >
        <Button>Precipitação</Button>
        <Button>Temperatura Máxima</Button>
        <Button>Umidade</Button>
      </ButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default BotaoTeste;
