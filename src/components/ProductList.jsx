import React, {useState} from "react";
import products from "../data/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ProductList = () => {

    const [prod, setProd] = useState(products);

    const getData = (search) => {
        const temp = products.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
        setProd(temp);
    }

    const onFilter = (option) => {
        const temp2 = products.filter(y => y.category.includes(option.value));
        setProd(temp2);
    }

    return (
        <>
            <Navbar getDropdownData={onFilter} getData={getData}/>

            {prod.map((val, index) => (
                <Link to={`/productDetails/${val.id}`}>
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={val.image} className="card-img-top" alt={val.name} />
                    <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <p className="card-text">Price : Rs.{val.price}</p>
                        <p className="card-text">Rating : {val.rating}</p>
                        <p className="card-text">Category : {val.category}</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
                </Link>
            ))}
        </>
    );
}

export default ProductList;
