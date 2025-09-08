'use client';

import {
    FiCode,
    FiExternalLink,
    FiGithub,
    FiLinkedin,
    FiMail
} from 'react-icons/fi';
import {
    SiTelegram
} from 'react-icons/si';
import '@/app/globals.css'

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center md:px-15 px-6 py-16 bg-gradient-to-br overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row lg:gap-16 gap-5 items-center">

                    {/* Left Side: Intro */}
                    <div className="order-1 md:order-1 w-full md:w-1/2 text-center md:mb-0 mb-25 md:text-left relative
                animate-fadeInUp">
                        <div className="absolute -top-10 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl z-0 animate-pulse-slow"></div>
                        <div className="relative z-10">
                            <h1 className="text-7xl md:text-6xl lg:text-8xl font-bold leading-tight mb-2 animate-textGradient bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Taha Talebi
                            </h1>

                            {/* Intro Sentence */}
                            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fadeIn delay-200">
                                I am a <span className="text-purple-400 font-semibold">Fullstack Developer</span>
                            </p>

                            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 animate-fadeIn delay-400">
                                I build{" "}
                                <span className="text-purple-400 font-semibold">
                                    scalable applications
                                </span>{" "}
                                with modern technologies, focusing on{" "}
                                <span className="text-blue-400 font-semibold">clean code</span> and{" "}
                                <span className="text-orange-400 font-semibold">
                                    exceptional user experiences
                                </span>.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-12 animate-fadeIn delay-600">
                                <button
                                    onClick={() => scrollToSection("projects")}
                                    className="px-8 py-4 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105 group"
                                >
                                    <span>View Projects</span>
                                    <FiExternalLink
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                                <button
                                    onClick={() => scrollToSection("experience")}
                                    className="px-8 py-4 cursor-pointer border border-purple-500/40 hover:bg-purple-900/40 rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transform hover:scale-105"
                                >
                                    View Experiences
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center md:justify-start gap-5 animate-fadeIn delay-800">
                                {[
                                    {
                                        icon: <FiGithub size={24} />,
                                        color: "hover:text-purple-400",
                                        label: "GitHub",
                                        href: "https://github.com/MohammadTahaTalebi",
                                    },
                                    {
                                        icon: <FiLinkedin size={24} />,
                                        color: "hover:text-blue-400",
                                        label: "LinkedIn",
                                        href: "https://linkedin.com/in/tahatalebi",
                                    },
                                    {
                                        icon: <SiTelegram size={24} />,
                                        color: "hover:text-sky-400",
                                        label: "Telegram",
                                        href: "https://t.me/MohammadTahaTalebi",
                                    },
                                    {
                                        icon: <FiMail size={24} />,
                                        color: "hover:text-orange-400",
                                        label: "Email",
                                        href: "mailto:MohammadTahaTalebi1234@gmail.com",
                                    },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl text-gray-400 transition-all duration-300 ${item.color} hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group relative`}
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                        <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Right Side: About Me */}
                    <div className="order-2 md:order-2 w-full md:w-1/2">
                        <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/30 shadow-2xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-700 hover:border-purple-500/30">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/20">
                                    <FiCode className="text-purple-400" size={28} />
                                </div>
                                <h2 className="text-3xl font-bold">
                                    About{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                        Me
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
                                <p>
                                    With{" "}
                                    <span className="text-purple-400 font-semibold">
                                        over 4.5 years of professional experience
                                    </span>
                                    , I specialize in building high-performance, scalable web
                                    applications using cutting-edge technologies.
                                </p>

                                <p>
                                    My expertise spans the full stack with deep knowledge in{" "}
                                    <strong className="text-blue-400">Node.js</strong>,{" "}
                                    <strong className="text-cyan-400">Next.js</strong>,{" "}
                                    <strong className="text-blue-300">TypeScript</strong>, and{" "}
                                    <strong className="text-sky-400">React.js</strong>. I'm dedicated
                                    to creating solutions that are both technically robust and deliver
                                    exceptional user experiences.
                                </p>

                                <p>
                                    I believe in combining{" "}
                                    <span className="text-blue-400 font-medium">
                                        clean code architecture
                                    </span>{" "}
                                    with{" "}
                                    <span className="text-orange-400 font-medium">
                                        modern design principles
                                    </span>{" "}
                                    to build digital products that not only function flawlessly but
                                    also delight users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}