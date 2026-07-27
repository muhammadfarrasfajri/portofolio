"use client"; // Wajib ada di baris paling atas karena kita pakai useState

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  // 1. STATE & DATA PROYEK (Harus diletakkan di dalam fungsi Home, sebelum return)
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    image: string;
    shortDesc: string;
    fullDesc: string;
    tech: string[];
    highlights: string[];
  } | null>(null);

  const projectData = [
    {
      title: "Koperasi Gerai Backend",
      image: "/projects/koperasi.jpg",
      shortDesc:
        "Architected the backend engine for a digital cooperative platform with secure authentication & push alerts.",
      fullDesc:
        "Koperasi Gerai is a comprehensive digital cooperative system designed to handle high-concurrency financial transactions, secure member management, and automated notification pipelines. Built using Go and Raw SQL to maximize query performance without ORM overhead.",
      tech: ["Go", "Gin Framework", "Raw SQL", "JWT", "FCM", "Nginx"],
      highlights: [
        "Implemented secure JWT access & refresh token rotation stored in HTTP-Only cookies.",
        "Designed multi-table transaction accounting schemas with soft-delete capabilities.",
        "Integrated Firebase Cloud Messaging (FCM) for instant administrative alerts.",
        "Handled dynamic SQL query building for partial profile updates and dynamic filtering.",
        "Implemented multi-part file uploads for manual deposit verification.",
      ],
    },
    {
      title: "Philanthropy Platform Infrastructure",
      image: "/projects/philanthropy.jpg",
      shortDesc:
        "Designed a decentralized charitable asset distribution pipeline with atomic database transactions.",
      fullDesc:
        "A modern philanthropy infrastructure built to ensure transparency and atomic balance distributions across various commercial and digital education initiatives. Utilizes cryptographic identity verification for enhanced user security.",
      tech: ["Go", "Crypto Wallets", "Unit of Work", "MySQL", "REST API"],
      highlights: [
        "Integrated cryptographic public wallet keys for identity verification instead of traditional passwords.",
        "Implemented Unit of Work pattern ensuring atomic database transaction rollbacks.",
        "Engineered multi-tiered profit-sharing and percentage-based asset allocation pipelines.",
        "Optimized dynamic query processing for donor analytics and distribution reporting.",
      ],
    },
  ];

  // 2. RETURN UI (Hanya boleh ada satu return utama yang membungkus semua halaman)
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans selection:bg-emerald-500 selection:text-white pb-10">
      {/* NAVBAR SECTION */}
      <nav className="w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md fixed top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl tracking-tight">
          Farras<span className="text-emerald-500">.</span>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#tech-stack"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-sm font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO / ABOUT SECTION */}
      <section
        id="about"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-10"
      >
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Muhammad Farras Fajri
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed text-justify md:text-left">
            Computer Engineering graduate from Sriwijaya State Polytechnic with
            around 2 years of experience as a Software Developer, specializing
            in building scalable web applications. Proven ability to collaborate
            effectively in cross-functional team environments, backed by strong
            communication and problem-solving skills. Proficient in React.js,
            Golang, Tailwind CSS, Laravel, Express.js, MySQL, Git, and Postman.
            A highly adaptable professional with a growth mindset, currently
            exploring foundational DevOps practices and always eager to stay
            up-to-date with the latest technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#projects"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-emerald-900/20 text-center"
            >
              View My Work
            </Link>
            <Link
              href="https://github.com/farrasfajri"
              target="_blank"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              GitHub Profile
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl flex items-center justify-center z-10">
            <Image
              src="/farras.jpeg"
              alt="Muhammad Farras Fajri Profile Picture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
              priority
            />
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section
        id="tech-stack"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-gray-800/50"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build scalable web applications and
            high-performance systems.
          </p>
        </div>
        {/* eslint-disable @next/next/no-img-element */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#00ADD8]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#00ADD8]/10">
            <img
              src="https://cdn.simpleicons.org/go/00ADD8"
              alt="Golang"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Golang</div>
            <p className="text-xs text-gray-500">Backend API</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-white/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-white/10">
            <img
              src="https://cdn.simpleicons.org/express/ffffff"
              alt="Express.js"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">
              Express.js
            </div>
            <p className="text-xs text-gray-500">Node.js Framework</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#FF2D20]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#FF2D20]/10">
            <img
              src="https://cdn.simpleicons.org/laravel/FF2D20"
              alt="Laravel"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Laravel</div>
            <p className="text-xs text-gray-500">PHP Framework</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#61DAFB]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#61DAFB]/10">
            <img
              src="https://cdn.simpleicons.org/react/61DAFB"
              alt="React.js"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">React.js</div>
            <p className="text-xs text-gray-500">Frontend UI</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#06B6D4]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#06B6D4]/10">
            <img
              src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
              alt="Tailwind CSS"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">
              Tailwind CSS
            </div>
            <p className="text-xs text-gray-500">UI Styling</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#4479A1]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#4479A1]/10">
            <img
              src="https://cdn.simpleicons.org/mysql/4479A1"
              alt="Postgresql"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">
              postgreSQL
            </div>
            <p className="text-xs text-gray-500">Relational DB</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#4479A1]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#4479A1]/10">
            <img
              src="https://cdn.simpleicons.org/postgresql/4479A1"
              alt="MySQL"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">MySQL</div>
            <p className="text-xs text-gray-500">Relational DB</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#F05032]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#F05032]/10">
            <img
              src="https://cdn.simpleicons.org/git/F05032"
              alt="Git"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Git</div>
            <p className="text-xs text-gray-500">Version Control</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#FF6C37]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#FF6C37]/10">
            <img
              src="https://cdn.simpleicons.org/postman/FF6C37"
              alt="Postman"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Postman</div>
            <p className="text-xs text-gray-500">API Testing</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#2496ED]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#2496ED]/10">
            <img
              src="https://cdn.simpleicons.org/docker/2496ED"
              alt="Docker"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Docker</div>
            <p className="text-xs text-gray-500">DevOps / Container</p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION WITH MODAL (Hanya butuh satu section projects ini) */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-gray-800/50"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world backend systems I&apos;ve architected and deployed. Click
            on any project to view detailed specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer group shadow-lg flex flex-col"
            >
              <div className="relative w-full h-48 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 to-gray-900 flex items-center justify-center text-gray-600 font-mono text-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Click to view details</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    {project.title}
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-800 text-emerald-400 text-xs rounded-md border border-emerald-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP & EXPERIENCE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-gray-800/50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Leadership & Experience
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Head of Organizational Affairs
              </h4>
              <p className="text-sm text-gray-400">
                Himpunan Mahasiswa Jurusan Teknik Komputer
              </p>
            </div>
            <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full mt-3 sm:mt-0">
              Jan 2024 - Jan 2025
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Liaison Officer
              </h4>
              <p className="text-sm text-gray-400">
                Multimedia and Computer Festival
              </p>
            </div>
            <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full mt-3 sm:mt-0">
              Aug 2023 - Nov 2023
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-800/50 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-8">
          Currently open for new opportunities. Whether you have a question
          about backend architecture, database optimizations, or just want to
          say hi, feel free to drop a message!
        </p>
        <form className="max-w-md mx-auto text-left space-y-4 mb-10">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              placeholder="Hi Farras, I'd like to talk about..."
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-emerald-900/20"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 border-t border-gray-800 pt-8">
          <Link
            href="https://github.com/farrasfajri"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:emailmu@domain.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center pb-8 text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} Muhammad Farras Fajri. Built with Next.js
          & Tailwind.
        </p>
      </footer>

      {/* POP-UP MODAL UI (Berada di paling bawah sebelum tag penutup main) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-white mb-2 pr-8">
              {selectedProject.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-md border border-emerald-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {selectedProject.fullDesc}
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-emerald-400 mt-0.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
