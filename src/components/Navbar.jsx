import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Products from "../data/Products";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = (prop) => {

    const getData = (search) => {
        prop.getData(search);
    }

    let options = [...new Set(Products.map(item => item.category))].sort(); 
    console.log("options = ",options);
    
    options = options.map(op => { 
    return { value : op,  label : op}
    });

    const handleSelect = (option) => {
        console.log(option);
        prop.getDropdownData(option);
    }
    
    return (
        <>
            
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    <li class="nav-item dropdown">
                        <Dropdown options={options} onSelect={handleSelect}/>
                    </li>
                                
                    </ul>  
                        <Search getData={getData}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;