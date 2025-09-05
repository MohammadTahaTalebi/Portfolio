'use client';

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiTelegram } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FiGithub size={24} />,
      href: "https://github.com/MohammadTahaTalebi",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: <FiLinkedin size={24} />,
      href: "https://linkedin.com/in/tahatalebi",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <SiTelegram size={24} />,
      href: "https://t.me/MohammadTahaTalebi",
      label: "Telegram",
      color: "hover:text-sky-400",
    },
    {
      icon: <FiMail size={24} />,
      href: "mailto:MohammadTahaTalebi1234@gmail.com",
      label: "Email",
      color: "hover:text-orange-400",
    },
  ];

  return (
    <footer className="py-8 px-4 bg-gray-900/80 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex justify-center md:justify-start gap-5">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl text-gray-400 transition-all duration-300 ${item.color} hover:scale-110 group relative`}
              aria-label={item.label}
            >
              {item.icon}
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="text-gray-400 text-sm flex text-center md:text-right">
          © 2025 <p className="ml-0.5 text-gray-300 font-semibold">TahaTalebi</p>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
