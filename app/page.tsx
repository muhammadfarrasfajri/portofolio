"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  // 1. STATE & DATA PROYEK (Harus diletakkan di dalam fungsi Home, sebelum return)
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    image: string;
    url?: string;
    shortDesc: string;
    fullDesc: string;
    tech: string[];
    highlights: string[];
  } | null>(null);

  const projectData = [
    {
      title: "Koperasi Gerakan Ekonomi Rakyat Indonesia",
      image: "/projects/koperasi.jpg",
      url: "https://gerai.org/",
      shortDesc:
        "Designed and developed the entire backend infrastructure for a scalable, e-commerce and digital cooperative platform.",
      fullDesc:
        "Koperasi Gerai is a comprehensive e-commerce and digital cooperative platform designed to provide a seamless shopping and transaction experience similar to industry leaders like Shopee. I took full ownership of the backend development—from designing a robust database architecture from scratch to building the core APIs. The system is engineered to securely process high-volume financial transactions, manage user data efficiently, and automate real-time notifications.",
      tech: [
        "Go",
        "Gin Framework",
        "REST API",
        "CI/CD",
        "Gorm",
        "Next.js",
        "MySQL",
        "Firebase",
        "Notification Web",
      ],
      highlights: [
        "Architected the complete database structure from scratch to accurately record and manage complex multi-step financial transactions.",
        "Engineered the entire backend architecture to support e-commerce functionalities, ensuring high performance and system reliability.",
        "Implemented a highly secure user authentication and authorization system to protect member data and privacy.",
        "Developed efficient data processing logic to handle dynamic product filtering, seamless profile updates, and fast information retrieval.",
        "Integrated a real-time push notification system to provide instant alerts for administrative actions and transaction updates.",
        "Built a reliable file processing feature to handle manual payment proofs and deposit verifications securely.",
      ],
    },
    {
      title: "Filantropi",
      image: "/projects/filantropi.jpg",
      url: "https://filantropi.net/",
      shortDesc:
        "Engineered a crowdfunding backend supporting both traditional donations and wakaf via cryptocurrency.",
      fullDesc:
        "Filantropi is a next-generation crowdfunding and philanthropic platform designed to bridge traditional charitable giving with the future of decentralized finance. Inspired by platforms like KitaBisa, I built the entire backend infrastructure to support not only standard donations but also long-term wakaf (endowments). A major differentiator of this system is its seamless integration with cryptocurrency, utilizing cryptographic wallet identities to ensure highly secure, transparent, and automated fund distributions for various educational and commercial initiatives.",
      tech: [
        "Go",
        "Gin Framework",
        "Crypto",
        "Alchemy",
        "REST API",
        "CI/CD",
        "Gorm",
        "Next.js",
        "Firebase",
        "MySQL",
        "System Architecture",
      ],
      highlights: [
        "Architected a comprehensive crowdfunding backend capable of processing both traditional fiat contributions and decentralized cryptocurrency transactions.",
        "Pioneered a modern, password-less authentication system utilizing cryptographic public wallet keys to maximize user security and anonymity.",
        "Designed a precise, automated asset allocation pipeline that seamlessly routes split-percentage funds to commercial ventures, digital education programs, and profit-sharing returns.",
        "Engineered a highly reliable transaction processing engine that guarantees 100% data integrity and automatic fail-safes during complex, multi-step fund transfers.",
        "Developed robust data processing algorithms to generate transparent donor analytics and real-time distribution reporting for stakeholders.",
      ],
    },
    {
      title: "Kemas Foundation",
      image: "/projects/kemas.jpg",
      url: "https://www.kemasfoundation.org/",
      shortDesc:
        "Integrated organizational management platform designed to streamline activity reporting and member attendance tracking.",
      fullDesc:
        "The Kemas Foundation Portal is a centralized management system engineered to optimize the foundation's operational workflows. It provides a robust infrastructure for documenting field activities, managing member participation, and generating real-time organizational reports. Built to enhance administrative efficiency, the platform automates attendance tracking and digitizes activity logs, ensuring absolute transparency and seamless coordination across all foundation events.",
      tech: [
        "Go",
        "Gin Framework",
        "MySQL",
        "REST API",
        "Next.js",
        "CI/CD",
        "Firebase",
        "System Architecture",
      ],
      highlights: [
        "Engineered a seamless activity logging pipeline to securely document, manage, and showcase foundation events in real-time.",
        "Developed an automated member attendance tracking system, ensuring precise participation records for every activity.",
        "Architected a Role-Based Access Control (RBAC) structure to securely separate administrative dashboards from general member access.",
        "Optimized data aggregation pipelines to generate instant analytics on member engagement and the foundation's overall impact.",
        "Designed scalable database schemas capable of handling continuous event logging and growing member directories without performance drops.",
      ],
    },
    {
      title: "Filantropi Admin",
      image: "/projects/filantropi-admin.jpg",
      shortDesc:
        "Engineered a secure operations portal to monitor hybrid fiat-crypto transactions and configure asset distributions.",
      fullDesc:
        "The Filantropi Backoffice is a comprehensive administrative dashboard designed as the central command center for the decentralized crowdfunding ecosystem. It empowers platform administrators to monitor real-time fiat and cryptocurrency flows, manage campaign approvals, and dynamically configure percentage-based asset allocations for wakaf and donations. Built with strict Role-Based Access Control (RBAC), the portal ensures total financial transparency, data integrity, and operational security.",
      tech: [
        "Go",
        "Gin Framework",
        "MySQL",
        "REST API",
        "CI/CD",
        "Firebase",
        "Data Analytics",
      ],
      highlights: [
        "Developed dynamic configuration modules allowing admins to control and adjust multi-tiered, percentage-based fund allocation pipelines.",
        "Engineered a unified monitoring system to track dual-payment streams (fiat and cryptocurrency) in real-time.",
        "Implemented secure administrative approval workflows for evaluating, verifying, and publishing new commercial and educational initiatives.",
        "Optimized complex SQL aggregations to generate high-performance, transparent financial reports and donor analytics without slowing down the main database.",
        "Architected strict Role-Based Access Control (RBAC) using JWT to safeguard sensitive donor data and financial operations from unauthorized internal access.",
      ],
    },
    {
      title: "Koperasi Gerakan Ekonomi Rakyat Indonesia Admin",
      image: "/projects/gerai-admin.jpg",
      shortDesc:
        "Developed a centralized administrative dashboard to process manage cooperative members",
      fullDesc:
        "The Koperasi Gerai Admin Portal serves as the operational backbone of the cooperative's digital e-commerce ecosystem. Engineered to streamline complex backend workflows, it provides staff with a highly secure environment to verify manual payment proofs, manage the member directory, and monitor high-concurrency financial activities. The system integrates directly with Firebase Cloud Messaging (FCM) to trigger automated, real-time push notifications, ensuring seamless status updates between the cooperative and its members.",
      tech: [
        "Go",
        "Gin Framework",
        "MySQL",
        "REST API",
        "CI/CD",
        "Firebase",
        "Data Analytics",
      ],
      highlights: [
        "Engineered a secure financial verification pipeline, allowing administrators to efficiently review and process multi-part file uploads for manual deposit proofs.",
        "Integrated a real-time notification engine using Firebase Cloud Messaging (FCM) to instantly push payment statuses and administrative alerts to users.",
        "Built comprehensive member management modules utilizing dynamic SQL processing to seamlessly handle partial profile updates and complex data filtering.",
        "Developed robust transaction monitoring interfaces capable of tracking high-volume e-commerce activities with lightning-fast query execution.",
        "Implemented strict JWT authentication protocols to safeguard sensitive cooperative financial data and internal operations from unauthorized access.",
      ],
    },
    {
      title: "Monitoring Material Fastmoving PT. Pupuk Sriwidjaja Palembang",
      image: "/projects/material-fastmoving.jpg",
      shortDesc:
        "Developed a centralized inventory dashboard to track fast-moving material at PT Pupuk Sriwidjaja Palembang.",
      fullDesc:
        "During my professional internship at PT Pupuk Sriwidjaja Palembang, I developed a centralized logistics monitoring application designed to track fast-moving material data. Prior to this, tracking high-turnover inventory required significant manual coordination. Built with Laravel and deployed via Google Cloud Console, this system serves as a single source of truth that breaks down data silos, enabling seamless, real-time collaboration across various logistics departments.",
      tech: ["Laravel", "Google Cloud Console", "PHP", "MySQL", "Supply Chain"],
      highlights: [
        "Developed a centralized web dashboard to monitor fast-moving inventory, drastically reducing manual tracking efforts.",
        "Streamlined cross-departmental workflows by providing real-time data visibility for logistics and operational teams.",
        "Configured and deployed the application infrastructure utilizing Google Cloud Console to ensure high availability and reliability.",
        "Optimized data presentation to help supply chain stakeholders make faster, data-driven decisions regarding material stock levels.",
      ],
    },
    {
      title: "BLE Lecturer Presence Detector",
      image: "/projects/laporan-akhir.jpg",
      shortDesc:
        "IoT system using ESP32-C3 and Bluetooth Low Energy (BLE) to automate lecturer attendance tracking.",
      fullDesc:
        "For my final academic project at Politeknik Negeri Sriwijaya, I designed and developed a comprehensive IoT-based tracking system to modernize campus administration. The system utilizes ESP32-C3 microcontrollers to automatically detect the presence of lecturers via Bluetooth Low Energy (BLE) signals. Written in C++, the hardware layer processes the signals, displays on-site status via LCDs, and transmits telemetry data in real-time using MQTT protocols to a centralized Laravel web dashboard, effectively eliminating manual attendance logs.",
      tech: ["Laravel", "IoT", "MQTT", "C++", "ESP32", "BLE"],
      highlights: [
        "Programmed ESP32-C3 microcontrollers in C++ to continuously scan and accurately identify registered BLE devices in the vicinity.",
        "Implemented MQTT messaging protocols to guarantee lightweight, low-latency, and real-time data transmission between physical hardware and the cloud server.",
        "Developed a robust Laravel-based administrative web dashboard to aggregate incoming telemetry data and generate comprehensive attendance reports.",
        "Integrated hardware LCD components to provide immediate, physical on-site visual feedback for the detected attendance status.",
        "Successfully bridged the gap between low-level embedded electronics and high-level web architecture to deliver a fully automated smart-campus solution.",
      ],
    },
    {
      title: "MERN Stack Note Manager",
      image: "/projects/simple-note.jpg",
      shortDesc:
        "A full-stack note management built with the MERN stack, featuring CRUD operations and Redis-based API rate limiting.",
      fullDesc:
        "While it functions as a straightforward note-taking application on the surface, this project demonstrates a solid foundation in modern full-stack JavaScript development. Built entirely on the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a responsive interface for users to create, edit, and manage notes in real-time. The core engineering highlight is the integration of Redis to enforce API rate limiting, effectively protecting the backend from spam requests and ensuring optimal server performance.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis"],
      highlights: [
        "Developed a highly responsive and interactive frontend utilizing React.js for seamless note management.",
        "Engineered a robust RESTful API with Node.js and Express.js to reliably handle CRUD (Create, Read, Update, Delete) operations.",
        "Integrated MongoDB to handle flexible, document-based data storage for user notes.",
        "Implemented an API rate-limiting mechanism using Redis to prevent endpoint abuse and protect backend resources from malicious spam.",
        "Demonstrated end-to-end full-stack capabilities by connecting a NoSQL database, a runtime backend, and a modern frontend component library.",
      ],
    },
    {
      title: "OHS Pre-Qualification Portal",
      image: "/projects/k3-kuisioner.jpg",
      shortDesc:
        "Engineered a digital assessment platform to streamline Occupational Health and Safety (OHS) pre-certification audits.",
      fullDesc:
        "The OHS (K3) Pre-Qualification Portal is a compliance and assessment tool designed to digitize the safety certification process. Built entirely with Vanilla PHP, this project demonstrates a strong command of core web fundamentals, bypassing modern frameworks to implement custom routing, raw database queries, and secure session management. The system features a robust multi-user environment, separating administrative oversight from standard user assessments to ensure a streamlined and secure auditing workflow.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "RBAC"],
      highlights: [
        "Digitized the traditional paper-based Occupational Health and Safety (K3) questionnaire into an efficient, automated web platform.",
        "Engineered the entire application using Vanilla PHP, demonstrating a deep understanding of core web mechanics and raw data processing.",
        "Implemented Role-Based Access Control (RBAC) to securely isolate the administrative dashboard from standard user evaluation forms.",
        "Designed a dynamic questionnaire evaluation system that allows users to submit compliance data and admins to review assessment results in real-time.",
        "Built a lightweight and fast architecture without the overhead of heavy backend frameworks.",
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">
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
        <div className="shrink-0 relative">
          <div className="absolute inset-0 bg-linear-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
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
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-white/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-white/10">
            <img
              src="https://cdn.simpleicons.org/nextdotjs/white"
              alt="Next.js"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Next.js</div>
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
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-white/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-white/10">
            <img
              src="https://cdn.simpleicons.org/github/white"
              alt="GitHub"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">GitHub</div>
            <p className="text-xs text-gray-500">Version Control</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#FFCA28]/50 transition-colors flex flex-col items-center text-center group shadow-sm hover:shadow-[#FFCA28]/10">
            <img
              src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=id"
              alt="Firebase"
              className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
            />
            <div className="text-gray-200 font-bold text-lg mb-1">Firebase</div>
            <p className="text-xs text-gray-500">Backend as a Service</p>
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
            Real-world systems I&apos;ve architected and deployed. Click on any
            project to view detailed specifications.
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
                {/* 1. Tambahkan Tag Image di sini */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* 2. Overlay yang muncul saat di-hover (opacity-0 group-hover:opacity-100) */}
                <div className="absolute inset-0 bg-linear-to-tr from-emerald-950/90 to-gray-900/90 flex items-center justify-center text-gray-300 font-mono text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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
            href="https://github.com/muhammadfarrasfajri"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/farrasfajri/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:farrasfajri@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center pb-8 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Muhammad Farras Fajri</p>
      </footer>

      {/* POP-UP MODAL UI (Berada di paling bawah sebelum tag penutup main) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
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

            {/* Bagian Bawah Modal (Tombol Close & Tombol URL) */}
            <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end gap-3 sm:gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Close Details
              </button>

              {/* Tombol akan muncul hanya jika project memiliki data URL */}
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-emerald-900/20"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
