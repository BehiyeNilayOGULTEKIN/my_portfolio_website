"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavigationBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="h-20 sticky top-0 z-50 bg-black/60 text-white background-blur-md">
            <div className="container max-w-6xl px-4 max-w-screen-xl items-center py-2 mx-auto h-full px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center h-full">
                    <Image
                        src="/Behiye Nilay Oğultekin (5).svg"
                        alt="Logo"
                        width={200}
                        height={80}
                        className="h-[200px] w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-medium">
                    <li>
                        <button
                            onClick={() => {
                                const el = document.getElementById("home");
                                if (!el) return;

                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="hover:text-gray-200 transition cursor-pointer bg-transparent"
                        >
                            HomePage
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                const el = document.getElementById("projects");
                                if (!el) return;

                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="hover:text-gray-200 transition cursor-pointer bg-transparent"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                const el = document.getElementById("experience");
                                if (!el) return;

                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="hover:text-gray-200 transition cursor-pointer bg-transparent"
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                const el = document.getElementById("contact");
                                if (!el) return;

                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="hover:text-gray-200 transition cursor-pointer bg-transparent"
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Mobile Button */}
                {/* <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button> */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1"
                >
                    <span
                        className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden bg-black/80 background-blur-md px-4 py-4 space-y-4">
                    <li>
                        <Link href="/" onClick={() => setOpen(false)}>
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setOpen(false);

                                // küçük delay: menü kapansın, sonra scroll olsun
                                setTimeout(() => {
                                    const el = document.getElementById("projects");
                                    if (!el) return;

                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }, 100);
                            }}
                            className="w-full text-left hover:text-gray-200 transition"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setOpen(false);

                                // küçük delay: menü kapansın, sonra scroll olsun
                                setTimeout(() => {
                                    const el = document.getElementById("experience");
                                    if (!el) return;

                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }, 100);
                            }}
                            className="w-full text-left hover:text-gray-200 transition"
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setOpen(false);

                                // küçük delay: menü kapansın, sonra scroll olsun
                                setTimeout(() => {
                                    const el = document.getElementById("contact");
                                    if (!el) return;

                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }, 100);
                            }}
                            className="w-full text-left hover:text-gray-200 transition"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}
