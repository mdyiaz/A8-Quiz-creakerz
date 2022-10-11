import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Topics = () => {

    const topics = useLoaderData();
   const topicc = topics.data;
   
   
    return (
        <div>
            <h2>Topics</h2>
            {
                topicc.map(topic => <Cart key={topic.id}
                topic={topic}></Cart>)
            }


        </div>
    );
};

export default Topics;