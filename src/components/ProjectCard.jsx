// src/components/ProjectCard.jsx - เวอร์ชันปรับปรุง
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    // ปรับปรุงการ์ด: เพิ่มเงา, ขอบโค้ง, และ Hover Effect ที่โดดเด่นยิ่งขึ้น
    <div
      className="bg-white rounded-xl shadow-xl hover:shadow-2xl overflow-hidden 
                 transition-all duration-500 transform hover:-translate-y-1 hover:rotate-1"
    >
      {/* Image Container with Hover Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          // ปรับความสูงและเพิ่ม transition ให้ภาพดูดีขึ้นเมื่อมีการ hover
          className="w-full h-56 object-cover transition-transform duration-500 transform group-hover:scale-110"
        />
        {/* Overlay Effect for Professional Look */}
        <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-0"></div>
      </div>

      <div className="p-6">
        {/* Title and Role/Category */}
        <h3 className="text-2xl font-bold mb-1 text-gray-900 leading-snug">
          {project.title}
        </h3>
        {/* สมมติว่ามี project.role หรือ project.category ในข้อมูล */}
        <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wider">
          {project.role || "Web Development"}
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech Stack Tags (เพิ่มส่วนนี้) */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {/* แสดง 3 Tags แรกเท่านั้น */}
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium px-3 py-1 rounded-full bg-gray-200 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* View Project Button */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center space-x-2 font-semibold bg-blue-600 text-white py-2 px-5 rounded-full 
                     hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          <span>View Case Study</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
