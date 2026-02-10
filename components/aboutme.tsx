"use client";
import { use, useEffect, useRef, useState } from "react";

export default function AboutMe() {
  const text =
    "Hi, I'm a passionate Data Lover with a love for creating innovative solutions. With experience in data analyzing tools , EXCEL Power BI , Python, I enjoy building applications that make a difference, make our dat amore valuable and understandable. When I'm not coding, you can find me exploring new technologies or hiking in the great outdoors.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartTyping(true);
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (startTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [startTyping, index, text]);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>

      <p className="text-xl md:text-xl max-w-xl leading-relaxed h-[300px]">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </section>
  );
}
