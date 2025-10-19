// src/pages/AboutPage.jsx - เวอร์ชันปรับปรุง
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImage from "../assets/profile.jpg";

const AboutPage = () => {
  // ข้อมูลสมมติเพิ่มเติมเพื่อการแสดงผลที่สวยงาม
  const hardSkills = [
    {
      name: "Frontend",
      items: ["HTML/CSS/JS", "React.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      name: "Backend & Database",
      items: ["Node.js (Express)", "PHP", "MySQL", "PostgreSQL", "Prisma ORM"],
    },
    {
      name: "Tools & Workflow",
      items: ["Git/GitHub", "Figma", "VS Code", "Postman"],
    },
  ];
  const softSkills = [
    "Communication",
    "Problem-solving",
    "Adaptability",
    "Teamwork",
    "Time Management",
    "Detail-Oriented",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/*
          ==================================================
          Hero/Title Section
          ==================================================
        */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Get to know <span className="text-blue-600">Suphinya</span>
          </h1>
          <p className="text-xl text-gray-600">
            A passionate Computer Engineering student focused on building
            intuitive, user-friendly, and robust digital experiences.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {" "}
          {/* ปรับเงาและขอบให้โค้งมนขึ้น */}
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* ==================================================
              Left Column: Profile & Education (2/3 width)
              ==================================================
            */}
            <div className="lg:w-2/3">
              {/* Profile Picture (ย้ายไปด้านบนสุด) */}
              <div className="flex flex-col items-center mb-10">
                <div className="w-52 h-52 rounded-full overflow-hidden border-8 border-blue-50 shadow-xl mb-4">
                  <img
                    src={profileImage}
                    alt="Suphinya Thonglo"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Suphinya Thonglo
                </h2>
                <p className="text-xl text-blue-600 font-medium">
                  Computer Engineering Student
                </p>
              </div>

              {/* Introduction Section */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">
                My Story & Goal
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                <p>
                  นักศึกษาวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 3
                  ที่หลงใหลในการสร้างสรรค์ซอฟต์แวร์ มีความเชี่ยวชาญในเทคโนโลยี
                  **MERN stack (React, Node.js)**
                  และมีความมุ่งมั่นในการเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ
                  ฉันเชื่อในการเขียนโค้ดที่สะอาดและสามารถปรับขนาดได้ (Scalable
                  Code) เพื่อมอบประสบการณ์ที่ดีที่สุดแก่ผู้ใช้
                </p>
                <p>
                  **เป้าหมายของฉัน:**
                  มุ่งหวังที่จะใช้โอกาสฝึกงานเพื่อพัฒนาทักษะการทำงานจริงด้าน
                  **Full-Stack Web Development**
                  และเรียนรู้การทำงานร่วมกับทีมพัฒนาในสภาพแวดล้อมจริงเพื่อก้าวสู่การเป็นวิศวกรซอฟต์แวร์มืออาชีพในอนาคต
                </p>
              </div>

              {/* Education Section */}
              <h3 className="text-3xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
                Education Journey 🎓
              </h3>
              <div className="space-y-6">
                {/* Education Item 1 */}
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-md transition duration-300 hover:shadow-md">
                  <h4 className="text-xl font-bold text-gray-800">
                    Kasetsart University, Chalermphrakiat Sakon Nakhon
                  </h4>
                  <p className="text-blue-600 text-sm font-semibold">
                    2022 - Present
                  </p>
                  <p className="text-gray-700 mt-1">
                    **Bachelor of Engineering, Computer Engineering** | GPA:
                    3.65
                  </p>
                </div>
                {/* Education Item 2 */}
                <div className="p-4 border-l-4 border-gray-400 bg-gray-100 rounded-md transition duration-300 hover:shadow-md">
                  <h4 className="text-xl font-bold text-gray-800">
                    Pitchayabundit 2 Technology College
                  </h4>
                  <p className="text-gray-500 text-sm font-semibold">
                    2019 - 2022
                  </p>
                  <p className="text-gray-700 mt-1">
                    **Vocational Certificate, Business Computer** | GPA: 3.82
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================================
              Right Column: Skills (1/3 width)
              ==================================================
            */}
            <div className="lg:w-1/3 mt-10 lg:mt-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
                Skills & Toolkit 💡
              </h3>

              {/* Hard Skills (Grouped with better presentation) */}
              <div className="space-y-6">
                {hardSkills.map((group, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-lg border-l-4 border-blue-400"
                  >
                    <h4 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wider">
                      {group.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-blue-200 text-blue-900 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft Skills (Tag Cloud Style) */}
              <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-base font-medium rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    # {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA to Contact Page */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-4">
            Want to collaborate or know more about my experience?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full 
                           hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Connect with Me!
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
