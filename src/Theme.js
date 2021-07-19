import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                color: "333333",
            }
        },
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
          root: { // Name of the rule
            color: "#FFFFFF",
            "&$focused": { // increase the specificity for the pseudo class
              color: "#C01F24"
            },
          },
        },
    },
    palette: {
        primary: {
          //white
          main: "#FFFFFF"
        },
        secondary: {
          //blue
          main: "#0000ff"
        },
        error: {
          //red
          main: "#C01F24"
        },
    }


    

})

export default theme