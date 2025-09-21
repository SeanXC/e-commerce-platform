import React, { useEffect, useState } from 'react';
import "./RightSide.css";
import Product from './Product';
import { Link } from 'react-router-dom';

function RightSidePanel(props) {
    
    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            { id: 123456543, name : "iPhone 10", rating: "4.2", price: "599", image:"https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"},
            { id: 54342265, name : "iPhone 11", rating: "4.5", price:"699", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
            { id: 123453456543, name : "iPhone 12", rating: "4.6", price:"799", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 12344545456543, name : "iPhone 13", rating: "4.7", price:"899", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { id: 123465656543, name : "iPhone 12 Pro", rating: "4.6", price:"999", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 2356346363, name : "iPhone 13 Pro", rating: "4.8", price:"1099", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
    
        ]
        
        setListOfProducts(list);
    },[]);

    return (
        <div className="RightSide__main">
            {/* <Product rating="234444" price="21342" name="iphone 11" image="https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578" />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}

            {   
                listOfProduct.map ( (item) =>(
                    <Link key={item.id} to={`/order/`+item.id } >
                        <Product definition={item} />
                    </Link>
                ))
            }

        </div>
    );
}

export default RightSidePanel;