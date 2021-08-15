import React from "react";
import "./consolepage.css";

//Material UI
import { Button } from "@material-ui/core";
import {
  createTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card6 from "../Components/Card6";
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
      color: "#032D23",
    },
  }))(Button);

  return (
    <div className="console">
      <div className="overlay">
        <div className="overlaycomponent"></div>
      </div>
      <div className="topsection">
        <div className="welcomecard">
          <div className="welcomemessage">Welcome!</div>
          <div className="welsomename">USERABCD</div>
          <ThemeProvider theme={theme}>
            <LogoutButton variant="outlined" color="primary">
              Logout
            </LogoutButton>
          </ThemeProvider>
        </div>
        <div className="youtcollection">YOUR COLLECTION</div>
        <Card6
          link="http://example.net/"
          title="Lorem ipsum dolor sit amet"
          description="Nick Bedford"
          image="http://example.net"
        />
                <Card6
          link="http://example2.net/"
          title="Lorem ipsum dolor sit amet2"
          description="Nick Bedford2"
        />

      </div>
    </div>
  );
}

export default Consolepage;
