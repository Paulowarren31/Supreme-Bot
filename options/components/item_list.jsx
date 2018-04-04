import React from 'react';
import Item from './item.jsx';
import {
  Button,
  Grid,
  Row,
  Col,
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
        console.log(data)
        this.setState({
          items: data.Items,
          loaded: true
        })
      })
  }
  render() {
    let blockStyle = {
      color: 'white',
      backgroundColor: '#173f62',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }
    if (!this.state.loaded) {
      return (
        <div>
          loading
        </div>
      )
    }
    else {
      console.log(this.state.items)
      return (

        <Row>

          <div class={'container card card-block'} style={blockStyle}>
            {this.state.items.map((item, i) =>
              <Item name={item.title} color={item.color} code={item.itemCode} src={item.src} key={i} />
            )}
          </div>
        </Row>
      )
    }

  }
}

export default ItemList;
