import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "../order";

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothink = () => {
    return (<div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

export default function Header(props) {
    let [cardOpen, setCardOpen] = useState(false)

    return(
        <header>
            <div>
                <span className='logo'>HouseStaff</span>
                <FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)}
                                  className={`shop-card-button ${cardOpen && 'active'}`} />

                {cardOpen && (
                    <div className='shop-card'>
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothink()}
                    </div>
                )}
            </div>
        </header>
    )
}