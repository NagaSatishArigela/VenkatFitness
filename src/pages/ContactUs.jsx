import React, { useRef } from "react";
import ContactPic from "../assets/contact-Fitness-Traier-in-India.jpeg";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const history = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
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
            form.current.reset();
            history("/thank-you");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    fetch(
      "https://script.google.com/macros/s/AKfycbzxZdBbIY2hr0Gxr1gjeM7jID7NpVTVoaB7D3ID8vV7Ws00z64u-q8rJP1WoI0kDW29/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="CONTACT US - #1 BEST FITNESS TRAINER IN HYDERABAD - INDIA"
        />
        <meta
          name="description"
          content="Contact Us for the BEST Personal Training in Hyderabad by Certified Fitness Trainer VENKAT MADAMALA who has an experience of over 15+ years."
        />
        <meta name="keywords" content="Contact US" />

        <meta
          property="og:title"
          content="CONTACT US - #1 BEST FITNESS TRAINER IN HYDERABAD - INDIA"
        />
        <meta
          property="og:description"
          content="Contact Us for the BEST Personal Training in Hyderabad by Certified Fitness Trainer VENKAT MADAMALA who has an experience of over 15+ years."
        />
        <meta property="og:image" content="" />
        <meta
          property="og:url"
          content="https://venketfitness.com/contact-us"
        />
      </Helmet>
      <div className="container mx-auto p-4 lg:pt-14 lg:flex lg:justify-center">
        <div className="lg:w-1/2 lg:mr-6">
          <img src={ContactPic} alt="Contact" className="w-full" loading="lazy"/>
        </div>
        <div className="lg:w-1/2 m-auto flex flex-col justify-center items-center">
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
              padding: "10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Register
          </h1>
          <form className="max-w-md" ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input mt-1 w-full h-10 px-3 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-1 w-full h-10 px-3 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input mt-1 w-full h-10 px-3 text-black"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="package" className="block text-gray-700">
                Please select Package below:
              </label>
              <select
                id="package"
                name="package"
                className="form-select mt-1 w-full h-10 appearance-none border rounded px-3 py-2 text-black bg-gray-100"
                required
              >
                <option value="" disabled selected>
                  --Please select an option--
                </option>
                <option
                  value="Personalised Nutrition Plan - (Diet Plan)"
                  className="text-black"
                >
                  Personalised Nutrition Plan - (Diet Plan)
                </option>
                <option
                  value="Personalised Workout + Nutrition Plan"
                  className="text-black"
                >
                  Personalised Workout + Nutrition Plan
                </option>
                <option
                  value="Sixpack Transformation Workout + Supplement Guidance"
                  className="text-black"
                >
                  Sixpack Transformation Workout + Supplement Guidance
                </option>
                <option value="Couple Plan" className="text-black">
                  Couple Plan
                </option>
                <option value="Premium Customised Plan" className="text-black">
                  Premium Customised Plan
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4z" />
                </svg>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="duration" className="block text-gray-700">
                Duration:
              </label>
              <select
                id="duration"
                name="duration"
                className="form-select mt-1 w-full h-10 px-3 text-black"
                required
              >
                <option value="" disabled selected>
                  --Please select an option--
                </option>
                <option value="1 Month" className="text-black">
                  1 Month
                </option>
                <option value="3 Months" className="text-black">
                  3 Months
                </option>
                <option value="6 Months" className="text-black">
                  6 Months
                </option>
                <option value="1 Year" className="text-black">
                  1 Year
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700">
                Location, Height & Weight:
              </label>
              <textarea
                id="location"
                name="location"
                className="form-textarea mt-1 w-full text-black px-3"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                sitekey="6LcB_igpAAAAAML-8W1XUDNnI3IJ4_KYGIBYoJgn"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
