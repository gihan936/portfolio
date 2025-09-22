import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import condorguide from '../assets/condorGuide.jpg';
import comhub from '../assets/crm.webp';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  Demo?: string;
  longDescription: string;
  features: string[];
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3 for mobile

  const projects: Project[] = [
{
  id: 1,
  title: 'Com-Hub System – Enterprise Dashboard & CRM',
  description: 'Enterprise-level CRM and dashboard solution with predictive dialling, automated communication, and real-time tracking.',
  image: comhub, 
  technologies: ['React', 'Express', 'WebSockets', 'MySQL', 'AWS'],
  github: 'https://github.com/gihan936',
  live: 'http://crm360.victoriapartners.lk:55190/login',
  longDescription: 'Com-Hub System is a powerful enterprise-grade dashboard and CRM solution designed for large-scale businesses. It integrates predictive dialling, automated email sending, real-time agent tracking, and advanced reporting. The system ensures seamless client, partner, and vendor management while handling 500+ concurrent users without performance lags.',
  features: [
    'Custom Dashboards for Enterprise Users',
    'Predictive Dialling for Agent Efficiency',
    'Automated Email Sending System',
    'Real-Time Reports & Agent Tracking',
    'Client, Partner, and Vendor Management',
    'Handles 500+ Concurrent Users Smoothly'
  ]
}
,
{
  id: 2,
  title: 'CondorGuide – Campus Navigation & Facility Management',
  description: 'A full-stack campus navigation and facility management web app with smart tracking, alerts, and issue reporting.',
  image: condorguide,
  technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Mapbox GL JS', 'JWT', 'SMTPGrid', 'GridFS', 'Stripe', 'Bootstrap'],
  github: 'https://github.com/gihan936/CondorGuide.git',
  live: 'https://condor-guide-czmq.vercel.app/', 
  longDescription: 'CondorGuide is a modern full-stack web application built to simplify campus life. It provides classroom tracking, smart navigation using Mapbox GL JS, issue reporting for facilities, and emergency alert systems. The app is designed for students, faculty, and staff, ensuring smooth communication and accessibility. With JWT authentication, GridFS for file handling, and Stripe integration for campus service payments, CondorGuide enhances campus efficiency with a secure and user-friendly experience.',
  features: [
    'Smart Campus Navigation with Mapbox GL JS',
    'Classroom Tracking & Scheduling',
    'Facility Issue Reporting System',
    'Emergency Alert Notifications',
    'JWT Authentication & Secure Access',
    'File Storage with GridFS',
    'Stripe Integration for Campus Payments',
    'Intuitive UI/UX Designed in Figma'
  ]
}

  ];

  // Set initial visible count based on screen size
  useEffect(() => {
    const isPC = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
    setVisibleCount(isPC ? 6 : 3);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const loadMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-100/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-sky-200 to-slate-200 bg-clip-text text-transparent animate-pulse">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.id} 
              className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:bg-gradient-to-r from-sky-200 to-slate-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-sky-800/40 text-gray-300 rounded-full text-sm group-hover:bg-sky-800/60 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-800/40 text-gray-300 rounded-full text-sm group-hover:bg-slate-800/60 transition-colors duration-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.live ? (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:bg-gradient-to-r from-sky-200 to-slate-200 hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  ) : project.Demo ? (
                    <a 
                      href={project.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:bg-gradient-to-r from-sky-200 to-slate-200 hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="border border-cyan-600/90 bg-transparent hover:bg-slate-50 hover:text-black text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              aria-label="Load more projects"
            >
              Load More
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-200 to-slate-200 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-sky-800/40 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  {selectedProject.live ? (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-sky-200 to-slate-200 text-black px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-white/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  ) : selectedProject.Demo ? (
                    <a 
                      href={selectedProject.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-sky-200 to-slate-200 text-black px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-white/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;