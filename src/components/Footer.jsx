import React, { useState } from 'react';
import { supabase } from '../utils/supabase';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const { data, error } = await supabase
          .from('subscribers')
          .insert([{ email }]);
        
      if (error) {
        console.error("Error adding subscriber: ", error);
      } else {
        setEmail("");
      }
      } catch (error) {
          console.error("Unexpected error: ", error);
      }
    }
  };

  return (    
    <footer>      
      <div className="min-h-32 flex flex-col items-center text-dark-text justify-center bg-background p-4">
        <form onSubmit={handleSubscribe} className="mb-4 flex flex-col sm:flex-row items-center">
          <input 
            type="email" 
            name="email" 
            placeholder="Subscribe to our Newsletter" 
            className="p-2 border rounded-md w-64 sm:w-72 text-center mb-2 sm:mb-0 sm:mr-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates the state with the input value
            required
          />
          <button
            type="submit"             
            className="p-2 border rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800 w-full sm:w-auto"
          > Subscribe!
          </button>
        </form>
        
        <p className="container font-serif text-base sm:text-xl text-center px-4">
          © 2024 Santa Lucia cyklar. When purchasing goods in our store, a 14-day right of withdrawal always applies in accordance with current consumer protection legislation.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
