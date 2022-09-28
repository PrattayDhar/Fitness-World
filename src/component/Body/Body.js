import React, { useEffect, useState } from 'react';
import Cartaside from '../Cartaside/Cartaside';
import Productbody from '../Productbody/Productbody';

import './Body.css'

const Body = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);
    return (
        <div className='body'>
            <div className='product-body'>
                {
                    products.map(product => <Productbody key={product.id} product={product} ></Productbody>)}

                
            </div>
            <div className='cart-aside'>
                <Cartaside></Cartaside>
            </div>
        </div>
    );
};

export default Body;