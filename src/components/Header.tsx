'use client';

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["about", "softSkills", "projects", "skills", "experience"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionsDom = document.querySelectorAll("section");
      let current = "about";

      sectionsDom.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-3 flex md:justify-center justify-start items-center">
        <div className="hidden md:flex space-x-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-all duration-300 ${
                activeSection === item
                  ? "text-purple-400 font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-lg border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize py-2 w-full text-left border-b border-border transition-all duration-300 ${
                  activeSection === item
                    ? "text-purple-400 font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
