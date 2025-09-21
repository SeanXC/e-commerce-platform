import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import "./PlacesOrder.css";
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import getSymbolFromCurrency from 'currency-symbol-map';
import apiService from '../../services/apiService';

function PlaceOrder(props) {

    const {item,size,increment} = useContext(CartContext);
    const [productDetails,setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { id } = useParams();

    const addTOCart = function() {
        increment(productDetails);
    }

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const product = await apiService.getProductById(id);
                
                if (product) {
                    setProductDetails(product);
                } else {
                    const defaultProducts = [
            {
                id: 123456543,
                name: "New Apple iPhone 10",
                rating: "4.2",
                review: "1000",
                emi: "25",
                delivery: "Wednesday, Aug 18",
                price: "599",
                status: "In stock",
                soldby: "Irish Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 54342265,
                name: "New Apple iPhone 11",
                rating: "4.5",
                review: "1000",
                emi: "29",
                delivery: "Wednesday, Aug 18",
                price: "699",
                status: "In stock",
                soldby: "Irish Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 123453456543,
                name: "iPhone 12",
                rating: "4.6",
                review: "1000",
                emi: "33",
                delivery: "Wednesday, Aug 18",
                price: "799",
                status: "In stock",
                soldby: "Irish Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display",
                    "Ceramic Shield, tougher than any smartphone glass",
                    "5G for superfast downloads and high-quality streaming",
                    "A14 Bionic chip, the fastest chip ever in a smartphone",
                    "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras",
                ],
            },
            {
                id: 12344545456543,
                name: "iPhone 13",
                rating: "4.7",
                review: "1000",
                emi: "37",
                delivery: "Wednesday, Aug 18",
                price: "899",
                status: "In stock",
                soldby: "Irish Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
                about: [
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display",
                    "A15 Bionic chip for lightning-fast performance",
                    "Advanced dual-camera system for incredible photos in low light",
                    "Cinematic mode adds shallow depth of field and shifts focus automatically",
                    "Up to 19 hours of video playback",
                ],
            },
            {
                id: 123465656543,
                name: "iPhone 12 Pro",
                rating: "4.6",
                review: "1000",
                emi: "41",
                delivery: "Wednesday, Aug 18",
                price: "999",
                status: "In stock",
                soldby: "Irish Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display",
                    "Pro camera system with 12MP Ultra Wide, Wide, and Telephoto cameras",
                    "LiDAR Scanner for improved AR experiences and Night mode portraits",
                    "A14 Bionic chip with next-generation Neural Engine",
                    "MagSafe wireless charging up to 15W",
                ],
            },
            {
                id: 2356346363,
                name: "iPhone 13 Pro",
                rating: "4.8",
                review: "1000",
                emi: "45",
                delivery: "Wednesday, Aug 18",
                price: "1099",
                status: "In stock",
                soldby: "Irish Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display with ProMotion",
                    "Pro camera system with 12MP Ultra Wide, Wide, and Telephoto cameras",
                    "A15 Bionic chip with 5-core GPU for up to 50% faster graphics",
                    "ProRes video recording and ProRAW photos",
                    "Up to 28 hours of video playback",
                ],
            },
                    ];
                    
                    const itemfilter = defaultProducts.filter(item => item.id == id);
                    if (itemfilter.length > 0) {
                        setProductDetails(itemfilter[0]);
                    } else {
                        setError('Product not found');
                    }
                }
            } catch (error) {
                console.error('Failed to fetch product details:', error);
                setError('Unable to load product details, please try again later');
                
                const defaultProducts = [
                    {
                        id: 123456543,
                        name: "New Apple iPhone 10",
                        rating: "4.2",
                        review: "1000",
                        emi: "25",
                        delivery: "Wednesday, Aug 18",
                        price: "599",
                        status: "In stock",
                        soldby: "Irish Electronics",
                        image: "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                        about: [
                            "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                            "Face ID for secure authentication",
                        ],
                    }
                ];
                const itemfilter = defaultProducts.filter(item => item.id == id);
                if (itemfilter.length > 0) {
                    setProductDetails(itemfilter[0]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>Loading product details...</p>
            </div>
        );
    }

    if (error && !productDetails) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                <p>{error}</p>
                <Link to="/display">Back to Product List</Link>
            </div>
        );
    }

    if (!productDetails) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>Product not found</p>
                <Link to="/display">Back to Product List</Link>
            </div>
        );
    }

    return (
        <div>
             <Grid container>
                <Grid item xs={5}>
                    <img className="placeorder__image" src={productDetails.image} />
                </Grid>
                <Grid item xs={4}>
                    <div className="placeholder__description">
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}> {productDetails.name} </div>
                        <div>
                            <Rating name="read-only" value="3" readOnly  style={{ fontSize: "20px"}}/>
                            {productDetails.ratings} ratings |
                            {productDetails.review}+ answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className="textgap">Price:	<span className="pricetag">{getSymbolFromCurrency('EUR')} {productDetails.price}</span></div>
                            <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at {getSymbolFromCurrency('EUR')} {productDetails.emi}. No Cost EMI available</div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                        </div>
                        <div>
                            <br></br>
                            <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                            <div>
                                <ul>
                                {   
                                    productDetails.about!=undefined ?
                                    productDetails.about.map ( (item) =>(
                                        <li>{item}</li>
                                    )) : <span></span>
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className="placeorder__order">
                        <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>{getSymbolFromCurrency('EUR')} {productDetails.price}</div>
                            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                            </div>
                            <div > 
                                <button className="placeorder__button addtocart" onClick={addTOCart}>Add to Cart</button>
                                <Link to="/checkout">
                                    <button className="placeorder__button buynow">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </Paper>
                </Grid>
             </Grid>
            
        </div>
    );
}

export default PlaceOrder;