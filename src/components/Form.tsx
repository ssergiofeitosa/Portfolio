const Form =()=>{

    //add value={} e onChange em tds inputs depois
    return (
      <div
        id="contact"
        className="flex flex-col h-full w-full md:w-1/2 justify-between  pb-12 pt-[140px] text-center  "
      >
        <h1 className="text-white text-5xl font-bold items-center ">
          
        </h1>
        <section className="text-white flex flex-col pb-[40px]">
          <form
            action=" "
            className="form flex flex-col h-full gap-4 content-center  "
          >
            <input
              className="input h-14 p-4 focus:outline-none focus:border-white placeholder-white bg-gradient-to-r  bg-zinc-950 rounded-md  text-xl  border-zinc-800  border-[2px]"
              type="text"
              placeholder="Informe seu nome"
            />

            <input
              className="input input h-14 p-4 focus:outline-none focus:border-white placeholder-white rounded-md  bg-zinc-950 text-xl  border-zinc-800  border-[2px]"
              type="text"
              placeholder="Informe seu Email"
            />

            <textarea
              className="textarea input h-[400px] p-4 focus:outline-none focus:border-white placeholder-white rounded-md  text-xl   bg-zinc-950  border-zinc-800 border-[2px] resize-none  "
              placeholder="Digite sua mensagem!"
            />
            <button className="w-full relative h-12 text-black overflow-hidden border border-zinc-900 bg-white  shadow-2xl transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:scale-x-0 before:bg-slate-200 before:transition-transform before:duration-300 before:ease-in-out hover:text-black hover:shadow-zinc-700 hover:before:scale-x-100 hover:border-white rounded-md border[2px]">
              <span className="relative z-10 text-xl font-bold">Enviar</span>
            </button>
          </form>
        </section>
      </div>
    );
}

export default Form;