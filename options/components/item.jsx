import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.color}</div>

                {/* optional, should only show up in user's added items */}
                <div>{this.props.size}</div>
            </div>
        )
    }
}

export default Item;