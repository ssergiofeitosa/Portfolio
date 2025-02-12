import Card from './Card';
interface ProjectProps{
  title:string
  description:string
  image:string,
  githublink:string,
  technologies:string[]
  // essa tipagem vai mudar ,pois serão ícones(?)//
}
const Skills = ()=>{
  // aqui vai conter os projetos que irei adicionar//
  const projetos: ProjectProps[] = [
    {
      title: "exemplo",
      description: "exemploooooo",
      image: "path/da/imagem.png",
      githublink: "github.com/sergio",
      technologies: ["angular", "html", "css"] 
      // aqui importarei icones para cada tecnologia respectiva//
    },
  ];

    return (
      <>
        <section className="py-16 px-4 bg-transparent pt-[160px] pb-[180px]" id="projects">
  <div className="container mx-auto text-center">
    <h2 className="text-white text-5xl font-bold mb-8">Projetos Pessoais</h2>
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
      </>
    );
}

export default Skills