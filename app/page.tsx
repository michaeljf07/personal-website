import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row mx-auto my-20 w-11/12 lg:w-5/6 max-w-[1400px] px-4">
            <div className="w-full lg:w-3/5 mb-12 lg:mb-0">
                <h1
                    className={`${playfair.className} text-5xl sm:text-6xl lg:text-8xl leading-tight`}>
                    Hello, I&apos;m Michael Ferreira.
                </h1>
                <p className="py-8 text-lg sm:text-xl">
                    Hi, I&apos;m Michael Ferreira — a student at the{" "}
                    <span className="font-bold text-red-400">
                        University of Waterloo
                    </span>
                    , pursuing a{" "}
                    <span className="font-bold text-red-400">
                        double degree in Computer Science and Business
                        Administration
                    </span>{" "}
                    through Wilfrid Laurier University. I&apos;m passionate
                    about building innovative solutions at the intersection of
                    technology and business, and I&apos;m excited to grow in
                    both fields throughout my university journey. I&apos;m
                    currently open for work opportunities.
                </p>
                <p className="text-lg sm:text-xl">
                    I&apos;m currently working with:
                </p>
                <ul className="mx-8 my-4 list-disc grid grid-cols-2 sm:grid-cols-3 text-lg sm:text-xl gap-2">
                    <li>Python</li>
                    <li>React</li>
                    <li>HTML/CSS</li>
                    <li>Typescript</li>
                    <li>Next.js</li>
                    <li>Anything I Can Learn</li>
                </ul>
                <ul className="flex flex-col sm:flex-row gap-8 my-8">
                    <li>
                        <Link href="/resume.pdf" target="_blank">
                            <button className="bg-red-600 rounded-2xl py-4 px-6 text-2xl hover:bg-red-400 hover:cursor-pointer w-full sm:w-auto">
                                Resume
                            </button>
                        </Link>
                    </li>
                    <li className="flex justify-center sm:justify-start my-auto">
                        <Link
                            href="https://www.linkedin.com/in/michael-j-ferreira/"
                            target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn"
                                width={50}
                                height={50}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    </li>
                    <li className="flex justify-center sm:justify-start my-auto">
                        <Link
                            href="https://github.com/michaeljf07"
                            target="_blank">
                            <Image
                                src="/github.png"
                                alt="GitHub"
                                width={50}
                                height={50}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center items-center">
                <Image
                    src="/headshot1.jpg"
                    alt="Michael Ferreira"
                    width={400}
                    height={400}
                    className="rounded-4xl max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
                />
            </div>
        </div>
    );
}
