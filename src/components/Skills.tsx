import Card from "./Card";
interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githublink: string;
  technologies: string[];
  // essa tipagem vai mudar ,pois serão ícones(?)//
}
const Skills = () => {
  const projetos: ProjectProps[] = [
    {
      title: "exemplo",
      description: "exemploooooo",
      image: "path/da/imagem.png",
      githublink: "github.com/sergio",
      technologies: ["angular", "html", "css"],
    },
  ];

  return (
    <section
      className="px-4 bg-transparent min-h-screen py-16 w-full text-white flex flex-col items-center gap-8 text-4xl sm:text-3xl md:text-2xl"
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-white text-5xl font-normal mb-8">
          Projetos Pessoais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          {/* {projetos.map((projeto, index) => (
              <Card key={index} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
