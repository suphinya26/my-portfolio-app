// src/pages/ProjectCaseStudy.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const ProjectCaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4">The project you are looking for does not exist.</p>
        <Link to="/projects" className="text-blue-500 hover:underline mt-4 inline-block">
          Go back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <article className="bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-gray-600 text-lg mb-6">
            <span className="font-semibold">My Role:</span> {project.role}
          </p>
          <img src={project.image} alt={project.title} className="w-full rounded-lg mb-8" />
          
          <div className="prose max-w-none text-gray-800">
            <h2 className="text-3xl font-semibold mb-4">Overview</h2>
            <p>{project.details.overview}</p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">The Process</h2>
            <p>{project.details.process}</p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Key Features</h2>
            <ul>
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">What I Learned</h2>
            <p>{project.details.learned}</p>
          </div>
        </article>
        <div className="mt-8 text-center">
          <Link to="/projects" className="text-blue-500 hover:underline">
            ← Back to all projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCaseStudy;