// src/pages/HomePage.jsx - เวอร์ชันปรับปรุง
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import profileImage from "../assets/profile.jpg";

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3); // แสดง 3 โปรเจกต์แรก

  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* เพิ่ม min-h-screen และเปลี่ยนพื้นหลังหลัก */}
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* ปรับ padding ให้ตอบสนองมากขึ้น */}
        {/*
          ==================================================
          Hero Section (ส่วนที่ 1: การแนะนำตัว)
          - เพิ่มความโดดเด่นด้วยการไล่สี (Gradient) และเงาที่นุ่มนวล
          - ปรับ Typography ให้คมชัดและเป็นมิตร
          ==================================================
        */}
        <section
          className="relative flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left py-20 md:py-32 
                            bg-white rounded-xl shadow-2xl overflow-hidden mt-6 
                            bg-gradient-to-br from-blue-50 to-indigo-100"
        >
          {" "}
          {/* เปลี่ยนสีพื้นหลังเป็น gradient, เพิ่มเงา */}
          {/* Decorative Circle (เพิ่มความน่าสนใจด้วยองค์ประกอบตกแต่ง) */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200 rounded-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="p-16 flex-shrink-0 mb-8 md:mb-0 md:mr-12 z-10">
            {" "}
            {/* ปรับระยะห่างและเพิ่ม z-index */}
            <div className="w-52 h-52 rounded-full overflow-hidden border-8 border-white shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              {" "}
              {/* ปรับขนาดและขอบให้เด่นขึ้น */}
              <img
                src={profileImage}
                alt="Suphinya Thonglo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="z-10 max-w-xl">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              {" "}
              {/* ปรับขนาดและน้ำหนักตัวอักษร */}
              Hello, I'm <span className="text-blue-600">Suphinya Thonglo</span>
            </h1>
            <p className="text-2xl text-gray-700 font-light mb-8">
              A **Computer Engineering** student with a passion for
              **user-centered design** and **modern web development**. Let's
              build something great.
            </p>
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white text-xl font-semibold py-3 px-8 rounded-full 
                         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 View My Work
            </a>
          </div>
        </section>
        {/*
          ==================================================
          Featured Projects Section (ส่วนที่ 2: โปรเจกต์เด่น)
          - เพิ่มส่วนหัว (Separator) ให้ดูมีโครงสร้าง
          ==================================================
        */}
        <section id="projects" className="py-20 md:py-24">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              My Portfolio
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mt-2">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A collection of my best work and explorations in code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {" "}
            {/* เพิ่มระยะห่าง gap */}
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Call to Action for more projects */}
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="text-blue-600 text-lg font-medium hover:text-blue-800 transition-colors"
            >
              See All Projects →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
