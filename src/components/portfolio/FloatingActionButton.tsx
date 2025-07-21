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
              <p>📍 Boituva, SP | 📞 (15) 99817-6173 | ✉️ viniciuslima1915@outlook.com.br</p>
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
                {/* Enhanced Label */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/95 backdrop-blur-xl px-4 py-3 rounded-xl shadow-2xl border border-gray-200/50 group-hover:shadow-3xl transition-all duration-300"
                >
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {item.description}
                  </div>
                </motion.div>

                {/* Action Button */}
                {item.href ? (
                  <Button
                    size="sm"
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 border-0 relative overflow-hidden group transform hover:-translate-y-1`}
                    asChild
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <item.icon className="w-7 h-7 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 border-0 relative overflow-hidden group transform hover:-translate-y-1`}
                    onClick={item.onClick}
                    aria-label={item.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <item.icon className="w-7 h-7 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  </Button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Main FAB */}
      <motion.div
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.92 }}
        className="relative"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-18 h-18 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 border-0 relative overflow-hidden group transform hover:-translate-y-2 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            {isOpen ? (
              <X className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Zap className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            )}
          </motion.div>
        </Button>

        {/* Enhanced glowing ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg transform scale-110" />
      </motion.div>

      {/* Enhanced Status Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-lg animate-pulse"
        title="Disponível para projetos"
      >
        <div className="absolute inset-1 bg-white rounded-full" />
        <div className="absolute inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
      </motion.div>
    </div>
  );
};

export default FloatingActionButton;
