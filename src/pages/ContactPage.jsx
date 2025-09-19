// src/pages/ContactPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8 py-12">
        <section className="bg-white rounded-lg shadow-lg p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Contact Me
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Please feel free to get in touch with me.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              [cite_start]<p className="text-gray-700">suphinya.t@ku.th [cite: 4]</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.25 7.78a1 1 0 01-.234 1.157l-1.785 1.785a1 1 0 00.126 1.487l1.455 1.455a1 1 0 001.487.126l1.785-1.785a1 1 0 011.157-.234l2.096 1.022a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.777 21 3 14.223 3 6V5z" />
                </svg>
              </span>
              [cite_start]<p className="text-gray-700">094-742-2192 [cite: 3]</p>
            </div>
            {/* Social Media Links (คุณสามารถเพิ่มลิงก์ของตัวเองได้) */}
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.784 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* ตัวอย่างลิงก์ GitHub */}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.309 3.492.997.107-.775.418-1.309.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.314.469-2.385 1.236-3.221-.124-.3-.538-1.52.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.656 1.656.242 2.875.118 3.176.77.835 1.233 1.906 1.233 3.221 0 4.609-2.802 5.625-5.476 5.922.42.36.816 1.096.816 2.209v3.291c0 .319.192.611.793.577 4.766-1.587 8.205-6.085 8.205-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;