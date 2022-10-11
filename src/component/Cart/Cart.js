import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({topic}) => {
    
    const {logo, name, total,id} = topic;
    return (
        <div>
            
            <div className="card card-compact bg-slate-300 shadow-xl ">
                <figure><img className='p-5' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question:{total}</p>
                    
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