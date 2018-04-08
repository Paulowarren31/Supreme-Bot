import React from 'react';

import {
  Media,
  Row,
  Col
} from 'react-bootstrap';

class Item extends React.Component {
  constructor(props){
    super(props)

  }
  
  render(){
    return (
      this.props.src && this.props.shown ? <img style={{padding: '.2rem'}} height={98} width={98} src={'http://' + this.props.src} /> : null

    )
  }
}

export default Item;
