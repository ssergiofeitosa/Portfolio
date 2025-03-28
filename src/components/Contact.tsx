import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, Envelope, ChatText, Article } from "phosphor-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isFocused, setIsFocused] = useState({
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative"
    >
      {/*
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-900 to-transparent z-0"></div> */}

      {/* container pai*/}
      <div className="w-full max-w-3xl px-6 py-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4 relative inline-block">
            Contato
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Precisa de um site ou quer tirar uma ideia do papel? Me chama! Vamos
            conversar e ver como posso te ajudar no seu projeto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-neutral-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-neutral-700/50 relative"
        >
          {/*deco */}
          <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-rose-500/20 -rotate-45 transform origin-top-left"></div>
          </div>

          <form className="p-8 space-y-6 relative z-10">
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-white font-medium mb-2">
                <Envelope weight="bold" className="text-rose-500" />
                Seu Email
              </label>
              <div
                className={`relative transition-all duration-300 ${
                  isFocused.email ? "transform -translate-y-1" : ""
                }`}
              >
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  className="w-full p-3 rounded-lg bg-neutral-900/80 text-white border border-neutral-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-300 outline-none"
                  placeholder="Informe seu Email"
                  required
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-500/70 to-transparent transform scale-x-0 transition-transform duration-300 origin-center"
                  style={{
                    transform: isFocused.email ? "scaleX(1)" : "scaleX(0)",
                  }}
                ></div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-white font-medium mb-2">
                <Article weight="bold" className="text-rose-500" />
                Assunto
              </label>
              <div
                className={`relative transition-all duration-300 ${
                  isFocused.subject ? "transform -translate-y-1" : ""
                }`}
              >
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={() => handleBlur("subject")}
                  className="w-full p-3 rounded-lg bg-neutral-900/80 text-white border border-neutral-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-300 outline-none"
                  placeholder="Informe o assunto"
                  required
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-500/70 to-transparent transform scale-x-0 transition-transform duration-300 origin-center"
                  style={{
                    transform: isFocused.subject ? "scaleX(1)" : "scaleX(0)",
                  }}
                ></div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-white font-medium mb-2">
                <ChatText weight="bold" className="text-rose-500" />
                Sua mensagem
              </label>
              <div
                className={`relative transition-all duration-300 ${
                  isFocused.message ? "transform -translate-y-1" : ""
                }`}
              >
                <textarea
                  rows={5}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  className="w-full p-3 rounded-lg bg-neutral-900/80 text-white border border-neutral-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-300 outline-none resize-none"
                  placeholder="Digite sua mensagem..."
                  required
                ></textarea>
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-500/70 to-transparent transform scale-x-0 transition-transform duration-300 origin-center"
                  style={{
                    transform: isFocused.message ? "scaleX(1)" : "scaleX(0)",
                  }}
                ></div>
              </div>
            </div>

            <motion.div
              className="flex justify-end"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-rose-500/20"
              >
                <span>Enviar</span>
                <PaperPlaneTilt weight="bold" className="text-white" />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
