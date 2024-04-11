import React, { useRef, useState } from 'react';
import ContactPic from "../assets/contactPic.webp";
import emailjs from "@emailjs/browser";
import ThankyouModal from '../components/ThankyouModal';

const ContactUs = () => {
  const [send, setSend] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i2h82eb",
        "template_j9d1u3e",
        form.current,
        "hjLXq5MC66R977QFn"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setSend(true);
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClose = () => {
    setSend( false );
};
  return (
    <div className="container mx-auto p-4 lg:flex lg:justify-center">
      <div className="lg:w-1/2 lg:mr-6">
        <img src={ContactPic} alt="Contact" className="w-full" />
      </div>
      <div className="lg:w-1/2 m-auto lg:pt-14">
        <form className="max-w-md" ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name:</label>
            <input type="text" id="name" name="from_name" className="form-input mt-1 w-full h-10 px-3" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email:</label>
            <input type="email" id="email" name="email" className="form-input mt-1 w-full h-10 px-3 text-black" required />
          </div>
 
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone Number:</label>
            <input type="tel" id="phone" name="phone" className="form-input mt-1 w-full h-10 px-3 text-black" required />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="package" className="block text-gray-700">Please select Package below:</label>
            <select id="package" name="package" className="form-select mt-1 w-full h-10 appearance-none border rounded px-3 py-2 text-black bg-gray-100" required>
              <option value="" disabled selected>Select Package</option>
              <option value="couple" className='text-black'>Couple Plan</option>
              <option value="individual" className='text-black'>Individual Plan</option>
              <option value="family" className='text-black'>Family Plan</option>
              <option value="custom" className='text-black'>Custom Plan</option>
              {/* Add options for packages here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4z" /></svg>
            </div>
          </div>


          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700">Duration:</label>
            <select id="duration" name="duration" className="form-select mt-1 w-full h-10 px-3 text-black" required>
              <option value="">Select Duration</option>
              <option value="family" className='text-black'>Family Plan</option>
              <option value="custom" className='text-black'>Custom Plan</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">Location, Height & Weight:</label>
            <textarea id="location" name="location" className="form-textarea mt-1 w-full text-black px-3" required></textarea>
          </div>

          <div className="mb-4">
            {/* Add your captcha component here */}
          </div>

          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
      {send && <ThankyouModal open={send} handleClose={handleClose}/>}
    </div>
  );
};

export default ContactUs;
