"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Move this OUTSIDE the component
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
        <nav className="flex justify-center my-6 relative">
            <ul className="flex gap-6 text-xl px-8 py-3 rounded-full bg-slate-950 shadow-lg relative">
                <div
                    className="absolute top-0 h-full bg-red-600 rounded-full transition-all duration-300 ease-in-out"
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
                        className="relative z-10">
                        <Link
                            href={item.path}
                            className={`px-4 py-2 rounded-full transition-colors hover:text-red-300 ${
                                pathname === item.path
                                    ? "text-white"
                                    : "text-gray-300"
                            }`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
