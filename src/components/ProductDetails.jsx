import React from 'react';
import { useParams } from 'react-router';
import Products from '../data/Products';
import Details from '../data/Details';
import './details.css';

const ProductDetails = () => {
    const {id} = useParams();
    const prod = Products.find(x => x.id == id);
    const det = Details.find(y => y.id == id);
    return(
        <>
            <div className="main">
                <img className="detailsImg" src={prod.image}/>
                <div>
                    <h1>{prod.name}</h1>
                    <p>Rating : {prod.rating}</p>
                    <h2>{prod.price} Rs.</h2>
                    <p>{det.describe}</p>
                    <div className="detButton">
                        <button class="btn btn-primary" type="submit">Add to cart</button>
                        <button class="btn btn-primary" type="submit">Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;
