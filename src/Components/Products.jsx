import React, { useEffect, useState } from 'react'
import './Products.css'
// import { useNavigate } from 'react-router-dom';

function Products() {


    const [productData, setProductData] = useState([]);
    // const navigate = useNavigate;

    useEffect(() => {
        fetch('https://api.denzo.io/api/cus/v1/products?page=1', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setProductData(result.products.data)
                console.log(productData);
            });
    }, []);


    // const logoutfunc = ()=>{
    //     localStorage.clear();
    //     navigate('/')
    // }
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://media.tenor.com/8BeuRyZSb90AAAAC/shopping-cart-shopping.gif" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
                        Shopping-Products
                    </a>
                </div>
                {/* <div className='logoutbutton'>
                <button type="button" onClick={logoutfunc} className="btn btn-primary btn-block mb-4">Logout</button>                    
                </div> */}
            </nav>

            <div className="product-grid">
        {productData.map((product, index) => (
          <div key={index} className="product-card">
            <img src={`https://d2u7jaxqnqlx88.cloudfront.net/media/10/product/card/${product.cover_image}`} alt="noimg" />
            <p>Name : {product.name}</p>
            <p>Price: ${product.price}</p>
            <button type="button" className="btn btn-primary btn-block mb-4">Buy Now</button>
          </div>
        ))}
      </div>
    

        </div>
    )
}

export default Products