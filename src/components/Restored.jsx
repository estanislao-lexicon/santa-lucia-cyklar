import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import ScrollToTop from './ScrollToTop';

function Restored() {
  const [bikes, setBikes] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', or 'desc'
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to show spinner when fetching
  const [error, setError] = useState(null); // Error state for handling any issues with fetching

  // Fetch data from Supabase when the component mounts
  useEffect(() => {
    async function fetchBikes() {
      try {
        const { data, error } = await supabase
          .from("SecondHandBikes") // Supabase table name
          .select("*"); // Fetch all columns, adjust as needed

        if (error) throw error;

        console.log('Supabase Data:', data);
        setBikes(data);
      } catch (error) {
        setError('Error fetching bikes: ' + error.message);
        console.error('Error fetching bikes:', error);
      } finally {
        setLoading(false); // Stop loading spinner when data is fetched
      }
    }

    fetchBikes();
  }, []); // Empty dependency array to run only once after the first render

  const sortedBikes = [...bikes]
    .filter(bike => (filterAvailable ? bike.available : true))  // First filter by availability
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <div>
      <ScrollToTop />
      <div className="container bg-background flex items-center p-10 shadow-2xl z-50 mt-4 pt-20">
        <div className="flex flex-col justify-center text-left">
          <h3 className="text-3xl font-title text-dark-text">RESTORED BIKES</h3>
          <p className="font-serif text-xl justify-center text-dark-text mt-5">
            There are more bikes in stock, contact us for more info!
          </p>
        </div>
      </div>

      <div className="container">
        {/* Error Message */}
        {error && (
          <div className="text-red-600 mb-5 text-center">
            <p>{error}</p>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && !error ? (
          <div className="text-center my-10">
            <div className="loader"></div> {/* Add your own spinner or loading indicator */}
          </div>
        ) : (
          <>
            {/* Sort and Filter Controls */}
            <div className="sort-controls mt-10 mb-5 flex justify-end space-x-4">
              <select
                onChange={(e) => setSortOrder(e.target.value)}
                className="p-2 rounded-md bg-secondary-background text-dark-text"
              >
                <option value="">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>

              <select
                onChange={() => setFilterAvailable(!filterAvailable)}
                className="p-2 rounded-md bg-secondary-background text-dark-text"
              >
                <option value="all">Show All</option>
                <option value="available">Filter Available Only</option>
              </select>
            </div>

            {/* Bikes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 text-dark-text">
              {sortedBikes.map((bike) => (
                <div key={bike.id} className="bike-card p-4 bg-white rounded-md shadow-md">
                  <img
                    src={bike.image}
                    alt={bike.brand}
                    className="h-72 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">{bike.brand} - {bike.model}</h3>
                  <p className="font-serif text-sm">{bike.description}</p>
                  <p className="font-serif text-lg mt-2">Price: {bike.price} Kr</p>
                  <p className='font-serif text-sm sm:text-base mb-20'>{bike.available ? 'In Stock' : 'Out of Stock'}</p>                  
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Restored;
