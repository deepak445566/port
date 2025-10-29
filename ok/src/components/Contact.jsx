// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/deepak445566',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/deepak-pandey-650638255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/deepakpandey_10/',
      color: 'hover:bg-pink-600 hover:text-white'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-blue-400 hover:text-white'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20   w-100vh  ">
      <div className="container  px-2">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-gray-800 big mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life. I'm always excited to work on new challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto" >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#6bc8bd] to-[#6bc9c0] rounded-2xl shadow-2xl p-4 text-white " id="contact">
              <h3 className="text-2xl font-bold mb-6 big">Let's Talk</h3>
              <p className="mb-8 opacity-90 mont">
                Have a project in mind? Let's collaborate and create something amazing together.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:your@email.com"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-all duration-300">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 big">Email</p>
                    <p className="font-semibold group-hover:underline ">deepakpandey1212d@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 big">Location</p>
                    <p className="font-semibold popin">Ghaziabad , India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Follow My Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 ${social.color} transition-all duration-300 group`}
                  >
                    <i className={`${social.icon} text-xl text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300`}></i>
                    <span className="ml-3 font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Send Message
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fill out the form and I'll get back to you within 24 hours.
            </p>

            <form 
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Web3Forms Configuration */}
              <input type="hidden" name="access_key" value="20f68bc9-0a31-425f-99a3-461ba737b188" />
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Website" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#80D9CF] focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#80D9CF] focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#80D9CF] focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#80D9CF] focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none transition-all duration-300"
                  placeholder="Tell me about your project requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#80D9CF] hover:bg-[#6bc9c0] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg flex items-center"
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg flex items-center"
                >
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                I'll respond to your message within 24 hours
              </p>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;