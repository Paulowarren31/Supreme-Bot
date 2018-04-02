import React from 'react';
import ItemList from './components/item_list.jsx'
import Checkout from './components/checkout_info.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import Grid from 'material-ui/Grid';
import CssBaseline from 'material-ui/CssBaseline';




class App extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: "5%" }}>

                {/*<ItemList url="https://4e6qoos5w0.execute-api.us-east-1.amazonaws.com/test"></ItemList>*/}
                <CssBaseline />

                <MuiThemeProvider >
                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <Grid container spacing={24} alignItems={'center'} style={{width: "80%"}}>
                            <Checkout />
                        </Grid>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default App;