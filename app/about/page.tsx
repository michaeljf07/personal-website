import Image from "next/image";

export default function AboutMe() {
    return (
        <main className="flex flex-col items-center mx-auto w-11/12 md:w-5/6 lg:py-20 px-4 max-w-[1400px]">
            <section className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-2 w-fit mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">
                        Open to opportunities
                    </span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                    About Me
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Hi, I&apos;m Michael Ferreira — a student at the{" "}
                    <span className="font-semibold text-red-400">
                        University of Waterloo
                    </span>
                    , pursuing a{" "}
                    <span className="font-semibold text-red-400">
                        double degree in Computer Science and Business
                        Administration
                    </span>{" "}
                    through Wilfrid Laurier University.
                </p>
            </section>

            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl w-full border border-gray-800 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center lg:p-16 md:p-12 p-8 gap-8 md:gap-12">
                    <div className="w-full lg:w-2/5 flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-400/20 rounded-3xl blur-md"></div>

                            <div className="relative bg-gradient-to-br from-red-600 to-red-400 p-0.5 rounded-3xl">
                                <Image
                                    src="/headshot2.png"
                                    alt="Michael Ferreira"
                                    width={400}
                                    height={400}
                                    className="rounded-3xl max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-white text-base sm:text-lg leading-relaxed md:pl-4">
                        <div className="space-y-6 mb-10">
                            <p className="text-gray-300">
                                I&apos;m a{" "}
                                <span className="text-red-400 font-semibold">
                                    builder at heart
                                </span>{" "}
                                who loves bringing ideas to life. Whether
                                I&apos;m coding a new project, learning a new
                                technology, or collaborating on a team, I&apos;m
                                always driven by curiosity and a desire to
                                create impact.
                            </p>
                            <p className="text-gray-300">
                                I&apos;m passionate about building innovative
                                solutions at the{" "}
                                <span className="text-red-400 font-semibold">
                                    intersection of technology and business
                                </span>
                                , and I&apos;m excited to apply my skills in
                                software development and business strategy to
                                meaningful projects.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                My Skills
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    "Organization",
                                    "Discipline",
                                    "Learning",
                                    "Adaptability",
                                    "Teamwork",
                                    "Problem Solving",
                                ].map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-4 py-4 rounded-2xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[5rem] border border-red-400/20">
                                        <span className="text-lg sm:text-base font-medium text-center">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-4xl my-20 px-4">
                <div className="text-center">
                    <p className="text-gray-400 text-lg">
                        Let&apos;s build something amazing together
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                        <div
                            className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}></div>
                        <div
                            className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
