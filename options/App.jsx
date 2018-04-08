import React from 'react';
import ItemList from './components/item_list.jsx'
import Checkout from './components/checkout_info.jsx'
import { Grid } from 'react-bootstrap';




class App extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "5%" }}>
      <Grid>
        <div style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

          <ItemList url="https://4e6qoos5w0.execute-api.us-east-1.amazonaws.com/test"></ItemList>

          <Checkout />

        </div>
      </Grid>
    </div>
    );
  }
}
export default App;
