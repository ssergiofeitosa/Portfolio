// import profile from "../assets/profile.svg"
import eu from "../assets/eu.jpeg"
import { GithubLogo,LinkedinLogo } from "phosphor-react";
const Hero =()=>{
    return (
      <>
        <div id="home" className="h-screen text-white flex flex-col items-center gap-2 pt-[220px]">
          <img
            className="text-white rounded-full"
            src={eu}
            alt=""
            width={200}
            height={200}
          />
          <h1 className="text-5xl font-extrabold">Sérgio Feitosa</h1>
          <h2 className="text-3xl font-bold">Desenvolvedor Front-End</h2>
          <p className="text-2xl px-4 text-center">
            Graduando em Engenharia de Computação na Universidade Federal do
            Vale do São Francisco
          </p>
          <div className="flex">
            <a href="https://github.com/ssergiofeitosa"><GithubLogo size={36}/></a>
            <a href="https://www.linkedin.com/in/francisco-sérgio-feitosa-lima-segundo-874118210/"><LinkedinLogo size={32} /></a>
          </div>
        </div>
      </>
    );
}

export default Hero;
