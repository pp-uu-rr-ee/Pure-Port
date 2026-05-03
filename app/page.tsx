"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMail, IoCall, IoLocation, IoLogoGithub, IoLogoFacebook, IoLogoInstagram, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const projects = [
    { title: "SeeU Bangkok", desc: "An AI-powered travel discovery platform for finding places, planning trips, and exploring Bangkok through an interactive map and chat experience.", category: "Web Development", image: "/Pure-Port/SeeU-BKK.png", link: "https://github.com/pp-uu-rr-ee/SeeU-BKK" },
    { title: "Book Cube", desc: "BookCube is a comprehensive e-book platform and reading library designed to help you discover, track, and enjoy your favorite books seamlessly.", category: "Web Development", image: "/Pure-Port/SeeU-BKK.png", link: "https://github.com/pp-uu-rr-ee/Book-Cube" },
    { title: "IT Inventory", desc: "A full-stack web application designed to help businesses efficiently manage their IT assets, equipment, and inventory.", category: "Web Development", image: "/Pure-Port/IT-Inventory.png", link: "https://github.com/pp-uu-rr-ee/IT-Inventory" },
    { title: "To Do List UI", desc: "An UI design for To-Do List application.", category: "Design", image: "/Pure-Port/to-do-list.png", link: "https://www.figma.com/proto/Mt2ciBBo8Bv7hvF4XQa9rw/ToDoListUI?t=hPy5YUzxb4RtIeur-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-4051&starting-point-node-id=1%3A4051" }
  ];

  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <main className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-6xl w-full p-4 md:p-8 items-stretch justify-center min-h-[80vh] z-10">
      {/* Left Card: Profile & Contact */}
      <div className="relative flex-none w-full md:w-[350px] flex flex-col p-8 md:p-10 items-center text-center bg-slate-800/70 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-3xl overflow-hidden h-fit md:sticky md:top-8 z-20">
        
        {/* Mobile Toggle Button */}
        <button 
          className="absolute top-0 right-0 md:hidden bg-white/5 border-b border-l border-white/10 rounded-bl-2xl px-4 py-3 text-xs font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-2 z-30"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          {isContactOpen ? "Hide Contacts" : "Show Contacts"}
          {isContactOpen ? <IoChevronUp /> : <IoChevronDown />}
        </button>

        <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mb-6 md:mb-8 border-4 border-white/10 shadow-xl relative group">
          <Image
            src="/Pure-Port/pure.jpg"
            alt="Profile Photo"
            width={200}
            height={200}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Bhuvadej Anankusri</h1>
        <h2 className="text-sm md:text-lg text-accent mb-6 md:mb-8 font-medium tracking-wide">Full-Stack Developer</h2>
        
        <div className={`w-full flex flex-col transition-all duration-500 ease-in-out origin-top overflow-hidden ${isContactOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[600px] md:opacity-100'}`}>
          <div className="w-full flex flex-col gap-4 border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl transition-colors duration-200 hover:bg-white/10">
              <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl shrink-0"><IoMail /></div>
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Email</span>
                <span className="text-sm font-medium text-slate-100 truncate w-full text-left">bhuvd.anks@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl transition-colors duration-200 hover:bg-white/10">
              <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl shrink-0"><IoCall /></div>
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Phone</span>
                <span className="text-sm font-medium text-slate-100 truncate w-full text-left">+66 96 154 9297</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl transition-colors duration-200 hover:bg-white/10">
              <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl shrink-0"><IoLocation /></div>
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Location</span>
                <span className="text-sm font-medium text-slate-100 truncate w-full text-left">Bangkok, Thailand</span>
              </div>
            </div>
          </div>

        <div className="mt-auto pt-8 flex items-center justify-center gap-4 w-full">
          <a href="https://github.com/pp-uu-rr-ee" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300">
              <IoLogoGithub size={24} />
            </a>
          <a href="https://www.facebook.com/purebhuvadej" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300">
              <IoLogoFacebook size={24} />
            </a>
          <a href="https://www.instagram.com/pp.uu.rr.ee/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300">
              <IoLogoInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Card: Nav & Data */}
      <div className="flex-1 flex flex-col relative bg-slate-800/70 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-3xl overflow-hidden">
        <nav className="flex flex-wrap justify-center md:justify-end p-6 md:p-8 gap-4 md:gap-8">
          {["about", "resume", "portfolio", "contact"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`font-semibold text-base outline-none relative pb-1 capitalize transition-colors duration-200 ${activeTab === tab ? "text-slate-100" : "text-slate-400 hover:text-slate-100"} group`}
            >
              {tab}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${activeTab === tab ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </button>
          ))}
        </nav>

        {activeTab === "about" && (
          <div className="px-6 pb-8 md:px-12 md:pb-12 flex-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-full">About Me</h2>
            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-6">
              Hi, my name is Bhuvadej Anankusri. You can call me Pure. I’m a passionate full-stack developer specializing in building exceptional digital experiences. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-6">
              I have hands-on experience with modern web technologies such as React, Node.js, and RESTful APIs. I’m also familiar with databases like MySQL, and PostgreSQL, and I continuously explore new tools to improve my workflow. My goal is to grow as a full-stack developer by building scalable and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-6">
              When I’m not coding, you’ll find me exploring the outdoors, reading manga, or tinkering with new web technologies.
            </p>
            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-6">
              I believe in the power of the web to connect people and bring ideas to life.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-6 md:mb-8 flex items-center gap-3">What I do</h3>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
              {["Full-Stack Web Development", "AI Integration & Agentic Workflows", "Geospatial & Interactive Mapping Solutions", "Responsive & Mobile-Centric UI/UX"].map((skill) => (
                <span key={skill} className="bg-accent/10 text-accent-hover px-4 py-2 rounded-full text-sm font-medium border border-accent/20">{skill}</span>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-6 md:mb-2 flex items-center gap-3">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Frontend */}
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-white/10 pb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React / Next.js", "TypeScript", "Tailwind CSS", "Mapbox GL JS", "shadcn/ui & Lucide React", "Framer Motion"].map((skill) => (
                    <span key={skill} className="bg-accent/10 text-accent-hover px-3 py-1.5 rounded-full text-xs font-medium border border-accent/20">{skill}</span>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-white/10 pb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js (Express)", "Hono (Bun)", "RESTful APIs", "PostgreSQL / Supabase", "Authentication & Database Design", "AI Integration (RAG / Agent Workflows)", "Python (Django) (prior experience)"].map((skill) => (
                    <span key={skill} className="bg-accent/10 text-accent-hover px-3 py-1.5 rounded-full text-xs font-medium border border-accent/20">{skill}</span>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-white/10 pb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git / GitHub", "Vercel", "Figma", "VS Code", "Drizzle ORM", "Turborepo"].map((skill) => (
                    <span key={skill} className="bg-accent/10 text-accent-hover px-3 py-1.5 rounded-full text-xs font-medium border border-accent/20">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "resume" && (
          <div className="px-6 pb-8 md:px-12 md:pb-12 flex-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-full">Resume</h2>
            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-10">
              A brief overview of my education and experience.
            </p>
            
            {/* Education Timeline */}
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">Education</h3>
            <div className="relative border-l-2 border-white/10 ml-4 pl-8 space-y-10 mb-12">
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600 border-2 border-slate-900 group-hover:bg-accent group-hover:border-accent/30 group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all duration-300"></div>
                <h4 className="text-slate-100 text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-300">Bachelor of Science in Information Technology</h4>
                <p className="text-accent text-sm mb-3 font-medium">King Mongkut's Institute of Technology Ladkrabang<br></br>2023 - 2026</p>
                <p className="text-slate-400 leading-relaxed">
                  Currently studying. Coursework included Data Structures, Algorithms, Web Engineering, and Software Architecture.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600 border-2 border-slate-900 group-hover:bg-accent group-hover:border-accent/30 group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all duration-300"></div>
                <h4 className="text-slate-100 text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-300">High School Diploma</h4>
                <p className="text-accent text-sm mb-3 font-medium">Chulalongkorn University Demonstration Secondary School<br></br>2016 - 2022</p>
                <p className="text-slate-400 leading-relaxed">
                  Focus on Mathematics and Sciences.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">Experience</h3>
            <div className="flex flex-col gap-6">
              <div className="relative group bg-white/5 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-2">
                  <div>
                    <h4 className="text-slate-100 text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">SeeU-BKK</h4>
                    <p className="text-slate-400 text-sm font-medium mt-1">Geospatial Web Application</p>
                  </div>
                  <div className="inline-flex items-center justify-center bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold border border-accent/20 whitespace-nowrap self-start">
                    2025 - 2026
                  </div>
                </div>
                
                <ul className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Built a location-based web platform with interactive maps using Mapbox GL JS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Built full-stack architecture with Next.js, Hono (Bun), and Supabase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Implemented real-time features using Server-Sent Events (SSE)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Designed scalable API structure and database schema</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {["Next.js", "TypeScript", "Hono", "Supabase", "Mapbox GL JS", "Drizzle ORM"].map((tech) => (
                    <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-md text-xs font-medium border border-white/5 group-hover:border-accent/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative group bg-white/5 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-2">
                  <div>
                    <h4 className="text-slate-100 text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">IT-Inventory</h4>
                    <p className="text-slate-400 text-sm font-medium mt-1">Management System / Dashboard</p>
                  </div>
                  <div className="inline-flex items-center justify-center bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold border border-accent/20 whitespace-nowrap self-start">
                    2025 - 2026
                  </div>
                </div>
                
                <ul className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Built a full-stack inventory management system with CRUD operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Designed responsive dashboard UI and structured database system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Implemented REST APIs and backend logic for data handling</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {["Next.js", "Node.js", "Express", "SQLite"].map((tech) => (
                    <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-md text-xs font-medium border border-white/5 group-hover:border-accent/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative group bg-white/5 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-2">
                  <div>
                    <h4 className="text-slate-100 text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">Book-Cube</h4>
                    <p className="text-slate-400 text-sm font-medium mt-1">Online Book Platform</p>
                  </div>
                  <div className="inline-flex items-center justify-center bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold border border-accent/20 whitespace-nowrap self-start">
                    2024
                  </div>
                </div>
                
                <ul className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Developed a web platform for reading and purchasing books</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Implemented user features such as following authors and managing book interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>Designed relational database structure using PostgreSQL</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {["Django", "Django REST Framework", "PostgreSQL", "HTML", "CSS", "JavaScript"].map((tech) => (
                    <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-md text-xs font-medium border border-white/5 group-hover:border-accent/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="px-6 pb-8 md:px-12 md:pb-12 flex-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-full">Portfolio</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-8">
              {["All", "Web Development", "Design"].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-accent text-white" 
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-2xl text-center group cursor-pointer transition-colors hover:bg-white/10 animate-fade-in block">
                  <div className="bg-accent/20 h-32 rounded-xl mb-4 flex items-center justify-center text-accent transition-transform group-hover:scale-[1.02] relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      "Image"
                    )}
                  </div>
                  <h4 className="text-slate-100 mb-2 font-medium">{project.title}</h4>
                  <p className="text-slate-400 text-sm">{project.desc}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="px-6 pb-8 md:px-12 md:pb-12 flex-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-full">Contact</h2>
            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-8">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const subject = formData.get('subject');
                const message = formData.get('message');
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bhuvd.anks@gmail.com&su=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
                window.open(gmailUrl, '_blank');
              }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Your Name or Company" />
                </div>
                <div className="flex-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Subject" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="self-start bg-accent hover:bg-accent-hover text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 flex items-center gap-2">
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
