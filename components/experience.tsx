"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceCard({ title, company, date, description }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px", threshold: 0.1, root: null },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
      `}
    >
      <div className="rounded-2xl bg-white/10 backdrop-blur p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">
          {company} · {date}
        </p>
        <p className="mt-3 text-gray-200">{description}</p>
      </div>
    </div>
  );
}
