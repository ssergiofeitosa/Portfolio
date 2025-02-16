interface CardProps {
  title: string;
  description: string;
  image: string;
  technologies: JSX.Element[];
}

export default function Card2({
  title,
  description,
  image,
  technologies,
}: CardProps) {
  return (
    <div className="relative drop-shadow-xl w-[330px] h-[400px] overflow-hidden rounded-xl bg-[#3d3c3d] hover:scale-105 hover:drop-shadow-2xl transform transition-all duration-300 group border-2 border-transparent hover:border-rose-500">
      {/* efeito de brilho/blur */}
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Cont principal */}
      <div className="absolute flex flex-col justify-between items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] p-4 hover:opacity-95 transition-opacity duration-300">
        {/*  imagem */}
        <div className=" w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>

        {/* conteúdo textual */}
        <div className="flex flex-col items-center text-center flex-grow">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
        </div>

        {/* icons de tecnologias */}
        <div className="flex mt-4 space-x-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
