import React from 'react';
import './landingpage.css';

import Posterimg from '../img/none.png';

//Material UI
import {Button} from '@material-ui/core';
import { createTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';

import CreditCardIcon from '@material-ui/icons/CreditCard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';

function Poster() {

    //Material Ui styling
    const theme = createTheme({
        palette: {
            primary: {
                main: "#23A6F0",
            },
        },
    });
    const SignupButton = withStyles((theme) => ({
        root: {
            color: '#fff',
            marginRight:"0.5rem"
        },
    }))
    (Button)
    ;
    const LoginButton = withStyles((theme) => ({
        root: {
            color: '#23A6F0',
        },
    }))
    (Button)
    ;

    return (
        <div className="poster">
            <div className="backvector">
                <div className="vector"></div>
            </div>
            <div className="posterinfo">
                <div className="lin1">One Stop</div>
                <div className="lin2">SOLUTION</div>
                <div className="lin3">
                    <div className="l3p1">to your</div>
                    <div className="l3p2">RESOURCE</div>
                    <div className="l3p3">needs</div>
                </div>
                <div className="lin4">
                    Curating best resources from the best people around the world, all at one place. 
                </div>
                <div className="tryoutbtns">
                    <ThemeProvider theme={theme}>
                        <SignupButton variant="contained" color="primary">Sign up</SignupButton>
                        <LoginButton variant="outlined" color="primary">Login</LoginButton>
                    </ThemeProvider>
                </div>
            </div>
            <div className="posterimg">
                <img src={Posterimg} alt="img" />
            </div>
            <div className="cards">
                <div className="card">
                    <div className="cardbox">
                        <CreditCardIcon/>
                    </div>
                    <div className="cardtitle">Organized Content</div>
                    <div className="cardline"></div>
                    <div className="carddescrip">
                        Have all your resources listed at one place, making it accessible for future reference.
                    </div>
                </div>
                <div className="card">
                    <div className="cardbox">
                        <FavoriteIcon/>
                    </div>
                    <div className="cardtitle">Shareable</div>
                    <div className="cardline"></div>
                    <div className="carddescrip">
                        Easily share you collections with your friends and acquaintances.
                    </div>
                </div>
                <div className="card blue3">
                    <div className="cardbox3">
                        <PhotoLibraryOutlinedIcon/>
                    </div>
                    <div className="cardtitle">Resource Library</div>
                    <div className="cardline"></div>
                    <div className="carddescrip">
                        Searching for the right content? We got you covered. Find the resources as per your needs curated by people around the globe.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster;