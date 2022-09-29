import React, { useEffect, useState } from 'react';
import Cartaside from '../Cartaside/Cartaside';
import Productbody from '../Productbody/Productbody';
import Question from '../Question/Question';


import './Body.css'

const Body = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);
    const [Cart, setCart] = useState([]);
    const add = (product) => {
        let newCart = [];
        newCart = [...Cart, product]
        setCart(newCart);
    }


    return (
        <div className='body'>
            <div className='product-body'>
                {
                    products.map(product => <Productbody key={product.id} product={product} add={add}></Productbody>)}


            </div>
            <div className='cart-aside'>
                <Cartaside Cart={Cart}></Cartaside>
            </div>
            <div>
                <Question></Question>
            </div>
        </div>
    );
};

export default Body;