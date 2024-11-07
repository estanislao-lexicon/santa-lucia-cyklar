import React from 'react';
import ScrollToTop from './ScrollToTop';

function Renovation() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-grow">
        <div className='container bg-background flex items-center p-10 shadow-2xl z-50 mt-4 pt-20'>
          <div className='flex flex-col lg:flex-row w-full'>
            {/* Text Section */}
            <div className="w-full lg:w-4/5 flex flex-col justify-center text-left text-dark-text">
              <h3 className='text-3xl font-title'>RENOVATION</h3>
              <h2 className='text-xl font-title mt-5'>Total Renovation</h2>
              <p className='font-serif text-xl justify-center mt-5'>
                Here the bike is restored and returned in better condition than the original. Improvement and adaptation of the quality of the components to current trends. The entire bike is disassembled, repainted, fixed, and reassembled. The performance is noticeably improved and the necessary bicycle parts are replaced. To provide the customer with all the information about the restoration, we will offer videos, photos, and posters from the process. The customer receives a 1-year warranty.
              </p>
              <h2 className='text-xl font-title mt-10'>Partial Renovation</h2>
              <p className='font-serif text-xl justify-center mt-5'>
                Any errors are repaired here and the customer receives a 3-month warranty. All or parts of the bike are disassembled, fixed, and reassembled. The performance is noticeably improved and the necessary bicycle parts are replaced.
              </p>
              <p className='text-lg font-bold mt-10'>
                <b>OBS! Cancellation can take place no later than 24 hours before. In case of non-appearance, the agreed cost will be charged.</b>
              </p>
              <p className='font-title text-xl justify-center mt-10'>Contact us:</p>
              <a className='font-serif text-xl justify-center' href='mailto:info@santaluciacyklar.com'>
                info@santaluciacyklar.com
              </a>
              <p className='font-serif text-xl justify-center mb-10'>040-92 48 88 (SMS does not work)</p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/5 flex justify-center lg:justify-end lg:ml-6 mt-10 lg:mt-0">
              <img className="h-auto max-w-xs mb-20" src={`${process.env.PUBLIC_URL}/img/Logo_White_test_2048x.png`} alt="Santa Lucia Cyklar" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Renovation;
