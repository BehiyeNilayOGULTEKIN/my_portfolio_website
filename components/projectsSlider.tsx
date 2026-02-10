"use client";
import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";
const projects = [
  {
    id: 1,
    title: "Olympic Data Analysis for Data Vizz Microsoft",
    image: "/Ekran görüntüsü 2026-02-01 024728.png",
  },
  {
    id: 2,
    title: "Sea Level Rise Analysis for Dat Vizz Microsoft",
    image: "/Ekran görüntüsü 2026-01-26 024547.png",
  },
  {
    id: 3,
    title: "LLM models to analyze netstat reporting",
    image: "/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg",
  },
  {
    id: 4,
    title: "more too see -> github!",
    image: "/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg",
  },
];

export default function ProjectSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderRef.current?.scrollLeft || 0;
  };
  const onMouseLeave = () => {
    setIsDragging(false);
  };
  const onMouseUp = () => {
    setIsDragging(false);
  };
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 0.7;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };
  return (
    <section className="relative w-full py-12 z-10">
      <h2 className="mb-6 text-center text-3xl font-bold text-white">
        My Projects
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-6 px-6
    overflow-x-scroll overflow-y-hidden
    no-scrollbar
    snap-x snap-mandatory

    scroll-smooth
    overscroll-x-contain
    touch-pan-x

    cursor-grab active:cursor-grabbing
    select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              shrink-0
          min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]
          snap-center
          rounded-2xl
          bg-white/10 backdrop-blur
          overflow-hidden
            "
          >
            <div className="relative h-48 md:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
