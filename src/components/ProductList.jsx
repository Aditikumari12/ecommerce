import React from "react";
import products from "../data/Products";
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductList = () => {
    return (
        <>
            {products.map((val, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={val.image} className="card-img-top" alt={val.name} />
                    <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <p className="card-text">Price : {val.price}</p>
                        <p className="card-text">Rating : {val.rating}</p>
                        <p className="card-text">Category : {val.category}</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductList;
