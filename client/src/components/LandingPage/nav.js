import {React,useState} from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

//Material UI
import {Tabs,Tab,Button} from '@material-ui/core';
import { createTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';

function Nav() {

    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Material Ui styling
    const theme = createTheme({
        palette: {
            primary: {
                main: "#23A6F0",
            },
        },
    });

    const StyledTabs = withStyles({
        indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& > span': {
                maxWidth: 40,
                width: '100%',
                backgroundColor: '#23A6F0',
            },
        },
    })
    ((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)
    ;

    const StyledTab = withStyles((theme) => ({
        root: {
            textTransform: 'none',
            color: '#000',
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(0),
            '&:focus': {
                opacity: 1,
            },
        },
    }))
    ((props) => <Tab disableRipple {...props} />)
    ;

    const SignupButton = withStyles((theme) => ({
        root: {
            color: '#fff',
        },
    }))
    (Button)
    ;

    return (
        <div className="nav">
            <div className="navAppName">ResourceHUB</div>
            <div className="navlinks">
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label="Home" />
                    <StyledTab label="Login" />
                </StyledTabs>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <ThemeProvider theme={theme}>
                        <SignupButton variant="contained" color="primary">Sign up</SignupButton>
                    </ThemeProvider>
                </Link>
            </div>
        </div>
    )
}

export default Nav;