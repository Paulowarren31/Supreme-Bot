import React from 'react';
import {
  Button,
  Grid,
  Row,
  Col,
  FormControl,
  ControlLabel
} from 'react-bootstrap';


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
      console.log(items)
      this.setState({
        info: items,
        loaded: true
      })
    }
    )
  }

  handleChange(event) {
    let newState = this.state
    newState.info[event.target.id] = event.target.value
    this.setState(newState)
    chrome.storage.sync.set(newState.info)
  }

  render() {
    if (this.state.loaded) {
      return (
        <Grid style={{ width: '700px' }}>
          <Row>
            <div className={'card card-block'}>
              <Col xs={12}>
                <h1> Shipping Info </h1>
              </Col>
              <Col xs={6}>
                <ControlLabel style={{ marginTop: '1rem' }}>Full name</ControlLabel>
                <FormControl
                  id="name"
                  type="text"
                  value={this.state.info.name}
                  placeholder=""
                  onChange={this.handleChange.bind(this)}
                />
                <ControlLabel style={{ marginTop: '1rem' }}>Email</ControlLabel>
                <FormControl
                  id="email"
                  type="text"
                  value={this.state.info.email}
                  placeholder=""
                  onChange={this.handleChange.bind(this)}
                />
              </Col>
              <Col xs={6}>
                <ControlLabel style={{ marginTop: '1rem' }}>Phone Number</ControlLabel>
                <FormControl
                  id="phone"
                  type="text"
                  value={this.state.info.phone}
                  placeholder=""
                  onChange={this.handleChange.bind(this)}
                />
                <ControlLabel style={{ marginTop: '1rem' }}>Address</ControlLabel>
                <FormControl
                  id="address"
                  type="text"
                  value={this.state.info.address}
                  placeholder=""
                  onChange={this.handleChange.bind(this)}
                />

            </Col>
            <Col xs={6}>
              <ControlLabel style={{ marginTop: '1rem' }}>Address2</ControlLabel>
              <FormControl
                id="address2"
                type="text"
                value={this.state.info.address2}
                placeholder=""
                onChange={this.handleChange.bind(this)}
              />
              <ControlLabel style={{ marginTop: '1rem' }}>City</ControlLabel>
              <FormControl
                id="city"
                type="text"
                value={this.state.info.City}
                placeholder=""
                onChange={this.handleChange.bind(this)}
              />
            </Col>
            <Col xs={6}>
              <ControlLabel style={{ marginTop: '1rem' }}>State</ControlLabel>
              <FormControl
                componentClass="select"
                id="state"
                placeholder="select"
                value={this.state.info.state}
                onChange={this.handleChange.bind(this)}
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="AB">AB</option>
                <option value="BC">BC</option>
                <option value="MB">MB</option>
                <option value="NB">NB</option>
                <option value="NL">NL</option>
                <option value="NT">NT</option>
                <option value="NS">NS</option>
                <option value="NU">NU</option>
                <option value="ON">ON</option>
                <option value="PE">PE</option>
                <option value="QC">QC</option>
                <option value="SK">SK</option>
                <option value="YT">YT</option>
              </FormControl>
              <ControlLabel style={{ marginTop: '1rem' }}>Country</ControlLabel>
              <FormControl
                componentClass="select"
                id="country"
                placeholder="select"
                value={this.state.info.country}
                onChange={this.handleChange.bind(this)}
              >
                <option value="USA">US</option>
                <option value="CANADA">Canada</option>
                <option value="GB">UK</option>
                <option value="NB">UK (N. IRELAND)</option>
                <option value="AT">AUSTRIA</option>
                <option value="BY">BELARUS</option>
                <option value="BE">BELGIUM</option>
                <option value="BG">BULGARIA</option>
                <option value="HR">CROATIA</option>
                <option value="CZ">CZECH REPUBLIC</option>
                <option value="DK">DENMARK</option>
                <option value="EE">ESTONIA</option>
                <option value="FI">FINLAND</option>
                <option value="FR">FRANCE</option>
                <option value="DE">GERMANY</option>
                <option value="GR">GREECE</option>
                <option value="HU">HUNGARY</option>
                <option value="IS">ICELAND</option>
                <option value="IE">IRELAND</option>
                <option value="IT">ITALY</option>
                <option value="LV">LATVIA</option>
                <option value="LT">LITHUANIA</option>
                <option value="LU">LUXEMBOURG</option>
                <option value="MC">MONACO</option>
                <option value="NL">NETHERLANDS</option>
                <option value="NO">NORWAY</option>
                <option value="PL">POLAND</option>
                <option value="PT">PORTUGAL</option>
                <option value="RO">ROMANIA</option>
                <option value="RU">RUSSIA</option>
                <option value="SK">SLOVAKIA</option>
                <option value="SI">SLOVENIA</option>
                <option value="ES">SPAIN</option>
                <option value="SE">SWEDEN</option>
                <option value="CH">SWITZERLAND</option>
                <option value="TR">TURKEY</option>
              </FormControl>

            </Col>
            <Col xs={6}>
              <ControlLabel style={{ marginTop: '1rem' }}>Zip</ControlLabel>
              <FormControl
                id="zip"
                type="text"
                value={this.state.info.zip}
                placeholder=""
                onChange={this.handleChange.bind(this)}
              />

          </Col>
        </div>
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <Col xs={6}>
          <div className={'card card-block'} >

            <Col xs={12}>
              <h1> Credit Card Info </h1>
            </Col>
            <Col xs={12}>
              <ControlLabel style={{ marginTop: '1rem' }}>Card Number</ControlLabel>
              <FormControl
                id="card_number"
                type="text"
                value={this.state.info.card_number}
                placeholder=""
                onChange={this.handleChange.bind(this)}
              />

          </Col>
          <Col xs={6}>
            <ControlLabel style={{ marginTop: '1rem' }}>Card Type</ControlLabel>
            <FormControl
              componentClass="select"
              id="card_type"
              placeholder="select"
              value={this.state.info.card_type}
              onChange={this.handleChange.bind(this)}
            >
              <option value="visa">Visa</option>
              <option value="american_express">American Express</option>
              <option value="master">Mastercard</option>
            </FormControl>

          </Col>
          <Col xs={6}>
            <ControlLabel style={{ marginTop: '1rem' }}>Month</ControlLabel>
            <FormControl
              componentClass="select"
              id="exp_mon"
              placeholder="select"
              value={this.state.info.exp_mon}
              onChange={this.handleChange.bind(this)}
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>

            </FormControl>

          </Col>
        </div>
      </Col>
      <Col xs={6}>
        <div className={'card card-block'} >
          <h1> My Items </h1>
        </div>
      </Col>

    </Row>
  </Grid>
      )
    }
    else {
      return (<div> Loading </div>)
    }
  }
}

export default Checkout;
