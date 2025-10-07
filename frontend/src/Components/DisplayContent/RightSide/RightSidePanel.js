import React, { useEffect, useState } from 'react';
import "./RightSide.css";
import Product from './Product';
import { Link } from 'react-router-dom';
import apiService from '../../../services/apiService';

function RightSidePanel(props) {
    
    const [listOfProduct, setListOfProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                
                console.log('Fetching products from API...');
                const products = await apiService.getAllProducts();
                console.log('API Response:', products);
                
                if (products && Array.isArray(products) && products.length > 0) {
                    console.log('Using database products:', products.length);
                    setListOfProducts(products);
                } else {
                    console.log('No products from database, API returned:', products);
                    setError('No products available from database');
                    setListOfProducts([]);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setError(`API Error: ${error.message}`);
                setListOfProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="RightSide__main">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>Loading products from database...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="RightSide__main">
                <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
                    <p>{error}</p>
                    <p>Please check if backend services are running.</p>
                </div>
            </div>
        );
    }

    if (listOfProduct.length === 0) {
        return (
            <div className="RightSide__main">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>No products found in database.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="RightSide__main">
            {listOfProduct.map((item) => (
                <Link key={item.id} to={`/order/${item.id}`}>
                    <Product definition={item} />
                </Link>
            ))}
        </div>
    );
}

export default RightSidePanel;