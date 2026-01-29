import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Application Support Analyst',
      company: 'ElectroFrost Inc',
      location: 'Ontario, Canada',
      duration: 'Sep 2025 - Present',
      type: 'Full-time',
      technologies: [  'ServiceM8',  'Wix',  'SEO',  'CRM',  'Automation',  'Ticketing & Incident Management',  'API Integration',   'Website Management', 'System Monitoring'],

      highlights: [
        'Implemented and managed ServiceM8, building custom forms, automations, and workflows to streamline field operations.',
        'Designed and maintained company websites, optimising layout, performance, and backend integrations.',
        'Improved online visibility through SEO, digital marketing, and campaign performance analysis.',
        'Supported sales operations via CRM management, lead tracking, and quotation support.',
        'Delivered technical support and system training, resolving issues and improving internal tools.'
      ]
    },
    {
      id: 2,
      position: 'Software Engineer',
      company: 'Victoria Partners Pvt Ltd',
      location: 'Colombo, Sri Lanka',
      duration: 'Aug 2022 - Apr 2024',
      type: 'Full-time',
      technologies: [   'React',  'Node.js',  'Express.js',  'JavaScript',  'REST APIs',  'SQL & NoSQL Databases',  'ERP Systems',
  'CRM Systems',  'AWS',  'CI/CD',  'System Integration',  'Automated Testing'],
      highlights: [
        'Led development and support of CRM and ERP systems, translating business needs into technical solutions.',
        'Built system integrations, reports, and data models using REST APIs and SQL/NoSQL databases.',
        'Performed system testing, troubleshooting, deployments, and documentation for ERP environments.',
        'Deployed cloud applications using AWS, Git, and CI/CD pipelines, reducing deployment time by 20%.',
        'Contributed to system upgrades, optimisation, and security governance initiatives.'
      ]
    },
    {
      id: 3,
      position: 'Software Engineer',
      company: 'Copreus Pvt Ltd',
      location: 'Colombo, Sri Lanka',
      duration: 'Mar 2019 - Aug 2022',
      type: 'Part-time',
      technologies: [   'Laravel',  'Node.js',  'Java',  'React',  'Vue',  'HTML5',  'CSS3',  'JavaScript',  'Object-Oriented Programming',  'REST APIs',  'MySQL',  'MongoDB',  'AWS',  'CI/CD',  'Git',  'GitHub',  'Postman',  'JWT Authentication',
  'Agile / Scrum'],
      highlights: [
        'Delivered full-stack CRM/ERP and enterprise web applications using Laravel, Node.js, Java, React, and Vue.',
        'Designed and optimised RESTful APIs and SQL/NoSQL databases for performance and reliability.',
        'Managed cloud deployments with AWS, Git, and CI/CD, improving availability and release efficiency.',
        'Enhanced UI/UX and responsiveness with modern front-end technologies, improving load times by 30%.'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">
              Experience
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in crafting innovative solutions through software development
          </p>
        </div>

        <div className="relative">
          {/* Simplified timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-800 to-slate-500"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-start mb-8 pl-12">
              {/* Timeline dot */}
              <div className="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-sky-800 to-slate-500 rounded-full border-2 border-slate-900 z-10"></div>

              {/* Content */}
              <div className="w-full bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'Full-time'
                        ? 'bg-sky-800/40 text-gray-300'
                        : exp.type === 'Internship'
                        ? 'bg-slate-800/40 text-gray-300'
                        : exp.type === 'Freelance'
                        ? 'bg-sky-700/40 text-gray-300'
                        : 'bg-slate-700/40 text-gray-300'
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>

                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-2">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-300 mb-4">
                  <Calendar className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span>{exp.duration}</span>
                </div>

                {/* Highlights / responsibilities */}
                {exp.highlights?.length > 0 && (
                  <div className="mb-5">
                    <h4 className="font-semibold text-white mb-2">Key Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-sky-800/40 text-gray-300 rounded text-sm group-hover:bg-sky-800/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default Experience;
