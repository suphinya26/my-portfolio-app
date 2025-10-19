// src/components/Footer.jsx - เวอร์ชันปรับปรุง
import React from "react";

const Footer = () => {
  // ข้อมูล Social Links และ Navigation Links
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suphinya-thonglo",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.784 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.309 3.492.997.107-.775.418-1.309.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.314.469-2.385 1.236-3.221-.124-.3-.538-1.52.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.656 1.656.242 2.875.118 3.176.77.835 1.233 1.906 1.233 3.221 0 4.609-2.802 5.625-5.476 5.922.42.36.816 1.096.816 2.209v3.291c0 .319.192.611.793.577 4.766-1.587 8.205-6.085 8.205-11.385 0-6.627-5.373-12-12-12z",
    },
    // เพิ่มลิงก์อื่น ๆ ที่นี่ (เช่น Email, Twitter)
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      {" "}
      {/* ใช้สีที่เข้มกว่า (gray-900) เพื่อความพรีเมียม */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-8 mb-6">
          {/* Brand/Slogan */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">
              Suphinya Thonglo
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Crafting user-centered digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Designed and Developed by Suphinya Thonglo. &copy;{" "}
            {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
