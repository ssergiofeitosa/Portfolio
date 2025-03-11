// import profile from "../assets/profile.svg"
import "animate.css";
import eu from "/eu.jpeg";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "phosphor-react";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className=" w-full min-h-screen text-white flex flex-col justify-center snap-start items-center gap-6  pt-14"
      >
        <img
          className="text-white rounded-full outline-3 outline-rose-900"
          src={eu}
          alt=""
          width={120}
          height={160}
        />
        <h1 className="sm:text-5xl  font-medium text-4xl text-white pb-1">
          <span className="text-rose-500">{"<"}</span> Sérgio Feitosa
          <span className="text-rose-500"> {"/>"}</span>
        </h1>
        <h2 className="sm:text-3xl font-normal text-2xl">
          {" "}
          Desenvolvedor Front-End{" "}
        </h2>
        <p className="sm:text-2xl px-4 text-center font-thin lg:text-3xl text-2xl">
          Graduando em{" "}
          <span className="italic text-slate-300 font-medium">
            Engenharia de Computação
          </span>{" "}
          na Universidade Federal do Vale do São Francisco
        </p>
        <div className="flex gap-x-3 pr-4">
          {/* adicionar mais icones aqui */}
          <a
            href="https://github.com/ssergiofeitosa"
            target="_blank"
            className="hover:text-rose-500 transition duration-300"
          >
            <GithubLogo size={36} />
          </a>

          <a
            href="https://www.linkedin.com/in/francisco-sérgio-feitosa-lima-segundo-874118210/"
            target="_blank"
          >
            <LinkedinLogo
              className="hover:text-rose-500 transition duration-300"
              size={36}
            />
          </a>
          <a href="https://www.instagram.com/sergio_ffeitosa/" target="_blank">
            <InstagramLogo
              className="hover:text-rose-500 transition duration-300"
              size={36}
            ></InstagramLogo>
          </a>
          <a href="mailto:fsfsegundo@hotmail.com " target="_blank">
            <EnvelopeSimple
              className="hover:text-rose-500 transition duration-300"
              size={36}
            ></EnvelopeSimple>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
