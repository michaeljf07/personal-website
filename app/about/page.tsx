import Image from "next/image";

export default function AboutMe() {
    return (
        <main className="flex flex-col items-center mx-auto w-11/12 md:w-5/6 lg:py-20 px-4 max-w-[1400px]">
            <section className="text-center mb-4">
                <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                    About Me
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                    Hi, I&apos;m Michael Ferreira — a student at the University
                    of Waterloo, pursuing a double degree in Computer Science
                    and Business Administration through Wilfrid Laurier
                    University.
                </p>
                <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-2 w-fit mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">
                        Open to opportunities
                    </span>
                </div>
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        skill: "Organization",
                                        description:
                                            "Structured approach to tasks",
                                    },
                                    {
                                        skill: "Discipline",
                                        description:
                                            "Consistent and focused execution",
                                    },
                                    {
                                        skill: "Learning",
                                        description: "Quick to adapt and grow",
                                    },
                                    {
                                        skill: "Adaptability",
                                        description:
                                            "Thrives in changing environments",
                                    },
                                    {
                                        skill: "Teamwork",
                                        description:
                                            "Collaborative and supportive",
                                    },
                                    {
                                        skill: "Problem Solving",
                                        description:
                                            "Creative and analytical thinking",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={item.skill}
                                        className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-red-500/50 rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20">
                                        <div className="absolute top-3 right-3 w-8 h-8 bg-red-600/20 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 text-xs font-bold">
                                            {index + 1}
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                                            {item.skill}
                                        </h3>

                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                            {item.description}
                                        </p>

                                        <div className="mt-3 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500"></div>
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
                        And more coming soon!
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
