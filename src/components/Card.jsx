import React from 'react';

const Card = ({product}) => {
    console.log(product);
    
    return (
        <div className="card bg-blue-400 shadow-xl">
            <figure className="p-5">
                <img
                    src={product?.image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body pt-0 text-white">
                <p className='font-medium'>Brand: {product?.brand}</p>
                <h2 className="card-title font-semibold text-2xl">{product?.name}</h2>
                <p>{product?.description}</p>
                <div className="card-actions items-center">
                    <p className='font-medium'>Price: {product?.price}</p>
                    <button className="btn bg-white text-blue-400">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;