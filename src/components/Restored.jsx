import React, { useState } from 'react';
import bikesData from '../data/secondHandBikes';


function Restored() {
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
      <div className='container bg-background flex items-center p-10 shadow-2xl z-50 mt-4 pt-20'>                
        <div className='flex flex-col justify-center text-left'>
          <h3 className='text-3xl font-bold text-dark-text'>RESTORED BIKES</h3>
          <p className='font-serif text-2xl justify-center text-dark-text'>There are more bikes in stock, contact us for more info!</p>
        </div>  
      </div> 
      <div className='container'>
        <div className="sort-controls mt-10 mb-5 flex justify-end">          
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-1 rounded-md mr-4 bg-secondary-background"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>

          <select 
            onChange={() => setFilterAvailable(!filterAvailable)}
            className="p-1 rounded-md bg-secondary-background"
          >
            <option value="all">Show All</option>
            <option value="available">Filter Available Only</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10 text-dark-text">
          {sortedBikes.map(bike => (
            <div key={bike.id} className="bike-card">
              <img 
                src={`${process.env.PUBLIC_URL}${bike.image}`} 
                alt={bike.description} 
                className="h-72 object-cover rounded-md" />
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

export default Restored;
