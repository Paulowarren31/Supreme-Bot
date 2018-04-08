import React from 'react';
import Item from './item.jsx';
import {
  Button,
  Grid,
  Row,
  Col,
  FormControl,
  ControlLabel
} from 'react-bootstrap';




class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loaded: false,
    }
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data => {
        data.Items.forEach( item => {
          item.shown = true
        })
        console.log(data.Items)
        data.Items.sort((a, b) => {
          if (a.title < b.title){
            return 1
            return -1

          }});
        console.log(data.Items)
        this.setState({
          items: data.Items,
          loaded: true
        })
      })
  }
  handleChange(event) {
    let searchText = event.target.value.toLowerCase()
    this.setState({
      searchText: searchText
    }, () => {
      // filter items
      let new_items = this.state.items
      new_items.forEach( item => {
        item.shown = (item.title.toLowerCase().indexOf(this.state.searchText) != -1)
      })
      this.setState({
        items: new_items
      })

    })
  }
  render() {
    let blockStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      overflowY: 'auto',
      height: '700px',
      marginTop: '2rem',
    }
    if (!this.state.loaded) {
      return (
        <div>
          loading
        </div>
      )
    }
    else {
      return (
        <div style={{width: '700px', marginBottom: '1.5rem'}}>
          <ControlLabel style={{ marginTop: '1rem' }}>Search Items</ControlLabel>
          <FormControl
            id="item"
            type="text"
            value={this.state.searchText}
            placeholder=""
            onChange={this.handleChange.bind(this)}/>


          <Row style={blockStyle} id={'scroll'}>
            {this.state.items.map((item, i) =>
              <Item name={item.title} color={item.color} code={item.itemCode} src={item.src} shown={item.shown} key={i} />
            )}

          </Row>
        </div>
      )
    }

  }
}

export default ItemList;
