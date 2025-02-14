// import profile from "../assets/profile.svg"
import eu from "../assets/eu.jpeg";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className=" w-full h-screen text-white flex flex-col justify-center snap-start items-center gap-6  "
      >
        <img
          className="text-white rounded-full"
          src={eu}
          alt=""
          width={120}
          height={160}
        />
        <h1 className="sm:text-5xl font-serif font-bold text-4xl  ">
          <span className="text-rose-500">{"<"}</span> Sérgio Feitosa
          <span className="text-rose-500"> {"/>"}</span>
        </h1>
        <h2 className="sm:text-3xl font-normal text-2xl">
          {" "}
          Desenvolvedor Front-End{" "}
        </h2>
        <p className="sm:text-2xl px-4 text-center font-thin lg:text-3xl text-2xl">
          Graduando em{" "}
          <span className="italic text-gray-300 font-medium">
            Engenharia de Computação
          </span>{" "}
          na Universidade Federal do Vale do São Francisco
        </p>
        <div className="flex">
          <a href="https://github.com/ssergiofeitosa" target="_blank">
            <GithubLogo size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-sérgio-feitosa-lima-segundo-874118210/"
            target="_blank"
          >
            <LinkedinLogo size={32} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
