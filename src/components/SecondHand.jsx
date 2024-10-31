import React, { useEffect, useState } from 'react';
import bikesData from '../data/secondHandBikes';


function SecondHand() {
  const [bikes, setBikes] = useState(bikesData);
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', or 'desc'
  const [filterAvailable, setFilterAvailable] = useState(false);

  const sortedBikes = [...bikes]
  .sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  })
  .filter(bike => (filterAvailable ? bike.available : true));

  return (
    <div>
      <div className='container relative pt-28'>
          <h3 className='text-2xl font-bold text-dark-text'>SECOND HAND BIKES</h3>
          <p className='font-serif text-xl justify-center text-dark-text mt-5'>There are more bikes in stock, contact us for more info!</p>
      </div>
            
      <div className='container'>
        <div className="sort-controls mt-10 mb-5 flex justify-end">          
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-1 border border-gray-100 rounded-md mr-4"            
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>

          <select 
            onChange={() => setFilterAvailable(!filterAvailable)}
            className="p-1 border border-gray-100 rounded-md"
          >
            <option value="all">Show All</option>
            <option value="available">Filter Available Only</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4 text-dark-text">
          {sortedBikes.map(bike => (
            <div key={bike.id} className="bike-card">
              <img src={`${process.env.PUBLIC_URL}${bike.image}`} alt={bike.description} className="h-auto" />
              <h3><b>{bike.title}</b></h3>
              <p className='font-serif'>{bike.description}</p>
              <p className='font-serif'>Price: {bike.price}Kr</p>
              <p className='font-serif mb-20'>{bike.available ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>  
  );
}

export default SecondHand;
