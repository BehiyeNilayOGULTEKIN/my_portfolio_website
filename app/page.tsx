import Aboutme from "@/components/aboutme";
import ExperienceCard from "@/components/experience";
import NavigationBar from "@/components/navbar";
import ProjectSlider from "@/components/projectsSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div id="home" className="relative min-h-screen">
        <video
          autoPlay
          muted
          playsInline
          className="
      absolute inset-0
      w-full h-full
      -z-10
      object-contain
      bg-black
      md:object-cover
    "
        >
          <source src="/Python (4).mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mb-20"></div>
      <section id="about">
        <Aboutme />
      </section>
      <section
        id="projects"
        className="relative w-full overflow-x-hidden z-10 scroll-mt-24"
      >
        <ProjectSlider />
      </section>
      <section
        id="experience"
        className="relative w-full py-24 px-6 overflow-x-hidden"
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Experience
        </h2>

        <div className="mx-auto max-w-3xl space-y-12">
          <ExperienceCard
            title="Volunteer Software Engineer"
            company="Aydin Teknokent"
            date="12.2025 – Present"
            description="MSSQL , SQL Requests optimization.
            Power BI Dashboard development and maintenance.
            Data analysis and visualization for internal projects.
            Socail media content creation and management for the company."
          />

          <ExperienceCard
            title="Intern Software Developer"
            company="Barikat Cyber Security"
            date="08.2025 – 11.2025"
            description="Weather API integration for internal tools.
            Weather Forecating model development using Python and machine learning techniques.
            Data analysis and visualization for weather-related projects.
            SOC team support
            Technical  Server, Active Directory, Firewall, SIEM, EDR, XDR, SOAR, Threat Intelligence Platform management and maintenance."
          />

          <ExperienceCard
            title="Part-time technical support"
            company="Suleyman Demirel University"
            date="2021 – 2022"
            description="Level 1 technical support for students and faculty.
            Troubleshooting hardware and software issues.
            Assisting with network connectivity problems.
            Providing guidance on software installations and updates."
          />
        </div>
      </section>
      <section
        id="contact"
        className="relative w-full py-24 px-6 overflow-x-hidden"
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Contact
        </h2>

        <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/behiyenilayogultekin/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-gray-300 hover:text-blue-400 transition"
          >
            <div className="rounded-full bg-white/10 p-5 backdrop-blur group-hover:scale-110 transition">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C19.7 8 22 10.3 22 14.7V24h-4v-8.2c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4z" />
              </svg>
            </div>
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BehiyeNilayOGULTEKIN"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-gray-300 hover:text-gray-100 transition"
          >
            <div className="rounded-full bg-white/10 p-5 backdrop-blur group-hover:scale-110 transition">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.8 1.7 2.3.8.3 1.7.1 2.1-.1.1-.6.4-1.1.7-1.4-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 .1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-.4 3-.1 3-.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            </div>
            <span>GitHub</span>
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=behiyenilayogultekin@gmail.com"
            className="group flex flex-col items-center gap-3 text-gray-300 hover:text-red-400 transition"
          >
            <div className="rounded-full bg-white/10 p-5 backdrop-blur group-hover:scale-110 transition">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065 0 6V18c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6l-12 7.065zM12 11 24 4H0l12 7z" />
              </svg>
            </div>
            <span>Email</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/roboticgirlonwork/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-gray-300 hover:text-pink-400 transition"
          >
            <div className="rounded-full bg-white/10 p-5 backdrop-blur group-hover:scale-110 transition">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
              </svg>
            </div>
            <span>Instagram</span>
          </a>
        </div>
      </section>
    </main>
  );
}
