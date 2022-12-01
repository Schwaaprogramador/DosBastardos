import React from "react";
import { Link } from "react-router-dom";
import styled from './LandingPage.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#006064',
      },
    },
  });
 

function LandingPage(){
    return(
    <>
    <ThemeProvider theme={theme}>
        <div className={styled.container}>
                            
                            <h1 className={styled.landingTitle}>Dos Bastardos</h1>
                        
                            <Link to='/home'>  
                                <Button 
                                        variant="outlined" 
                                        color="primary"
                                        size="small"
                                        sx={{
                                            width: 300,
                                            color: 'success.main',
                                          }}
                                        >Bienvenidos</Button>
                            </Link> 
                            
        </div>  
    </ThemeProvider>
                
    </>)
}

export default LandingPage;