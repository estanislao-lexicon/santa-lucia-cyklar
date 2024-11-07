import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Service() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-grow">
        <div className="container bg-background flex items-center p-10 shadow-2xl z-50 mt-4 pt-20">                
          <div className="flex flex-col lg:flex-row w-full">
            {/* Text Section */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center text-left text-dark-text">
              <h3 className="text-3xl font-title ">SERVICE / REPARATION</h3>
              <p className="font-serif text-xl mt-5">
                We service/repair all box bike and bicycle brands. The service can take place at your location, at your home, or in our store in Malmö. 
                We offer simple and professional repairs where our goal is to provide you with efficient and quality solutions. 
                We also offer a loan box bike.
              </p>
              <h4 className="text-xl font-title mt-10">This is how it works</h4>
              <p className="font-serif text-xl mt-2">
                You can either call us directly or email us, and we will call you back as soon as we can and arrange a time and place.
                After an agreed time, we will go to you and carry out a short check of your bike, as well as give you a quick and free consultation to be able to calculate the time for the service and approximate cost.
                We will return and fix your bike on-site or take it to our workshop if necessary. <br />Done! Now you can continue cycling and enjoy a well-executed repair with a 1-month warranty.<br />
              </p> 
              <Link 
                to="/service/priceList" 
                className="text-lg font-title mt-10 p-3 bg-primary rounded-md text-center inline-block hover:bg-primary-dark"
              >
                PRICE LIST
              </Link>
              <p className="text-lg font-bold mt-10">
                <b>OBS! Cancellation cannot take place later than 24 hours before. In case of non-appearance, the agreed cost will be charged.</b>
              </p>              
              <p className="font-title text-xl justify-center mt-10">Contact us</p>
              <a className="font-serif text-xl justify-center" href="mailto:info@santaluciacyklar.com">info@santaluciacyklar.com</a>
              <p className="font-serif text-xl justify-center mb-10">040-92 48 88 (SMS does not work)</p>            
            </div>  

            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end ml-6 mt-6 lg:mt-0">
              <img 
                className="h-auto w-3/4 lg:w-auto lg:h-1/2 object-contain" 
                src={`${process.env.PUBLIC_URL}/img/Logo_White_test_2048x.png`} 
                alt="Santa Lucia Cyklar" 
                loading="lazy" // Improves performance for slow connections
              />
            </div>
          </div>
        </div>        
      </main>
    </div>
  );
}

export default Service;
