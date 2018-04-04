import React from 'react';
import ItemList from './components/item_list.jsx'
import Checkout from './components/checkout_info.jsx'




class App extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: "5%" }}>
                {/*<ItemList url="https://4e6qoos5w0.execute-api.us-east-1.amazonaws.com/test"></ItemList>*/}

                    <Checkout />
            </div>
        );
    }
}
export default App;