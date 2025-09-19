// src/pages/ProjectsPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // นำเข้าข้อมูลผลงานทั้งหมด

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;