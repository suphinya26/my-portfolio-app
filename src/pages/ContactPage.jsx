// src/pages/ContactPage.jsx - เวอร์ชันปรับปรุง
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/*
          ==================================================
          Header & Introduction
          ==================================================
        */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Let's <span className="text-blue-600">Connect</span>
          </h1>
          <p className="text-xl text-gray-600">
            I'm currently seeking a **Web Development Internship**. Feel free to
            reach out for collaboration, interviews, or just to say hello!
          </p>
        </header>

        {/*
          ==================================================
          Contact Grid (Form + Contact Info)
          ==================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Column 1: Contact Information (1/3 width) */}
          <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600 h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Direct Info
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Email Address
                  </p>
                  <a
                    href="mailto:suphinya.t@ku.th"
                    className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    suphinya.t@ku.th
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.25 7.78a1 1 0 01-.234 1.157l-1.785 1.785a1 1 0 00.126 1.487l1.455 1.455a1 1 0 001.487.126l1.785-1.785a1 1 0 011.157-.234l2.096 1.022a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.777 21 3 14.223 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Phone Number
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    094-742-2192
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-t pt-6">
              Find Me Online
            </h2>
            <div className="flex space-x-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.784 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.309 3.492.997.107-.775.418-1.309.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.314.469-2.385 1.236-3.221-.124-.3-.538-1.52.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.656 1.656.242 2.875.118 3.176.77.835 1.233 1.906 1.233 3.221 0 4.609-2.802 5.625-5.476 5.922.42.36.816 1.096.816 2.209v3.291c0 .319.192.611.793.577 4.766-1.587 8.205-6.085 8.205-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* เพิ่ม Twitter, Medium, หรือเว็บไซต์ส่วนตัวอื่นๆ ที่นี่ */}
            </div>
          </div>

          {/* Column 2: Contact Form (2/3 width) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h2>
            <form action="#" method="POST" className="space-y-6">
              {" "}
              {/* **หมายเหตุ:** คุณต้องเชื่อมต่อ Form นี้กับ Backend Service (เช่น Formspree, Netlify Forms, หรือ API ของคุณเอง) เพื่อให้ใช้งานได้จริง */}
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject / Purpose
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-4 border border-transparent 
                                       shadow-sm text-lg font-semibold rounded-md text-white bg-blue-600 
                                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                       focus:ring-blue-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
