import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statics.css';


const Statics = () => {
    
   const staticc = useLoaderData();
   console.log(staticc);
    return (
        <div>
            <h2>statics</h2>

            <div className='container'>
      <div className='chart overflow-x-auto flex justify-center'>
        <BarChart  width={350} height={300} data={staticc.data}>
          <Bar type="monotype" dataKey="total" fill="#8884d8"/>
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip/>
        </BarChart>
      </div>
    </div>
            

        </div>
    );
};

export default Statics;