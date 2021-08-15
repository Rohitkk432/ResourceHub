import React from 'react'
import './consolepage.css'

//Material UI
import {Button} from '@material-ui/core';
import { createTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';

function Consolepage() {

    //Material Ui styling
    const theme = createTheme({
        palette: {
            primary: {
                main: "#000000",
            },
        },
    });
    const LogoutButton = withStyles((theme) => ({
        root: {
            color: '#032D23',
        },
    }))
    (Button)

    return (
        <div className='console'>
            <div className="overlay">
                <div className="overlaycomponent"></div>
            </div>
            <div className="topsection">
                <div className="welcomecard">
                    <div className="welcomemessage">Welcome!</div>
                    <div className="welsomename">USERABCD</div>
                    <ThemeProvider theme={theme}>
                        <LogoutButton variant="outlined" color="primary">Logout</LogoutButton>
                    </ThemeProvider>
                </div>
                <div className="youtcollection">YOUR COLLECTION</div>
            </div>
        </div>
    )
}

export default  Consolepage;