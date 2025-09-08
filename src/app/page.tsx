import Experience from '@/components/Expriences';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiMessageCircle,
  FiRefreshCcw,
  FiUsers,
  FiZap
} from 'react-icons/fi';
import {
  SiAuth0,
  SiAxios,
  SiClerk,
  SiDocker,
  SiExpress,
  SiFastify,
  SiFigma,
  SiFormik,
  SiGithub,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTrello,
  SiTypescript
} from 'react-icons/si';
import { TbBrandThreejs } from "react-icons/tb";

export default function Home() {


  const projects = [
    {
      id: 1,
      title: "Piza App",
      description:
        "A full-stack real estate app where users can browse and rent houses. Integrated with maps, authentication, and advanced search features.",
      technologies: [
        SiNextdotjs,
        SiTypescript,
        SiPrisma,
        SiTailwindcss,
        SiReact,
        SiAxios,
        SiAuth0,
        TbBrandThreejs,
        SiFormik,
      ],
      image: "/image/piza.jpg",
      links: {
        github: "https://github.com/Navidreza80/Pisa.git",
        live: "https://pizarealestateapp.netlify.app/en",
      },
    },
    {
      id: 2,
      title: "TradingAI Platform",
      description:
        "A full-stack platform providing demo trading, AI-powered analysis, and educational modules for learning trading strategies.",
      technologies: [
        SiNextdotjs,
        SiTypescript,
        SiPrisma,
        SiTailwindcss,
        SiReact,
        SiAxios,
        SiClerk,
        SiSocketdotio,
        SiShadcnui,
      ],
      image: "/image/TradingAI.jpg",
      links: {
        github: "https://github.com/Navidreza80/TradingAI.git",
        live: "https://tradingaiapp.netlify.app/",
      },
    },
  ];


  return (
    <div className="min-h-screen lg:pt-10 md:pt-20 pt-30 bg-gradient-to-br from-[#010024] via-purple-950/20 to-[#020036] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Soft Skills Section */}
      <section id="softSkills" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">
              &lt;Soft <span className="text-blue-400">Skills /&gt;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Creative Problem Solving",
                description:
                  "Analytical thinking combined with innovative approaches to tackle complex challenges and deliver effective solutions",
                icon: <FiZap className="w-10 h-10 text-purple-400" />,
                gradient: "from-purple-600/10 to-blue-600/10",
                border: "hover:border-purple-500/50",
                color: "text-purple-300",
              },
              {
                title: "Team Collaboration",
                description:
                  "Effective teamwork in agile environments, fostering positive relationships and achieving shared objectives",
                icon: <FiUsers className="w-10 h-10 text-blue-400" />,
                gradient: "from-blue-600/10 to-cyan-600/10",
                border: "hover:border-blue-500/50",
                color: "text-blue-300",
              },
              {
                title: "Effective Communication",
                description:
                  "Clear articulation of ideas, active listening, and adapting communication style to different audiences",
                icon: <FiMessageCircle className="w-10 h-10 text-orange-400" />,
                gradient: "from-orange-600/10 to-red-600/10",
                border: "hover:border-orange-500/50",
                color: "text-orange-300",
              },
              {
                title: "Quick Adaptation",
                description:
                  "Flexibility in learning new technologies and adapting to evolving project requirements and environments",
                icon: <FiRefreshCcw className="w-10 h-10 text-green-400" />,
                gradient: "from-green-600/10 to-emerald-600/10",
                border: "hover:border-green-500/50",
                color: "text-green-300",
              },
            ].map((skill, index) => (
              <div key={index} className={`group relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 ${skill.border} transition-all duration-500 transform hover:-translate-y-2`}>
                <div className={`absolute -inset-2 bg-gradient-to-br ${skill.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`mb-6 p-4 bg-gradient-to-br ${skill.gradient} rounded-2xl w-fit mx-auto shadow-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${skill.color} text-center`}>{skill.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            &lt;My <span className="text-orange-400">Projects /&gt;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}> {/* 16:9 ratio */}
                  <Image
                    src={project.image || "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech icons */}
                  <div className="flex gap-3 mb-4">
                    {project.technologies.map((Icon, idx) => (
                      <Icon key={`${project.id}-tech-${idx}`} className="text-2xl text-purple-400 hover:text-purple-300 transition-colors" />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-end gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center place-items-center'>
            <a
              href="https://github.com/MohammadTahaTalebi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mx-auto mt-10 gap-2 px-6 py-2 rounded-lg 
                 bg-gradient-to-r from-red-500/40 to-purple-500/40 
                 text-white border border-red-500/30 
                 hover:from-red-500/30 hover:to-purple-500/30 
                 transition-all duration-300 cursor-pointer"
            >
              See more on GitHub <FiGithub className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 ">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            &lt;Technical <span className="text-blue-400">Skills /&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <FiLayers className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <SiNextdotjs size={28} className="text-white" />, name: 'Next.js' },
                  { icon: <SiReact size={28} className="text-blue-400" />, name: 'React.js' },
                  { icon: <SiTypescript size={28} className="text-blue-500" />, name: 'TypeScript' },
                  { icon: <SiTailwindcss size={28} className="text-cyan-400" />, name: 'Tailwind CSS' },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <FiDatabase className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold">Backend Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <SiNodedotjs size={28} className="text-green-500" />, name: 'Node.js' },
                  { icon: <SiExpress size={28} className="text-green-400" />, name: 'Express' },
                  { icon: <SiFastify size={28} className="text-teal-400" />, name: 'Fastify' },
                  { icon: <SiMongodb size={28} className="text-green-500" />, name: 'MongoDB' },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <FiCloud className="text-orange-400" size={24} />
                <h3 className="text-xl font-bold">DevOps & Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <SiDocker size={28} className="text-blue-400" />, name: 'Docker' },
                  { icon: <FiGitBranch size={28} className="text-orange-500" />, name: 'Git' },
                  { icon: <SiJest size={28} className="text-red-400" />, name: 'Jest' },
                  { icon: <FiCpu className="text-purple-400" size={28} />, name: 'WebSockets' },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <FiCode className="text-red-400" size={24} />
                <h3 className="text-xl font-bold">Other Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <SiGithub size={28} className="text-purple-400" />, name: 'GitHub' },
                  { icon: <SiPostman size={28} className="text-orange-400" />, name: 'Postman' },
                  { icon: <SiTrello size={28} className="text-blue-400" />, name: 'Trello' },
                  { icon: <SiFigma size={28} className="text-pink-400" />, name: 'Figma' },

                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <Experience />
    </div>
  );
}