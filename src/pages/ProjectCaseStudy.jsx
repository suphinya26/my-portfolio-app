// src/pages/ProjectCaseStudy.jsx - เวอร์ชันปรับปรุง
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

const ProjectCaseStudy = () => {
  const { id } = useParams();
  // ใช้ Number(id) เพื่อให้แน่ใจว่าเปรียบเทียบกับตัวเลข
  const project = projects.find((p) => p.id === Number(id));

  // ปรับปรุงหน้า Project Not Found
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center py-20">
        <h1 className="text-5xl font-extrabold text-red-600">404 Error</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The project you're looking for doesn't exist.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-block bg-blue-600 text-white text-lg py-3 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
        >
          ← Go back to Projects Portfolio
        </Link>
      </div>
    );
  }

  // กำหนดสีและสไตล์สำหรับ Tags/Tech Stack
  const tagColor = "bg-blue-100 text-blue-800";
  const repoColor = "bg-gray-800 text-white";

  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* ใช้พื้นหลังสีอ่อน */}
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/*
          ==================================================
          Header & Metadata Section
          ==================================================
        */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            {project.description}{" "}
            {/* ใช้ description จาก project data เป็นบทสรุปสั้นๆ */}
          </p>

          {/* Metadata Grid */}
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mt-6 text-left">
            <div className="text-gray-700">
              <span className="block text-sm font-semibold uppercase text-blue-600">
                My Role
              </span>
              <span className="block text-lg font-medium">{project.role}</span>
            </div>
            <div className="text-gray-700">
              <span className="block text-sm font-semibold uppercase text-blue-600">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* สามารถเพิ่ม Field อื่นๆ เช่น Duration, Year ได้ที่นี่ */}
          </div>
        </header>

        {/*
          ==================================================
          Main Image & Links
          ==================================================
        */}
        <div className="max-w-5xl mx-auto mb-12">
          <a
            href={project.link || project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="block group" // ใช้ group เพื่อ Hover effect
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl shadow-2xl transition-all duration-300 transform group-hover:scale-[1.01] border-4 border-white"
            />
          </a>
          {/* ปุ่มสำหรับลิงก์ภายนอก */}
          <div className="flex justify-center space-x-4 mt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-2 rounded-full font-semibold text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
              >
                <span>Visit Live Site</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-6 py-2 rounded-full font-semibold text-lg ${repoColor} hover:bg-gray-700 transition-colors shadow-lg`}
              >
                <span>View Repository</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 9a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-7zM5 9.5a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2zM8 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/*
          ==================================================
          Content Section (Case Study Body)
          ==================================================
        */}
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 mb-16">
          <div className="prose prose-lg max-w-none text-gray-800">
            {/* Overview Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-0 mb-4 border-b pb-2">
              💡 Project Goal / Overview
            </h2>
            <p>{project.details.overview}</p>

            {/* Problem/Challenge (เพิ่มส่วนสำคัญนี้) */}
            {project.details.challenge && (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                  🤔 The Challenge
                </h2>
                <p>{project.details.challenge}</p>
              </>
            )}

            {/* Process Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
              🛠️ My Process & Solution
            </h2>
            <p>{project.details.process}</p>

            {/* Features/Implementation */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
              ✨ Key Features & Implementation
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* What I Learned Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
              📈 Results & Learnings
            </h2>
            <p>{project.details.learned}</p>
          </div>
        </article>

        {/* Back to Projects Link */}
        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to all projects</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCaseStudy;
