import {React,useState} from 'react'
import './consolepage.css'

//components
import Cardsdisplay from './cardsdisplay';
import Templatechoice from './templatechoice';

//Material UI
import {Button,TextField} from '@material-ui/core';
import { createTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';

function Consolepage() {

    const [create,setCreate]=useState(false);

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
            <div className={(create)?"hideee":"bottomsection"}>
                <Cardsdisplay/>
            </div>
            <div className={(!create)?"hideee":"bottomsection"}>
                <Templatechoice hide={[create,setCreate]}/>
            </div>
            <div className={(create)?"hideee":"foot"}>
                <button onClick={()=>setCreate(true)} className="createbtn">Create New Folder</button>
            </div>
        </div>
    )
}

export default  Consolepage;