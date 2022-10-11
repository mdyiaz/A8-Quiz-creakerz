import React from 'react';

const Cart = ({topic}) => {
    console.log(topic);
    const {logo, name, total,id} = topic;
    return (
        <div className='grid grid-cols-3'>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Practice</button>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Cart;