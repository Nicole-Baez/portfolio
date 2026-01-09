import Image from "next/image";
import AboutPage from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    //Notes: I want to add some animations on this screen, look at a portfolio example

    <main className="flex flex-col w-full min-h-screen max-w-3xl items-center justify-center gap-10 pt-30 pl-70 bg-white dark:bg-black scroll-smooth">
      <div className="flex flex-row text-center items-center sm:items-center sm:text-center max-w-xl overflow-x:hidden">
        <img
          className="rounded-full w-40 h-40"
          src="/images/Proffesional Pic.jpg"
        />

        <div className="flex flex-col gap-4 flex-1 pl-40 items-center">
          <h1 className="font-bold text-black font-mono gap-2">
            Welcome to my Personal Portfolio!
          </h1>

          <p className="text-black font-mono text-sm max-w-md">
            Hello! I'm Nicole, an aspiring software developer who's passionate
            about front-end development and currently interested in exploring
            back-end development as well as machine learning.
          </p>
        </div>
      </div>

      <section id="about">
        <AboutPage />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </main>
  );
}
