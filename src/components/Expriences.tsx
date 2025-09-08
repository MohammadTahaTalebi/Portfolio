'use client';

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Achievement {
    text: string;
    keywords: string[];
}

interface ExperienceType {
    id: number;
    company: string;
    role: string;
    period: string;
    achievements: Achievement[];
}

const experiences: ExperienceType[] = [
    {
        id: 5,
        company: "Hexorix",
        role: "Full-stack Developer",
        period: "May 2025 - Present",
        achievements: [
            { text: "Developed a high-performance Single Page Application (SPA) with Next.js", keywords: ["Single Page Application", "Next.js"] },
            { text: "Built an Express.js backend with secure authentication", keywords: ["Express.js backend", "secure authentication"] },
            { text: "Created a reusable UI component library, improving modularity", keywords: ["UI component library", "modularity"] },
            { text: "Integrated state management and optimized rendering", keywords: ["state management", "rendering"] },
            { text: "Leveraged Prisma ORM for database operations", keywords: ["Prisma ORM", "database operations"] },
            { text: "Maintained clean, documented code for smooth handovers", keywords: ["clean code", "documented code"] },
            { text: "Collaborated within Agile/Scrum workflows", keywords: ["Agile", "Scrum workflows"] }
        ]
    },
    {
        id: 4,
        company: "Sepehr Academy",
        role: "Full-stack Developer",
        period: "Apr 2023 - Jan 2025",
        achievements: [
            { text: "Spearheaded SPA development with Next.js and multilingual support", keywords: ["SPA development", "Next.js", "multilingual support"] },
            { text: "Drove frontend improvements, boosting team productivity by 25%", keywords: ["frontend improvements", "team productivity"] },
            { text: "Integrated over 200 RESTful APIs for scalable data flow", keywords: ["RESTful APIs", "scalable data flow"] },
            { text: "Delivered fully responsive interface, increasing user retention", keywords: ["responsive interface", "user retention"] },
            { text: "Streamlined admin dashboard using Vuexy template", keywords: ["admin dashboard", "Vuexy template"] }
        ]
    },
    {
        id: 3,
        company: "TradingAI -Startup",
        role: "Co-founder",
        period: "Sep 2022 - Mar 2023",
        achievements: [
            { text: "Developed full-stack platform with Next.js and Prisma", keywords: ["Next.js", "Prisma"] },
            { text: "Designed interactive dashboards and user interfaces", keywords: ["dashboards", "user interfaces"] },
            { text: "Implemented real-time data and API integration", keywords: ["real-time data", "API integration"] },
            { text: "Integrated AI analysis tools for automated insights", keywords: ["AI analysis tools", "automated insights"] },
            { text: "Developed educational modules and quizzes", keywords: ["educational modules", "quizzes"] },
            { text: "Built blog features and content management", keywords: ["blog features", "content management"] },
            { text: "Optimized database queries for efficiency", keywords: ["database queries", "efficiency"] },
            { text: "Managed end-to-end workflow and problem-solving", keywords: ["end-to-end workflow", "problem-solving"] }
        ]
    },
    {
        id: 2,
        company: "Apanco",
        role: "Frontend Developer",
        period: "Aug 2021 - Aug 2022",
        achievements: [
            { text: "Developed modern SPA using React.js and TypeScript", keywords: ["SPA", "React.js", "TypeScript"] },
            { text: "Built fully responsive UI across multiple devices", keywords: ["responsive UI"] },
            { text: "Collaborated with cross-functional teams for feature improvements", keywords: ["cross-functional teams", "feature improvements"] },
            { text: "Refined UI/UX components with design team", keywords: ["UI/UX components"] },
            { text: "Introduced process improvements to boost delivery speed", keywords: ["process improvements", "delivery speed"] }
        ]
    },
    {
        id: 1,
        company: "Freelance",
        role: "Frontend Developer",
        period: "Apr 2021 - Jul 2021",
        achievements: [
            { text: "Built responsive UI components using React.js, HTML, and CSS", keywords: ["responsive UI components", "React.js", "HTML", "CSS"] },
            { text: "Applied component-based architecture for maintainability", keywords: ["component-based architecture", "maintainability"] },
            { text: "Conducted UI/UX improvements via testing and feedback", keywords: ["UI/UX improvements", "testing", "feedback"] },
            { text: "Successfully managed projects independently, ensuring timely delivery", keywords: ["managed projects", "timely delivery"] },
            { text: "Implemented interactive features and subtle animations", keywords: ["interactive features", "animations"] },
            { text: "Optimized front-end performance and responsiveness", keywords: ["front-end performance", "responsiveness"] }
        ]
    }
];

const highlightKeywords = (text: string, keywords: string[], parentId?: string) => {
    let parts: React.ReactNode[] = [text];
    keywords.forEach((kw) => {
        parts = parts.flatMap((part) => {
            if (typeof part === "string") {
                const split = part.split(new RegExp(`(${kw})`, "gi"));
                return split.map((s, idx) =>
                    s.toLowerCase() === kw.toLowerCase() ? (
                        <strong key={`${parentId ?? "text"}-${kw}-${idx}`} className="text-red-400">{s}</strong>
                    ) : (
                        s
                    )
                );
            }
            return part;
        });
    });
    return parts;
};

export default function Experience() {
    const [showAll, setShowAll] = useState(false);
    const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

    return (
        <section id="experience" className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
                    &lt;Work <span className="text-red-400">Experience /&gt;</span>
                </h2>

                <div className="space-y-6 sm:space-y-8">
                    {visibleExperiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-red-500/30 transition-all duration-500"
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{exp.company}</h3>
                            <div className="text-sm sm:text-base md:text-lg text-purple-300 mb-4">
                                {exp.role} | {exp.period}
                            </div>
                            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-3 sm:ml-4 text-gray-300 text-sm sm:text-base">
                                {exp.achievements.map((ach, i) => (
                                    <li key={`${exp.id}-ach-${i}`}>{highlightKeywords(ach.text, ach.keywords)}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {!showAll && experiences.length > 2 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg 
                bg-gradient-to-r from-red-500/40 to-purple-500/40 
                text-white border border-red-500/30 
                hover:from-red-500/30 hover:to-purple-500/30 
                transition-all duration-300 cursor-pointer"
                        >
                            See more <FiChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
