import React from 'react';
import { useParams } from 'react-router-dom';
import bikeData from '../data/cargoBikes.js';

function CargoDetails() {
    const { id } = useParams();
    const bike = bikeData.find(b => b.id === parseInt(id));

    if(!bike) return <p>Bike not found</p>;

  return (
    <div className="container mx-auto p-10">
        <div className="className='mt-4 pt-20 text-dark-text">
            <h2 className="text-3xl font-bold">{bike.brand} - {bike.model}</h2>
            <p className='font-serif text-lg'>{bike.available ? 'In Stock' : 'Out of Stock'}</p>
            <img 
            src={`${process.env.PUBLIC_URL}${bike.image}`} 
            alt={bike.model} 
            className="w-full h-auto rounded-md my-4" 
            />
            <p className='font-title text-xl'>Price: {bike.price.toLocaleString()} Kr</p>
            <p className='font-serif text-lg mt-4'>{bike.description}</p>                        
        </div>
    </div>    
  );
}

export default CargoDetails;