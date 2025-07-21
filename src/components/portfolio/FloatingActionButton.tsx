import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Download,
  X,
  Plus,
  Zap,
} from "lucide-react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actionItems = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      color: "from-green-500 to-emerald-600",
      description: "Chat direto",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:viniciuslima1915@outlook.com.br?subject=Contato%20via%20Portfólio&body=Olá%20Vinícius,%0D%0A%0D%0AVisitei%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%0D%0A%0D%0AAtenciosamente,",
      color: "from-blue-500 to-indigo-600",
      description: "Email direto",
    },
    {
      icon: Calendar,
      label: "Agendar",
      href: "https://calendly.com/viniciuslima1915",
      color: "from-purple-500 to-pink-600",
      description: "Reunião",
    },
    {
      icon: Download,
      label: "CV",
      onClick: () => {
        // CV download function (reuse from Navigation component)
        const cvContent = `
          <!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <title>CV - Vinícius Provasi</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 20px; }
              .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
              .header h1 { color: #1e40af; margin: 0; font-size: 28px; }
              .section { margin: 25px 0; }
              .section h3 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Vinícius Provasi de Sousa Lima</h1>
              <h2>Engenharia de Aplicação & Desenvolvimento de Sistemas</h2>
              <p>📍 Sorocaba, SP | 📞 (15) 99817-6173 | ✉️ viniciuslima1915@outlook.com.br</p>
            </div>
            <div class="section">
              <h3>🌟 Resumo Profissional</h3>
              <p>Profissional com 4+ anos de experiência em automação de processos e desenvolvimento de sistemas digitais.</p>
            </div>
          </body>
          </html>
        `;
        
        const blob = new Blob([cvContent], { type: 'text/html;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'CV-Vinicius-Provasi-Engenheiro-Aplicacao.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      },
      color: "from-gray-500 to-gray-700",
      description: "Download CV",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0, 
                  x: 20,
                  transition: { delay: (actionItems.length - index) * 0.1 }
                }}
                whileHover={{ scale: 1.05, x: -5 }}
                className="flex items-center gap-3"
              >
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border"
                >
                  <div className="text-sm font-medium text-gray-900">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.description}
                  </div>
                </motion.div>

                {/* Action Button */}
                <Button
                  size="sm"
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0`}
                  asChild={!!item.href}
                  onClick={item.onClick}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  ) : (
                    <button aria-label={item.label}>
                      <item.icon className="w-5 h-5" />
                    </button>
                  )}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
          </motion.div>
        </Button>
      </motion.div>

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"
        title="Disponível para projetos"
      />
    </div>
  );
};

export default FloatingActionButton;
