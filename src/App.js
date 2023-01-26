import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'товар1',
                    price: "50",
                },
                {
                    id: 2,
                    name: "товар2",
                    price: "100",
                },
                {
                    id: 3,
                    name: "товар3",
                    price: "150",
                },
                {
                    id: 4,
                    name: "товар4",
                    price: "200",
                },
                {
                    id: 5,
                    name: "товар5",
                    price: "250",
                },
                {
                    id: 6,
                    name: "товар6",
                    price: "300",
                },
                {
                    id: 7,
                    name: "товар7",
                    price: "350",
                },
                {
                    id: 8,
                    name: "товар8",
                    price: "400",
                },
                {
                    id: 9,
                    name: "товар9",
                    price: "450",
                },
                {
                    id: 10,
                    name: "товар10",
                    price: "500",
                },
            ],
            orders: []
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer />
            </div>
        );
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item] })
    }
}

export default App;
