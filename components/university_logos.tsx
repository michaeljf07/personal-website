import Image from "next/image";

export default function UniversityLogos() {
    return (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3 sm:top-4 sm:right-4 sm:bottom-auto sm:left-auto">
            <a
                href="https://cs.uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="University of Waterloo">
                <div className="rounded-lg p-1 sm:p-2 hover:scale-105 transition-transform transform-gpu">
                    <Image
                        src="/uw_logo.png"
                        alt="University of Waterloo logo"
                        width={56}
                        height={56}
                        className="w-10 h-10 sm:w-14 sm:h-14 md:w-14 md:h-14"
                    />
                </div>
            </a>

            <a
                href="https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/index.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wilfrid Laurier University">
                <div className="rounded-lg p-1 sm:p-2 hover:scale-105 transition-transform transform-gpu">
                    <Image
                        src="/wlu_logo.png"
                        alt="Wilfrid Laurier University logo"
                        width={56}
                        height={56}
                        className="w-10 h-10 sm:w-14 sm:h-14 md:w-14 md:h-14"
                    />
                </div>
            </a>
        </div>
    );
}
