import burguerMania from "../assets/burguermania.png";
const Card = () => {
    return (
      <div className= "border-1 border-black hover:border-rose-500 hover:border-b-4 hover:drop-shadow-2xl hover:border-2 bg-neutral-900 text-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transform transition-all duration-300 flex flex-col justify-between ">
        {/* <!-- Imagem do projeto --> */}
        <div className="relative w-full h-64">
          <img
             alt="Burguer Mania"
            src={burguerMania}
            className="group-hover:opacity-80 transition-opacity duration-300 rounded-t-lg w-full h-full object-cover"
            width={200} height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-t-lg"></div>
        </div>

        {/* <!-- Conteúdo do card --> */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-2">Burguer Mania</h3>
          <p className="text-gray-300 mb-4 text-sm flex-grow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam fugiat maiores quisquam incidunt nisi, iusto harum obcaecati repudiandae et illo magnam velit at rerum accusamus provident suscipit sint!
          </p>
          <div className="flex justify-between items-center mb-4">
            <a className="text-gray-400 hover:text-gray-200 transition-colors">
              {/* <!-- Ícone do GitHub --> */}
            </a>
            <div className="flex space-x-2">
              {/* <!-- Ícones de tecnologias --> */}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Card;