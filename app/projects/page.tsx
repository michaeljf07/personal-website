import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsPage() {
    return (
        <main className="flex flex-col items-center mx-auto w-11/12 md:w-5/6 py-16 max-w-[1400px]">
            <div className="text-center mb-20">
                <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r text-white bg-clip-text">
                    My Projects
                </h1>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    A collection of projects I&apos;ve built to solve problems
                    and explore new technologies
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 text-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={400}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="flex flex-col flex-grow p-6">
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                                {project.title}
                            </h2>
                            <p className="text-gray-300 text-base mb-6 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            {/* GitHub Button */}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
