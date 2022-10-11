import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({topic}) => {
    
    const {logo, name, total,id} = topic;
    return (
        <div className=''>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/cart/${id}`}><button className="btn btn-primary">Start Practice</button>
</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;