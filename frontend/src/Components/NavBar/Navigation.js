import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './NavBar.css';

class NavBar extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            selectedCategory: 'All'
        }
    }

    handleSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    handleCategoryChange = (e) => {
        this.setState({ selectedCategory: e.target.value });
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search:', this.state.searchTerm, 'Category:', this.state.selectedCategory);
    }

    render() {
        let { item, size, increment } = this.context;

        return (
            <div>
                <div className='navBar_component'>
                    <Link to="/">
                        <div className='navBar_logo_section'>
                            <div className='navBar_logo'>E-commerce</div>
                        </div>
                    </Link>

                    <div className='navBar_location_section'>
                        <div className='navBar_location_icon'></div>
                        <div className='navBar_location_text'>
                            <div className='location_line1'>Deliver to</div>
                            <div className='location_line2'>Dublin, Ireland</div>
                        </div>
                    </div>

                    <div className='navBar_search_section'>
                        <form onSubmit={this.handleSearchSubmit} className='navBar_search_form'>
                            <select 
                                className='navBar_search_dropdown'
                                value={this.state.selectedCategory}
                                onChange={this.handleCategoryChange}
                            >
                                <option value="All">All</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Books">Books</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Home">Home & Kitchen</option>
                                <option value="Beauty">Beauty</option>
                            </select>
                            <input 
                                type="text"
                                className='navBar_search_input'
                                placeholder='Search'
                                value={this.state.searchTerm}
                                onChange={this.handleSearchChange}
                            />
                            <button type="submit" className='navBar_search_button'>
                                <div className='search_icon'></div>
                            </button>
                        </form>
                    </div>

                    <div className='navBar_language_section'>
                        <div className='navBar_flag'></div>
                        <select className='navBar_language_dropdown'>
                            <option value="EN">EN</option>
                            <option value="IE">IE</option>
                        </select>
                    </div>

                    <Link to="/profile">
                        <div className='navBar_account_section'>
                            <div className='account_line1'>Hello, User</div>
                            <div className='account_line2'>Account & Profile</div>
                        </div>
                    </Link>

                    <div className='navBar_orders_section'>
                        <div className='orders_line1'>Returns</div>
                        <div className='orders_line2'>& Orders</div>
                    </div>

                    <Link to="/checkout">
                        <div className='navBar_cart_section'>
                            <div className='navBar_cart_icon'></div>
                            <div className='navBar_cart_count'>{size}</div>
                            <div className='navBar_cart_text'>Cart</div>
                        </div>
                    </Link>
                </div>

                <div className='navBar_secondary'>
                    <div className='secondary_menu_item'>
                        <div className='menu_icon'></div>
                        All
                    </div>
                    <div className='secondary_menu_item'>Best Sellers</div>
                    <Link to="/display">
                        <div className='secondary_menu_item'>Mobiles</div>
                    </Link>
                    <div className='secondary_menu_item'>Stripe Pay</div>
                    <div className='secondary_menu_item'>Fashion</div>
                    <div className='secondary_menu_item'>Electronics</div>
                    <div className='secondary_menu_item'>
                        Prime
                        <div className='dropdown_arrow'></div>
                    </div>
                    <div className='secondary_menu_item'>New Releases</div>
                    <div className='secondary_menu_item'>Customer Service</div>
                    <div className='secondary_menu_item'>Computers</div>
                    <div className='secondary_menu_item'>Home & Kitchen</div>
                </div>
            </div>
        );
    }
}

export default NavBar;