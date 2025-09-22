import { Award, ExternalLink, Calendar, Building, GraduationCap } from 'lucide-react';
import agile from '../assets/Agile.png';
import test from '../assets/testing.png';

const EducationCertificates = () => {
  const education = [
    {
      id: 1,
      degree: "Postgraduate Diploma in Web Development",
      institute: "Conestoga College, Canada",
      duration: "May 2024 – Aug 2025",
      description: "Completed a Postgraduate Diploma in Web Development with a focus on Software Engineering, AI, and Full-Stack Development.",
      highlights: ["Software Engineering", "Web Development", "Database Systems", "Mobile Application Development","SEO"]
    },
    {
      id: 2,
      degree: "Bachelor of Science in IT",
      institute: "University of Colombo",
      duration: "Jan 2015 – Feb 2019",
      description: "Earned a Bachelor’s degree in Information Technology, gaining strong foundations in software engineering, web technologies, and project development while applying theoretical knowledge through practical assignments and group projects.",
      highlights: ["Java & OOP", "Web Development", "Java Script & Frameworks","Project Development"]
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Agile Software Development: Kanban for Developers',
      issuer: 'LinkedIn',
      date: 'May 2025',
      image: agile,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/15a80e9953840c9720e4a16b96f2b8191369c858239a0d12180e268a616bfb95',
      description: 'Completed a professional course on Agile Software Development with a focus on Kanban methodology. Gained hands-on experience in applying Kanban principles to improve workflow efficiency, manage tasks, and optimize team collaboration.',
      skills: ['Agile Principles', 'Kanban Methodology', 'Workflow Visualization', 'Task Management', 'Continuous Delivery', 'Team Collaboration', 'Process Optimization']
    },
    {
      id: 2,
      title: 'Software Testing: Exploratory Testing',
      issuer: 'LinkedIn',
      date: 'May 2025',
      image: test,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/1427ff2cd8d141100bec1b6daa42dc582f4c350338f49f45a5bb9ecd6907f297',
      description: 'Completed a professional course on Software Testing with a focus on Exploratory Testing techniques. Gained hands-on experience in identifying defects, improving test coverage, and enhancing overall software quality.',
      skills: ['Exploratory Testing', 'Test Design Techniques', 'Defect Identification', 'Test Coverage', 'Software Quality Assurance']
    }
  ];

  return (
    <section id="education-certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Certifications</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and professional certifications that highlight my expertise
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-500" /> Education
          </h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 transition-all duration-500"
              >
                <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                <div className="flex items-center space-x-2 text-gray-300 mb-2">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">{edu.institute}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.duration}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                <div className="flex flex-wrap gap-1">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-1 bg-sky-800/40 text-gray-300 rounded text-xs">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
            <Award className="w-5 h-5 text-sky-500" /> Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-800 to-slate-500 p-2 rounded-full">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 text-white group-hover:bg-gradient-to-r from-sky-800 to-slate-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                    {cert.title}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                  <div className="mb-4 flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-sky-800/40 text-gray-300 rounded text-xs">{skill}</span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800/40 text-gray-300 rounded text-xs">+{cert.skills.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                  
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-300 hover:bg-gradient-to-r from-sky-800 to-slate-500 hover:bg-clip-text hover:text-transparent">
                      <span className="text-sm">Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default EducationCertificates;
