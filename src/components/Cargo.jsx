import React, { useEffect, useState} from 'react';
import { supabase } from '../utils/supabase';
import CargoDetails from '../components/CargoDetails.jsx'
import { Link } from 'react-router-dom';

function Cargo() {
  const [bikes, setBikes] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', or 'desc'
  const [filterAvailable, setFilterAvailable] = useState(false);

  useEffect(() => {
    async function fetchBikes() {
      const { data, error } = await supabase
      .from("CargoBikes")
      .select("*");

      if(error) {
        console.error("Error fetching bikes:", error);
      } else if (data) {
        setBikes(data);
      }
    }
    
    fetchBikes();    
  }, []);

  const sortedBikes = [...bikes]
  .sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return  a.id - b.id;
  })
  .filter(bike => (filterAvailable ? bike.available : true));

  return (
    <div>
      <div className='container bg-background flex items-center p-10 shadow-2xl z-50 mt-4 pt-20'>                
        <div className='flex flex-col justify-center text-left'>
          <h3 className='text-3xl font-title text-dark-text'>CARGO BIKES</h3>
          <p className='font-serif text-xl  justify-center text-dark-text mt-5'>
            We are authorised dealers of Cargobike, Babboe and Muli in Malmö.<br />
            All bikes are available for testing in our shop. <br /><b>All purchases are made in store.</b>
          </p>
        </div>  
      </div>
      <div className='container'>
        <div className="sort-controls mt-10 mb-5 flex flex-col sm:flex-row justify-between sm:justify-end">          
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-1 rounded-md mb-4 sm:mb-0 sm:mr-4 bg-secondary-background"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 text-dark-text">
          {sortedBikes.map(bike => (
            <Link to={`/cargo/${bike.id}`} key={bike.id} className='bike-card'>
              <img 
                src={bike.image} 
                alt={bike.model} 
                className="h-72 object-cover rounded-md" />
              <h3 className="text-lg sm:text-xl"><b>{bike.brand}</b></h3>
              <p className='font-serif text-sm sm:text-base'>{bike.model}</p>
              <p className='font-serif text-sm sm:text-base'>Price: {bike.price.toLocaleString()}Kr</p>
              <p className='font-serif text-sm sm:text-base mb-20'>{bike.available ? 'In Stock' : 'Out of Stock'}</p>
            </Link>  
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cargo;
