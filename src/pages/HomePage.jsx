// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import profileImage from '../assets/profile.jpg'; // สมมติว่าคุณมีรูปโปรไฟล์ในโฟลเดอร์ src/assets/

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3); // แสดง 3 โปรเจกต์แรก

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 bg-gray-50 rounded-lg shadow-inner">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8 border-4 border-white shadow-lg">
            <img src={profileImage} alt="Suphinya Thonglo" className="object-cover w-full h-full" />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Suphinya Thonglo</h1>
            <p className="text-2xl text-gray-700 mb-6">A Computer Engineering student with a passion for user-centered design.</p>
            <a href="#projects" className="bg-blue-600 text-white text-lg py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
              View My Work
            </a>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;