import React from 'react';
import { Link } from 'react-router-dom';
import './AdvistisementFour.css';

function AdvistisementFour(props) {
    return (
        <div className='advistisementOne_main'>
            <div className='advistisementOne_header '>
                Best Electronics Sale | Limited Time
            </div>
            <div className='advistisementOne_body'>
                <img src='https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' className='ad_fourImage' alt='Tablet' />
                <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' className='ad_fourImage' alt='Headphones' />
                <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' className='ad_fourImage' alt='Smartwatch' />   
                <img src='https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' className='ad_fourImage' alt='Gaming Console' />
            </div>
            <div className='advistisementOne_footer'>
                <Link to="/display" style={{ textDecoration: 'underline', color: 'blue' }}>
                    See more
                </Link>
            </div>
        </div>
    );
}

export default AdvistisementFour;