import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef(); // Create a reference for the form element
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize EmailJS (you don’t need to call init in handleSubmit as it can be set up once in EmailJS config)
    emailjs.init("5IcX77mUemJxVf9UV");

    emailjs.sendForm("service_65iji2g","template_kuafp5i", form.current)
      .then(() => setStatus('Message sent successfully!'))
      .catch(() => setStatus('Failed to send message. Please try again.'));    
  };

  return (    
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">              
        <div className='container bg-background p-16 shadow-2xl z-50 mt-4 pt-20'>                          
            <div className="contact-form mt-4 pt-5">
              <form ref={form} id="contact-form" onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto text-dark-text">
                
                <input type="hidden" name="contact_number" value="697483" />

                <label>Name</label>
                <input type="name" name="user_name" required className="p-2 border rounded mb-4" />

                <label>Email</label>
                <input type="email" name="user_email" required className="p-2 border rounded mb-4" />              
                
                <label>Message</label>
                <textarea name="message" required className="p-2 border rounded mb-4 h-48"></textarea>

                <input type="submit" value="Send" className="border bg-white text-dark-text p-2 rounded cursor-pointer" />
              </form>
              {status && <p className="text-center mt-4">{status}</p>}
            </div>          
        </div>        
      </main>
    </div>
  );
}

export default ContactForm;
