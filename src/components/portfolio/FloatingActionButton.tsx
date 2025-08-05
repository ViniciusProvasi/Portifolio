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
      color: "bg-green-600",
      description: "Chat direto",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:viniciuslima1915@outlook.com.br?subject=Contato%20via%20Portfólio&body=Olá%20Vinícius,%0D%0A%0D%0AVisitei%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%0D%0A%0D%0AAtenciosamente,",
      color: "bg-blue-600",
      description: "Email direto",
    },
    {
      icon: Calendar,
      label: "Agendar",
      href: "https://calendly.com/viniciuslima1915",
      color: "bg-purple-600",
      description: "Reunião",
    },
    {
      icon: Download,
      label: "CV",
      onClick: () => {
        const cvUrl =
          "https://cdn.builder.io/o/assets%2Fec2c5318e0034d92aab1b1131d2d9363%2F9663f8c16c894daabf577c081dcd605a?alt=media&token=a6fa9cae-862d-4b13-a098-47484818e93f&apiKey=ec2c5318e0034d92aab1b1131d2d9363";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "CV-Vinicius-Provasi-Engenheiro-Aplicacao.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      color: "bg-gray-700",
      description: "Download CV",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998]">
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
                  transition: { delay: index * 0.1 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: 20,
                  transition: { delay: (actionItems.length - index) * 0.1 },
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
                    className={`w-16 h-16 rounded-full ${item.color} hover:opacity-90 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 border-0 relative overflow-hidden group transform hover:-translate-y-1`}
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
                    className={`w-16 h-16 rounded-full ${item.color} hover:opacity-90 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 border-0 relative overflow-hidden group transform hover:-translate-y-1`}
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
          className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 border-0 relative overflow-hidden group transform hover:-translate-y-2 ${
            isOpen ? "rotate-45" : ""
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
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg transform scale-110" />
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
