import { useEffect, useState } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "/node_modules/swiper/swiper-bundle.css";
import "/node_modules/swiper/swiper.css";
import "/node_modules/swiper/modules/navigation.css";
import "/node_modules/swiper/modules/pagination.css";
import "/node_modules/swiper/modules/scrollbar.css";
import "/node_modules/swiper/modules/effect-coverflow.css";
import Card from "../Card";

const Swiperr = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // até 1024px é considerado "mobile"
    };

    handleResize(); // chama uma vez
    window.addEventListener("resize", handleResize); // escuta mudanças
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const projects = [
    {
      id: "item-1",
      image: "/burguermania.png",
      title: "Burguer Mania",
      technologies: ["Angular", "TypeScript", "CSS"],
      description:
        "Um aplicativo de delivery de hambúrgueres desenvolvido com Angular e TypeScript.",
      link: "https://github.com/ssergiofeitosa/Projeto-Restic---Burguer-Mania.git",
      site: "",
    },
    {
      id: "item-2",
      image: "/quiz.png",
      title: "Quiz App de História",
      technologies: ["JavaScript", "TypeScript", "CSS"],
      description:
        "Um quiz interativo sobre história mundial, desenvolvido com JavaScript e TypeScript.",
      link: "https://github.com/ssergiofeitosa/Projeto-Restic---Quiz.git",
      site: "https://projeto-restic-quiz-historia.vercel.app",
    },
    {
      id: "item-3",
      image: "/googleformclone.png",
      title: "Google Form Clone",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description:
        "Um clone do Google Forms desenvolvido com React e TailwindCSS.",
      link: "https://github.com/ssergiofeitosa/Google-Form-Clone-React.git",
      site: "",
    },
    {
      id: "item-2",
      image: "/quiz.png",
      title: "Quiz App de História",
      technologies: ["JavaScript", "TypeScript", "CSS"],
      description:
        "Um quiz interativo sobre história mundial, desenvolvido com JavaScript e TypeScript.",
      link: "https://github.com/ssergiofeitosa/Projeto-Restic---Quiz.git",
      site: "https://projeto-restic-quiz-historia.vercel.app",
    },
    {
      id: "item-3",
      image: "/googleformclone.png",
      title: "Google Form Clone",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description:
        "Um clone do Google Forms desenvolvido com React e TailwindCSS.",
      link: "https://github.com/ssergiofeitosa/Google-Form-Clone-React.git",
      site: "",
    },
  ];
  return (
    <div
      id="projects"
      className="flex h-full w-full items-center justify-center pt-20 px-4 bg-transparent"
    >
      <div className="w-full max-w-[85%] flex flex-col items-center">
        <div className="container mx-auto text-center mb-8 w-[85%] lg:w-[70%]">
          <h2 className="text-white text-5xl md:text-4xl lg:text-5xl font-bold items-center mb-2">
            Projetos
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent w-48 mx-auto mb-8"></div>
          <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
            Esses projetos foram desenvolvidos como parte do meu processo de
            aprendizado, e cada um deles representou uma oportunidade prática de
            explorar novas tecnologias e ferramentas.{" "}
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={!isMobile} // <-- apenas ativa o loop se NÃO for mobile
          coverflowEffect={{
            rotate: 3,
            stretch: 0,
            depth: 120,
            modifier: 3.2,
            slideShadows: true,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-full px-2"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center px-2">
              <Card project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swiperr;
