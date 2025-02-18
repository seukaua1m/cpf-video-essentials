
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  const [linksEnabled, setLinksEnabled] = useState(false);

  useEffect(() => {
    // Exibe um toast informando sobre o delay
    toast.info("Os links complementares estarão disponíveis em 1 minuto");
    
    // Habilita os links após 1 minuto
    const timer = setTimeout(() => {
      setLinksEnabled(true);
      toast.success("Links complementares estão agora disponíveis!");
    }, 60000); // 60000ms = 1 minuto

    return () => clearTimeout(timer);
  }, []);

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
          <h1 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-2">
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
          <h2 className="text-xl font-medium text-pink-600 mb-6">
            Links Complementares
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://www.consumidorpositivo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 border rounded-xl transition-all duration-300 shadow-sm ${
                linksEnabled
                  ? "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100 hover:border-pink-300"
                  : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              onClick={(e) => !linksEnabled && e.preventDefault()}
            >
              Consumidor Positivo
            </a>
            <a
              href="https://www.serasa.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 border rounded-xl transition-all duration-300 shadow-sm ${
                linksEnabled
                  ? "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100 hover:border-pink-300"
                  : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              onClick={(e) => !linksEnabled && e.preventDefault()}
            >
              Serasa
            </a>
          </div>
          {!linksEnabled && (
            <p className="mt-4 text-gray-500 text-sm">
              Os links estarão disponíveis em 1 minuto
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
