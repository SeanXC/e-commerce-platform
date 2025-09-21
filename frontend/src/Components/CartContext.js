import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
        let cardAmount = existingCart.length;

        this.state = { 
            item: existingCart,
            size: cardAmount,
        }
    }

    increment = (value) => {
        let itemList = [...this.state.item];
        itemList.push(value);

        this.setState({ item: itemList });
        this.setState({ size: itemList.length });

        this.saveToLocalCache();
    }

    saveToLocalCache = () => {
        localStorage.setItem('myCart', JSON.stringify(this.state.item));
    }

    render() { 
        return ( 
            <CartContext.Provider value={{ 
                item: this.state.item,
                size: this.state.size,
                increment: this.increment
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
 
export default CartContextProvider;