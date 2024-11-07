import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useParams } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function CargoDetails() {
  const { id } = useParams(); // Get bike id from the route parameters
  const [bike, setBike] = useState(null); // State to hold the bike data

  useEffect(() => {
    async function fetchBike() {
      const { data, error } = await supabase
        .from("CargoBikes")
        .select("*")
        .eq("id", id)
        .single(); // Fetch a single record matching the id

      if (error) {
        console.error("Error fetching bike: ", error);
      } else {
        setBike(data);
      }
    }

    fetchBike();
  }, [id]); // Add id as a dependency

  // Handle case when bike data is not found
  if (!bike) {
    return (
      <div className="container mx-auto p-10">
        <div className="mt-4 pt-20 text-dark-text">
          <h2 className="text-3xl font-bold">Bike not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 sm:p-10">
      <ScrollToTop />
      <div className="mt-4 pt-10 sm:pt-20 text-dark-text">
        <h2 className="text-2xl sm:text-3xl font-bold">{bike.brand} - {bike.model}</h2>
        <p className="font-serif text-base sm:text-lg mt-2">{bike.available ? 'In Stock' : 'Out of Stock'}</p>
        <img 
            src={bike.image} 
            alt={bike.model} 
            className="w-full h-auto rounded-md my-4"
        />
        <p className="font-title text-lg sm:text-xl mt-2">Price: {bike.price.toLocaleString()} Kr</p>
        <p className="font-serif text-base sm:text-lg mt-4">{bike.description}</p>                        
      </div>
    </div>    
  );
}

export default CargoDetails;
