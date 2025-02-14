const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-950 rounded-md border-2 min-h-[97%] py-16 w-full flex items-center justify-center mt-[60px]"
    >
      <div className="w-full max-w-screen-md px-4 py-8 border-1 rounded-md drop-shadow-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          Entre em Contato
        </h2>
        <p className="mb-8 lg:mb-16 font-medium text-center text-gray-500 dark:text-slate-100 sm:text-xl">
          Precisa de um site ou quer tirar uma ideia do papel? Me chama! Vamos
          conversar e ver como posso te ajudar no seu projeto.
        </p>
        <form className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Seu Email
            </label>
            <input
              type="email"
              className="block w-full p-2.5 rounded-lg border shadow-sm bg-gray-50 dark:bg-gray-700"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Assunto
            </label>
            <input
              type="text"
              className="block w-full p-3 rounded-lg border shadow-sm bg-gray-50 dark:bg-gray-700"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Sua mensagem
            </label>
            <textarea
              rows={5}
              className="block w-full p-2.5 rounded-lg border shadow-sm bg-gray-50 dark:bg-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-white rounded-lg bg-primary-700 hover:bg-primary-800"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
