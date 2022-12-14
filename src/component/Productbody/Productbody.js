import React from 'react';
import './Productbody.css';

const Productbody = (props) => {
    const { name, img, Age, Time, Description } = props.product;
    const { add } = props;
    const product = props.product;
    return (
        <div className="product-body">
            <div className="card">
                <img src={img} className="card-img-top img" alt="Subject_Image" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{Description}</p>
                    <h5>Age:{Age}</h5>
                    <h5>Time: {Time} Min</h5>
                    <button onClick={() => add(product)} type="button" className="btn btn-primary ">Add</button>
                </div>
            </div>
        </div>


    );
};

export default Productbody;