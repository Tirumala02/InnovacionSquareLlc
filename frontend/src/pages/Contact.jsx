import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import team from '../assets/team.jpg';
import office from '../assets/office.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');
        e.target.reset();
      } else {
        const { error } = await response.json();
        toast.error(error || 'Failed to send email. Try again later.');
      }
    } catch (err) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <ToastContainer />
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="px-4 py-6 sm:px-0"
      >
        <motion.h1 variants={fadeIn} className="text-4xl font-bold text-primary mb-4">
          Contact Us
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-gray-700 mb-6">
          Get in Touch with Us for Personalized Health Solutions
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="mr-2 text-secondary" />
                <span>Office 246, Infinity Business Center, Barsha Business Center, Al Barsha 1, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-secondary" />
                <span>+971 529986307</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-secondary" />
                <span>dipti.h@innovacion-sq.com</span>
              </li>
            </ul>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6563523676873!2d55.19140627618626!3d25.113491577764997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbd5ce4b0db%3A0x85223584ce368e9!2sINFINITY%20BUSINESS%20CENTER!5e0!3m2!1sen!2sin!4v1733679236063!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
            
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 border-b border-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 border-b border-gray-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 border-b border-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 border-b border-gray-400"
                ></textarea>
              </div>
              <motion.button
                whileHover={!loading && { scale: 1.05 }}
                whileTap={!loading && { scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-2 px-4 rounded transition duration-300 ${
                  loading
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <span className="loader mr-2"></span> Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
          variants={fadeIn}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={office} alt="Office" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Our Office</h3>
            <p className="text-gray-700">Our modern office space is designed to foster innovation and collaboration in health technology.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={team} alt="Team" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Our Team</h3>
            <p className="text-gray-700">Meet our dedicated team of experts committed to revolutionizing personal health management.</p>
          </motion.div>
        </motion.div>
      
    </div>
  );
}
