"use client";

import Button from "../../../components/Button";
import React, { useState } from "react";

const Contact: React.FC = () => {
 const [formData, setFormData] = useState({
  email:'',
  name:'',
  message:'',
 });

 const [ status, setStatus] = useState('');

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name, value} = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value}));
 };
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("Sending....");
  
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
},
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    console.log("Message sent successfully");
  } else {
    console.error("Error sending message");
  }
};
  

  return (
    <section className=" w-screen py-22 flex flex-col items-center justify-center mb-12">
      <div className="text-center mt-24 mb-48">
        <h2 className="text-3xl font-bold text-gray-50 tracking-tight sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-3  xl:px-48 px-12  md:text-xl text-gray-20">
          Who can I talk to if I have questions? Call support on 0108720342 or
          email us at support@ecovent.co.ke or use the contact form below.
        </p>
      </div>

      {/**form Section */}

      <div className="shadow-lg rounded-lg shadow-yellow-200 xl:shadow-green-200 p-10 w-[80%] border border-gray-300">
        <h2 className="font-bold text-2xl text-gray-50">Contact Us</h2>
        <p className="text-gray-20 text-lg">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-4 mt-10 pb-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="block font-medium text-gray-500 mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="border border-gray-300  hover:border-gray-700 hover:ease-in-out hover:duration-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
                id="first-name"
                type="text"
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="block font-medium text-gray-500 mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="border border-gray-300  hover:border-gray-700 hover:ease-in-out hover:duration-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
                type="text"
                id="last-name"
                placeholder="Enter your Last Name"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
              typeof="email"
              id="email"
              placeholder="Enter your Email Address"
              required
            />
          </div>
          <div className="space-y-2 text-gray-500">
            <label htmlFor="messages ">Message Our Team</label>
            <textarea
              className="border border-gray-300  rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 min-h-[100px]"
              rows={6}
              typeof="message"
              placeholder="Your Message for the Team"
            />
          </div>
          <div className="space-y-2">
            <Button
              type="submit"
              title="Submit"
              variant="btn_dark_green_none"
            />
          </div>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}
export default Contact;
