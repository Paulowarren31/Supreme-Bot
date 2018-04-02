import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';


class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
            loaded: false
        }
    }
    componentDidMount() {

        //get user info from chrome storage
        chrome.storage.sync.get({
            img_codes: '', sizes: '', name: '', email: '', phone: '',
            address: '', address2: '', zip: '', city: '', state: '', country: '', card_type: '',
            card_number: '', exp_mon: '', exp_yr: '', cvv: '', checkout_delay: '0', buy_auto: false
        }, items => {
            this.setState({
                info: items,
                loaded: true
            })
        }
        )
    }

    handlechange(event, kek) {
        let newState = this.state
        newState.info[event.target.id] = event.target.value

        this.setState(newState)
    }

    render() {
        let paperStyle = {
            height: '500px',
            padding: '1rem'
        }
        if (this.state.loaded) {
            return (
                <div style={{ flexGrow: 1 }}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper style={paperStyle}>
                                <Grid container spacing={16}>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="name">Name</InputLabel>
                                            <Input id="name" value={this.state.info.name} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="email">Email</InputLabel>
                                            <Input id="email" value={this.state.info.email} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="phone">Phone</InputLabel>
                                            <Input id="phone" value={this.state.info.phone} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="address">Address</InputLabel>
                                            <Input id="address" value={this.state.info.address} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="address2">Address</InputLabel>
                                            <Input id="address2" value={this.state.info.address2} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="zip">Zip</InputLabel>
                                            <Input id="zip" value={this.state.info.zip} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="city">City</InputLabel>
                                            <Input id="city" value={this.state.info.city} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="state">State</InputLabel>
                                            <Input id="state" value={this.state.info.state} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="country">Country</InputLabel>
                                            <Input id="country" value={this.state.info.country} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="card_type">Card Type</InputLabel>
                                            <Input id="card_type" value={this.state.info.card_type} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl>
                                            <InputLabel htmlFor="card_number">Card Number</InputLabel>
                                            <Input id="card_number" value={this.state.info.card_number} onChange={this.handlechange.bind(this)} />
                                        </FormControl>
                                    </Grid>



                                </Grid>
                            </Paper>
                        </Grid>


                    </Grid>
                </div>
            )
        }
        else {
            return (<div> Loading </div>)
        }
    }
}

export default Checkout;