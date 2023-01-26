import React, {Component} from 'react';

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/photo.jpg"} />
                <h2>{this.props.item.name}</h2>
                <b>{this.props.item.price}$</b>
                <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;