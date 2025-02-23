import Button from "../components/Button.tsx";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" min-h-[97%]  py-16 md:pt-16 w-full flex items-center justify-center mt-[60px] "
    >
      <div className="w-full max-w-screen-md px-4 py-8   drop-shadow-lg">
        <h1 className="mb-4 text-5xl tracking-tight font-medium  text-center text-white">
          Contato
        </h1>
        <p className=" mb-8 lg:mb-16 font-extralight text-center text-white sm:text-xl">
          Precisa de um site ou quer tirar uma ideia do papel? Me chama! Vamos
          conversar e ver como posso te ajudar no seu projeto.
        </p>
        <form className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-50 ">
              Seu Email
            </label>
            <input
              type="email"
              className=" block w-full p-2.5 rounded-sm shadow-sm bg-neutral-900   focus:border-2 text-white placeholder:text-gray-500 border-1 border-white"
              placeholder="Informe seu Email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-50">
              Assunto
            </label>
            <input
              type="text"
              className=" block w-full p-3 rounded-sm  shadow-sm bg-neutral-900   text-white placeholder:text-gray-500 border-1 border-white"
              required
              placeholder="Informe o assunto"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-50">
              Sua mensagem
            </label>
            <textarea
              rows={5}
              className="  block w-full p-2.5 rounded-sm  shadow-sm bg-neutral-900   text-white placeholder:text-gray-500 border-1 border-white"
              placeholder="Digite sua mensagem..."
            ></textarea>
          </div>

          <Button></Button>
          {/* <button
            type="submit"
            className="py-3 px-5 text-white rounded-lg bg-primary-700 hover:bg-primary-800"
          >
            Enviar
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
