import React from 'react';

function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className='container relative pt-28'>
            <h3 className='text-2xl font-bold text-dark-text'>SERVICE / REPARATION</h3>
            <p className='font-serif text-xl justify-center text-dark-text mt-5'>We service/repair all box bike and bicycle brands. 
                The service can take place at your location, at your home or in our store in Malmö. 
                We offer simple and professional repairs where our goal is to provide you with efficient and quality solutions. 
                We also offer a loan box bike.
            </p>
            <h4 className='text-xl font-bold text-dark-text mt-10'> This is how it works</h4>
            <p className='font-serif text-xl justify-center text-dark-text'>You can either call us directly or email us, and we will call you back as soon as we can and arrange a time and place.
            After an agreed time, we will go to you and carry out a short check of your bike, as well as give you a quick and free consultation to be able to calculate the time for the service and approximate cost.
            We will return and fix your bike on site or take it to our workshop if necessary.
            <br />Done! Now you can continue cycling and enjoy a well-executed repair with a 1-month warranty.<br /></p> 
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