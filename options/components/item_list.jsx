import React from 'react';
import Item from './item.jsx';


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
                this.setState({
                    items: data.Items,
                    loaded: true
                })
            })
    }
    render() {
        if (!this.state.loaded) {
            return (
                <div>
                    loading
                </div>
            )
        }
        else {
            return (
                this.state.items.map((item, i) =>
                    <Item name={item.title} color={item.color} code={item.itemCode} key={i} />
                )
            )
        }

    }
}

export default ItemList;