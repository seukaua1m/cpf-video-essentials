
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white px-4 py-8 md:py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Obrigado pela confiança, aprenda abaixo com a aula como consultar seu CPF completo
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="aspect-video w-full mb-12 rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/gMJ-Qr6Hv8w?si=ADU-yhckmNz_O5NJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl font-medium text-gray-800 mb-6">
            Links Complementares
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://www.consumidorpositivo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              Consumidor Positivo
            </a>
            <a
              href="https://www.serasa.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              Serasa
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
