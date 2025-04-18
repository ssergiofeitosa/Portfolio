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
      id: "item-4",
      image: "/burguermania.png",
      title: "Burguer Mania",
      technologies: ["Angular", "TypeScript", "CSS"],
      description:
        "Um aplicativo de delivery de hambúrgueres desenvolvido com Angular e TypeScript.",
      link: "https://github.com/ssergiofeitosa/Projeto-Restic---Burguer-Mania.git",
      site: "",
    },
    {
      id: "item-5",
      image: "/quiz.png",
      title: "Quiz App de História",
      technologies: ["JavaScript", "TypeScript", "CSS"],
      description:
        "Um quiz interativo sobre história mundial, desenvolvido com JavaScript e TypeScript.",
      link: "https://github.com/ssergiofeitosa/Projeto-Restic---Quiz.git",
      site: "https://projeto-restic-quiz-historia.vercel.app",
    },
    {
      id: "item-6",
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
      <div className="w-full max-w-6xl flex flex-col items-center ">
        <div className="container mx-auto text-center mb-8 w-[85%] lg:w-[70%] ">
          <h2 className="text-white text-5xl md:text-4xl lg:text-5xl font-bold items-center mb-2">
            Projetos
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent w-48 mx-auto mb-8"></div>

          <p className="text-white font-extralight sm:text-xl text-justify">
            Esses projetos foram desenvolvidos com o objetivo de aprimorar
            minhas habilidades e aprender novas tecnologias. Cada um deles
            representa um desafio que me ajudou a evoluir, explorando diferentes
            conceitos e boas práticas.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 3,
            stretch: 0,
            depth: 120,
            modifier: 3.2,
            slideShadows: true,
          }}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="p-4 h-full bg-neutral-900/80 rounded-lg shadow-xs  ">
                <Card project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Swiperr;
