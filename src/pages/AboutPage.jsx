// src/pages/AboutPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8 py-12">
        <section className="bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            About Me
          </h1>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            
            {/* About Me Section */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                นักศึกษาวิศวกรรมคอมพิวเตอร์ที่มีความสนใจด้านการพัฒนาเว็บไซต์
                มุ่งหวังที่จะใช้โอกาสฝึกงานเพื่อพัฒนาทักษะการทำงานจริงด้าน Web
                Development และเรียนรู้การทำงานร่วมกับทีมพัฒนาในสภาพแวดล้อมจริง
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Education
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-700">
                  Kasetsart University, Chalermphrakiat Sakon Nakhon
                </h3>
                <p className="text-gray-500 text-sm">2022 - present</p>
                <p className="text-gray-600 mt-1">Bachelor of Computer Engineering (GPA 3.65)</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700">
                  Pitchayabundit 2 Technology College
                </h3>
                <p className="text-gray-500 text-sm">2019 - 2022</p>
                <p className="text-gray-600 mt-1">Vocational Certificate in Business Computer (GPA 3.82)</p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="lg:w-1/3 mt-10 lg:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Skills
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-gray-700 mb-3">Hard Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Web Development: HTML, CSS, JavaScript, React.js, Node.js, Express.js, PHP</li>
                  <li>Database: MySQL, PostgreSQL, Prisma ORM</li>
                  <li>Tools & Others: Git/GitHub, Postman, Figma</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-3">Soft Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Communication</li>
                  <li>Problem-solving</li>
                  <li>Adaptability</li>
                  <li>Time management</li>
                  <li>Responsibility</li>
                </ul>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;