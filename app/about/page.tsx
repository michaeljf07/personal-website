import Image from "next/image";

export default function AboutMe() {
    return (
        <main className="flex flex-col items-center mx-auto w-11/12 md:w-5/6 lg:py-20 px-4">
            <section className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                    About Me
                </h1>
                <p className="text-lg sm:text-2xl text-white max-w-3xl mx-auto">
                    I&apos;m Michael Ferreira — an incoming student at the
                    University of Waterloo, pursuing a double degree in Computer
                    Science and Business Administration through Wilfrid Laurier
                    University. I&apos;m passionate about building meaningful,
                    innovative solutions that live at the intersection of
                    technology and business.
                </p>
            </section>

            <section className="bg-gray-900 rounded-3xl shadow-slate-950 shadow-2xl w-full">
                <div className="flex flex-col md:flex-row items-center lg:my-16 sm:my-4 p-8 md:p-12">
                    <div className="flex-1 mb-8 md:mb-0">
                        <Image
                            src="/headshot2.png"
                            alt="Michael Ferreira"
                            width={400}
                            height={400}
                            className="rounded-3xl shadow-lg mx-auto"
                        />
                    </div>

                    <div className="flex-1 text-white text-base sm:text-xl leading-relaxed md:pl-8">
                        <p className="mb-6">
                            I&apos;m a builder at heart who loves bringing ideas
                            to life. Whether I&apos;m coding a new project,
                            learning a new technology, or collaborating on a
                            team, I&apos;m always driven by curiosity and a
                            desire to create impact.
                        </p>
                        <p className="mb-6">
                            Currently, I&apos;m open to work opportunities where
                            I can apply my skills in both software development
                            and business strategy to contribute to exciting,
                            meaningful projects.
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
                            My Skills
                        </h2>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center lg:text-xl md:text-lg sm:text-xl">
                            <li className="bg-red-600 py-4 rounded-full shadow">
                                Organization
                            </li>
                            <li className="bg-red-600 py-4 rounded-full shadow">
                                Discipline
                            </li>
                            <li className="bg-red-600 py-4 rounded-full shadow">
                                Learning
                            </li>
                            <li className="bg-red-600 py-4 rounded-full shadow">
                                Adaptability
                            </li>
                            <li className="bg-red-600 py-4 rounded-full shadow">
                                Teamwork
                            </li>
                            <li className="bg-red-600 py-4 rounded-full shadow">
                                Problem Solving
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-4xl my-16 px-4"></section>
        </main>
    );
}
