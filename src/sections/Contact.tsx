"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiShoppingBag, FiMessageSquare, FiHelpCircle } from "react-icons/fi";

// Reusable component for form inputs (from your original file)
const FormInput = ({ id, label, type = "text", placeholder }: { id: string, label: string, type?: string, placeholder: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
    />
  </div>
);

// Reusable component for contact info (from your original file)
const InfoItem = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 text-amber-400 bg-amber-100 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

// NEW: A component for the creative "Contact Option" cards
const ContactOptionCard = ({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) => (
  <motion.a
    href={href}
    className="block p-8 bg-white rounded-lg shadow-lg text-center cursor-pointer"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="inline-block p-4 bg-amber-400 text-white rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-lora text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.a>
);

// NEW: A simple FAQ item component
const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="border-b border-gray-200 py-4">
    <h4 className="text-lg font-semibold text-gray-800">{question}</h4>
    <p className="text-gray-600 mt-1">{answer}</p>
  </div>
);

export default function Contact() {
  return (
    // Use the ID you had, and the same padding
    <div id="contact" className="bg-gray-50 pt-24 lg:pt-28">
      <div className="container mx-auto max-w-6xl px-6 py-12 lg:py-20">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-lora text-5xl font-bold text-gray-900">How can we help?</h1>
          <p className="text-lg text-gray-600 mt-2">
            Choose an option below or fill out the form to get in touch.
          </p>
        </div>

        {/* --- NEW: Creative "Contact Options" Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ContactOptionCard
            icon={<FiShoppingBag size={28} />}
            title="Chat with Sales"
            description="Get help with a new purchase or product questions."
            href="#contact-form" // This scrolls down to the form
          />
          <ContactOptionCard
            icon={<FiHelpCircle size={28} />}
            title="Email Support"
            description="For issues with an order, delivery, or returns."
            href="#contact-form" // This scrolls down to the form
          />
          <ContactOptionCard
            icon={<FiMapPin size={28} />}
            title="Visit Showroom"
            description="See our collection in person. Find address below."
            href="#contact-info" // This scrolls down to the info
          />
        </div>

        {/* --- Main Content: Form + FAQ/Info --- */}
        <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden" id="contact-form">
          
          {/* Section 1: Contact Form (Improved) */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="first-name" label="First Name" placeholder="John" />
                <FormInput id="last-name" label="Last Name" placeholder="Doe" />
              </div>
              <FormInput id="email" label="Email" type="email" placeholder="you@example.com" />
              
              {/* NEW: Topic Selector */}
              <div>
                <label htmlFor="topic" className="block text-sm font-semibold text-gray-800 mb-2">
                  What is this about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option>Sales Inquiry</option>
                  <option>Order Support</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-amber-400 text-white font-semibold shadow-md transition-colors duration-300 hover:bg-amber-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Section 2: FAQ + Contact Info */}
          <div className="w-full lg:w-2/5 bg-gray-100 p-8 lg:p-12" id="contact-info">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Quick Answers</h2>
            
            {/* NEW: FAQ Section */}
            <div className="space-y-4 mb-10">
              <FaqItem
                question="What is your return policy?"
                answer="We accept returns within 30 days of delivery for a full refund. Items must be in original condition."
              />
              <FaqItem
                question="Do you ship internationally?"
                answer="Currently, we only ship within Sri Lanka. We are planning to expand in the future!"
              />
              <FaqItem
                question="How do I track my order?"
                answer="You will receive a tracking link via email as soon as your order has shipped."
              />
            </div>

            {/* Your Original Contact Info */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Info</h3>
            <div className="space-y-6">
              <InfoItem
                icon={<FiMapPin size={22} />}
                title="Our Address"
                text="123 Furniture Lane, Design City, Kaluthara, Sri Lanka"
              />
              <InfoItem
                icon={<FiMail size={22} />}
                title="Email Us"
                text="support@furnispace.com"
              />
              <InfoItem
                icon={<FiPhone size={22} />}
                title="Call Us"
                text="+94 771 234 567"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}