
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
          <div style={{ margin: '0 auto', width: '100%' }}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                frameBorder="0" 
                allowFullScreen 
                src="https://scripts.converteai.net/bc12bbfc-bebd-4b6c-b9e6-c3335dbaef4d/players/67b409fd876e904cfac58187/embed.html"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                referrerPolicy="origin"
              />
            </div>
          </div>
        </motion.div>

        {linksEnabled && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
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
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-50 border border-pink-200 rounded-xl text-pink-700 hover:bg-pink-100 hover:border-pink-300 transition-all duration-300 shadow-sm"
              >
                Consumidor Positivo
              </a>
              <a
                href="https://www.serasa.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-50 border border-pink-200 rounded-xl text-pink-700 hover:bg-pink-100 hover:border-pink-300 transition-all duration-300 shadow-sm"
              >
                Serasa
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Index;
