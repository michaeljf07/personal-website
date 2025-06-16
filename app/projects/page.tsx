import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsPage() {
    return (
        <main className="flex flex-col items-center mx-auto w-5/6 py-16">
            <h1 className="text-6xl font-bold mb-16 text-center">
                My Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:w-3/4 sm:w-11/12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={400}
                                className="rounded-2xl mb-6 object-cover"
                            />
                            <h2 className="text-3xl font-semibold mb-4">
                                {project.title}
                            </h2>
                            <p className="text-lg mb-6">
                                {project.description}
                            </p>
                        </div>

                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 hover:bg-red-400 text-white text-center py-3 px-6 rounded-full transition duration-300">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
