import React from 'react';

function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className='container relative pt-28'>
            <h3 className='text-2xl font-bold text-dark-text'>RENOVATION</h3>
            <p className='font-serif text-xl justify-center text-dark-text mt-5'>Renovate your old bike!
            This product is categorized into two parts; 'Total restoration' and 'Partial restoration'.
            </p>
            <h4 className='text-xl font-bold text-dark-text mt-10'> Total Renovation</h4>
            <p className='font-serif text-xl justify-center text-dark-text'>Here the bike is restored and returned in better condition than the original. Improvement and adaptation of the quality of the components to current trends. The entire bike is disassembled, repainted, fixed and reassembled. The performance is noticeably improved and the necessary bicycle parts are replaced. To provide the customer with all the information about the restoration, we will offer videos, photos and posters from the process.
            The customer receives a 1-year warranty.</p>
            <h4 className='text-xl font-bold text-dark-text mt-10'>Partial Renovation</h4>
            <p className='font-serif text-xl justify-center text-dark-text'>Any errors are repaired here and the customer receives a 3-month warranty. All or parts of the bike are disassembled, fixed and reassembled. The performance is noticeably improved and the necessary bicycle parts are replaced.</p>
            <p className='text-lg font-bold text-dark-text mt-10'><b>OBS! Cancellation can take place no later than 24 hours before. In case of non-appearance, the agreed cost will be charged.</b> <br />
            </p>
            
            <p className='font-serif text-xl justify-center text-dark-text mt-10 mb-10'><b>Contact us:</b><br />
                info@santaluciacyklar.com <br />
                040-92 48 88 (SMS does not work)
            </p>
        </div>
      </main>      
    </div>
  );
}

export default Services;