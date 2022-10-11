import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Topics = () => {

    const topics = useLoaderData();
   const topicc = topics.data;
   
   
    return (
        <div>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
            {
                topicc.map(topic => <Cart key={topic.id}
                topic={topic}></Cart>)
            }
            </div>


        </div>
    );
};

export default Topics;