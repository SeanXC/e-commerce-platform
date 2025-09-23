import React from 'react';
import { Link } from 'react-router-dom';
import './AdvistisementOne.css';

function AdvistisementOne(props) {
    return (
        <div className='advistisementOne_main'>
            <div className='advistisementOne_header '>
                Latest Tech Deals | Free Shipping
            </div>
            <div className='advistisementOne_body'>
                <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' width='300px' alt='Smartphone' />
            </div>
            <div className='advistisementOne_footer'>
                <Link to="/display" style={{ textDecoration: 'underline', color: 'blue' }}>
                    See more
                </Link>
            </div>
        </div>
    );
}

export default AdvistisementOne;