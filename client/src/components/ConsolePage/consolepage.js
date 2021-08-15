import React from 'react'
import './consolepage.css'
import Card4 from '../Components/Card4';
//components
// import Datatype2 from './datatype2';
// import Datatype1 from './datatype1';
// import Imageuploader from '../utils/imageuploader';


//Material UI
import {Button,TextField} from '@material-ui/core';
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
                <div className="searchbar">
                    <TextField
                    fullWidth margin="normal"
                    color="primary" id="search" label="Search Resources"
                    variant="outlined" 
                    />
                </div>
            </div>
            <div className="bottomsection">
                <Card4 heading="Javascript 101"></Card4>
            </div>
        </div>
    )
}

export default  Consolepage;