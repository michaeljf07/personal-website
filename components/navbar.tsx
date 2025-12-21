"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();

    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = navItems.findIndex(
            (item) => item.path === pathname
        );
        const activeItem = itemRefs.current[activeIndex];

        if (activeItem) {
            setPillStyle({
                left: activeItem.offsetLeft,
                width: activeItem.offsetWidth,
            });
        }
    }, [pathname]);

    return (
        <nav className="flex justify-center my-8 px-4">
            <div className="relative">
                <ul className="flex gap-2 text-base sm:text-lg px-3 py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 shadow-2xl relative">
                    <div
                        className="absolute top-2 h-[calc(100%-1rem)] bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full transition-all duration-300 ease-out shadow-md shadow-indigo-500/40"
                        style={{
                            left: pillStyle.left,
                            width: pillStyle.width,
                        }}></div>

                    {navItems.map((item, index) => (
                        <li
                            key={item.path}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                                return void 0;
                            }}
                            className="relative z-10 flex-1">
                            <Link
                                href={item.path}
                                className={`block px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-center ${
                                    pathname === item.path
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                                }`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
