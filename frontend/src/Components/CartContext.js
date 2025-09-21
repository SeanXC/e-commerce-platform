import React, { Component, createContext } from 'react';
import apiService from '../services/apiService';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
        let cardAmount = existingCart.length;
        
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = this.generateUserId();
            localStorage.setItem('userId', userId);
        }

        this.state = { 
            item: existingCart,
            size: cardAmount,
            userId: userId,
        }
    }

    generateUserId = () => {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    }

    increment = async (value) => {
        try {
            const cartData = {
                userId: this.state.userId,
                productId: value.id,
                quantity: 1
            };

            await apiService.addToCart(cartData);

            let itemList = [...this.state.item];
            itemList.push(value);

            this.setState({ item: itemList });
            this.setState({ size: itemList.length });

            this.saveToLocalCache();
            
            console.log('Item added to cart');
        } catch (error) {
            console.error('Failed to add item to cart:', error);
            
            let itemList = [...this.state.item];
            itemList.push(value);

            this.setState({ item: itemList });
            this.setState({ size: itemList.length });

            this.saveToLocalCache();
        }
    }

    removeFromCart = async (product) => {
        try {
            const cartData = {
                userId: this.state.userId,
                productId: product.id,
                quantity: 1
            };

            await apiService.removeFromCart(cartData);

            let itemList = [...this.state.item];
            const index = itemList.findIndex(item => item.id === product.id);
            if (index > -1) {
                itemList.splice(index, 1);
            }

            this.setState({ item: itemList });
            this.setState({ size: itemList.length });

            this.saveToLocalCache();
            
            console.log('Item removed from cart');
        } catch (error) {
            console.error('Failed to remove item from cart:', error);
            
            let itemList = [...this.state.item];
            const index = itemList.findIndex(item => item.id === product.id);
            if (index > -1) {
                itemList.splice(index, 1);
            }

            this.setState({ item: itemList });
            this.setState({ size: itemList.length });

            this.saveToLocalCache();
        }
    }

    clearCart = async () => {
        try {
            await apiService.clearCart(this.state.userId);

            this.setState({ item: [] });
            this.setState({ size: 0 });

            this.saveToLocalCache();
            
            console.log('Cart cleared');
        } catch (error) {
            console.error('Failed to clear cart:', error);
            
            this.setState({ item: [] });
            this.setState({ size: 0 });

            this.saveToLocalCache();
        }
    }

    saveToLocalCache = () => {
        localStorage.setItem('myCart', JSON.stringify(this.state.item));
    }

    render() { 
        return ( 
            <CartContext.Provider value={{ 
                item: this.state.item,
                size: this.state.size,
                userId: this.state.userId,
                increment: this.increment,
                removeFromCart: this.removeFromCart,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
 
export default CartContextProvider;