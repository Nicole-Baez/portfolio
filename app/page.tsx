import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-row w-full min-h-screen max-w-3xl items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col text-left justify-items-center sm:items-start sm:text-left">
          <h1 className="font-bold text-black font-mono gap-2">
            Welcome to my Personal Portfolio!
          </h1>

          <p className="text-black font-mono text-sm text-left max-w-md">
            Hello! I'm Nicole Baez Espinosa, an aspiring software developer and
            a current third-year student at the University of Central Florida.
            I'm passionate about front-end development and I'm currently
            interesting in exploring back-end development and machine learning.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            className="rounded-full w-40 h-40"
            src="/images/Proffesional Pic.jpg"
          />
        </div>
      </main>
    </div>
  );
}
