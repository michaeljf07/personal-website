import Image from "next/image";
import Link from "next/link";
import WorkStatus from "@/components/work_status";

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row mx-auto my-20 w-11/12 lg:w-5/6 max-w-[1400px] px-4 gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-tight mb-2 pb-2">
                    I&apos;m Michael Ferreira.
                </h1>

                <WorkStatus />

                <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-8">
                    I&apos;m a student at the University of Waterloo and Wilfred
                    Laurier University, pursuing a double degree in Computer
                    Science and Business Administration.
                </p>

                <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-8">
                    I&apos;m passionate about building innovative solutions at
                    the intersection of technology and business.
                </p>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-100">
                        Currently working with
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Python",
                            "React",
                            "HTML/CSS",
                            "TypeScript",
                            "Next.js",
                            "Racket",
                            "C",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-4 items-center flex-wrap">
                    <Link href="/resume.pdf" target="_blank">
                        <button className="bg-red-600 hover:bg-red-500 rounded-xl py-3 px-8 text-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 w-auto flex-none hover: cursor-pointer">
                            View Resume
                        </button>
                    </Link>

                    <div className="flex gap-4 justify-center sm:justify-start flex-none items-center">
                        <Link
                            href="https://www.linkedin.com/in/michael-j-ferreira/"
                            target="_blank"
                            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-all duration-200 hover:scale-110 border border-gray-700 hover:border-gray-600">
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn"
                                width={28}
                                height={28}
                            />
                        </Link>
                        <Link
                            href="https://github.com/michaeljf07"
                            target="_blank"
                            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-all duration-200 hover:scale-110 border border-gray-700 hover:border-gray-600">
                            <Image
                                src="/github.png"
                                alt="GitHub"
                                width={28}
                                height={28}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-400/20 rounded-3xl blur-md"></div>

                    <div className="relative bg-gradient-to-br from-red-600 to-red-400 p-0.5 rounded-3xl">
                        <Image
                            src="/headshot1.jpg"
                            alt="Michael Ferreira"
                            width={400}
                            height={400}
                            className="rounded-3xl max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
