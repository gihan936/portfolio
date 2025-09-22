import React from 'react';
import reactNativeIcon from '../assets/icons8-react-native-50.png';
import javaIcon from '../assets/icons8-java-48.png';
import jsIcon from '../assets/icons8-javascript-48.png';
import react from '../assets/icons8-react-48 (1).png';
import angular from '../assets/icons8-angularjs-48.png';
import next from '../assets/icons8-nextjs-48.png';
import nest from '../assets/icons8-nestjs-48.png';
import kotlin from '../assets/icons8-kotlin-48.png';
import typeScript from '../assets/icons8-typescript-48 (1).png';
import laravel from '../assets/icons8-laravel-50.png';
import tailwind from '../assets/icons8-tailwind-css-48.png';
import node from '../assets/icons8-node-js-48.png';
import express from '../assets/icons8-express-js-50 (1).png';
import aws from '../assets/icons8-aws-48.png';
import shopify from '../assets/icons8-shopify-48.png';
import bootstrap from '../assets/icons8-bootstrap-48.png';
import css from '../assets/icons8-css-48.png';
import dart from '../assets/icons8-dart-48.png';
import figma from '../assets/icons8-figma-48.png';
import firebase from '../assets/icons8-firebase-48.png';
import flutter from '../assets/icons8-flutter-48.png';
import git from '../assets/icons8-git-48.png';
import gitHub from '../assets/icons8-github-48.png';
import gitLab from '../assets/icons8-gitlab-48.png';
import html from '../assets/icons8-html-48.png';
import mongo from '../assets/icons8-mongodb-48.png';
import mySql from '../assets/icons8-mysql-48.png';
import php from '../assets/icons8-php-48.png';
import postman from '../assets/icons8-postman-inc-48.png';
import vite from '../assets/icons8-vite-48.png';
import wordpress from '../assets/icons8-wordpress-48.png';

const TechStack = () => {
  const LanguageStacks = [
    { icon: <img src={javaIcon} alt="Java" />, key: 'java' },
    { icon: <img src={kotlin} alt="Kotlin" />, key: 'kotlin' },
    { icon: <img src={jsIcon} alt="JavaScript" />, key: 'javascript' },
    { icon: <img src={typeScript} alt="TypeScript" />, key: 'typescript' },
    { icon: <img src={dart} alt="Dart" />, key: 'dart' },
    { icon: <img src={php} alt="PHP" />, key: 'php' },
    { icon: <img src={mongo} alt="MongoDB" />, key: 'mongo' },
    { icon: <img src={mySql} alt="MySQL" />, key: 'mysql' },
    { icon: <img src={html} alt="HTML" />, key: 'html' },
    { icon: <img src={css} alt="CSS" />, key: 'css' },
  ];

  const frameworkStacks = [
    { icon: <img src={node} alt="Node.js" />, key: 'node' },
    { icon: <img src={express} alt="Express.js" />, key: 'express' },
    { icon: <img src={react} alt="React" />, key: 'react' },
    { icon: <img src={reactNativeIcon} alt="React Native" />, key: 'reactnative' },
    { icon: <img src={angular} alt="Angular" />, key: 'angular' },
    { icon: <img src={next} alt="Next.js" />, key: 'next' },
    { icon: <img src={vite} alt="Vite" />, key: 'vite' },
    { icon: <img src={laravel} alt="Laravel" />, key: 'laravel' },
    { icon: <img src={tailwind} alt="Tailwind CSS" />, key: 'tailwind' },
    { icon: <img src={bootstrap} alt="Bootstrap" />, key: 'bootstrap' },
    { icon: <img src={flutter} alt="Flutter" />, key: 'flutter' },
  ];

  const otherStacks = [
    { icon: <img src={aws} alt="AWS" />, key: 'aws' },
    { icon: <img src={git} alt="Git" />, key: 'git' },
    { icon: <img src={gitHub} alt="GitHub" />, key: 'github' },
    { icon: <img src={gitLab} alt="GitLab" />, key: 'gitlab' },
    { icon: <img src={postman} alt="Postman" />, key: 'postman' },
    { icon: <img src={firebase} alt="Firebase" />, key: 'firebase' },
    { icon: <img src={wordpress} alt="WordPress" />, key: 'wordpress' },
    { icon: <img src={figma} alt="Figma" />, key: 'figma' },
    { icon: <img src={shopify} alt="Shopify" />, key: 'shopify' },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black"
      aria-label="Technical Skills Section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">
              Skills
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I leverage to build innovative solutions
          </p>
        </div>

        <div className="space-y-6">
          {/* Frontend Row */}
          <div className="overflow-hidden">
            <div
              className="bg-gradient-to-br from-gray-100 to-gray-300 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group flex items-center space-x-6 animate-infinite-scroll"
              role="region"
              aria-label="Frontend Technologies"
            >
              {/* Duplication 5 times creates seamless loop: icons cycle through 5 rounds before restarting */}
              {[...LanguageStacks, ...LanguageStacks, ...LanguageStacks, ...LanguageStacks, ...LanguageStacks].map((tech, index) => (
                <div
                  key={`frontend-${tech.key}-${index}`}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  aria-label={tech.icon.props.alt}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Backend/DevOps Row */}
          <div className="overflow-hidden">
            <div
              className="bg-gradient-to-br from-gray-100 to-gray-300 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group flex items-center space-x-6 animate-infinite-scroll"
              role="region"
              aria-label="Backend and DevOps Technologies"
            >
              {/* Duplication 5 times creates seamless loop: icons cycle through 5 rounds before restarting */}
              {[...frameworkStacks, ...frameworkStacks, ...frameworkStacks, ...frameworkStacks, ...frameworkStacks].map((tech, index) => (
                <div
                  key={`backend-${tech.key}-${index}`}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  aria-label={tech.icon.props.alt}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Database/Misc Row */}
          <div className="overflow-hidden">
            <div
              className="bg-gradient-to-br from-gray-100 to-gray-300 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group flex items-center space-x-6 animate-infinite-scroll"
              role="region"
              aria-label="Database and Miscellaneous Technologies"
            >
              {/* Duplication 5 times creates seamless loop: icons cycle through 5 rounds before restarting */}
              {[...otherStacks, ...otherStacks, ...otherStacks, ...otherStacks, ...otherStacks].map((tech, index) => (
                <div
                  key={`database-${tech.key}-${index}`}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  aria-label={tech.icon.props.alt}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --scroll-duration: 30s;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }

        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll var(--scroll-duration) linear infinite;
          will-change: transform;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;