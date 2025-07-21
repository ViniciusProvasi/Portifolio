import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Download, Phone, Sparkles, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "value-proposition", label: "Proposta de Valor" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos" },
    { id: "education", label: "Formação" },
    { id: "contact", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const downloadCV = () => {
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
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Vinícius Provasi de Sousa Lima</h1>
          <h2>Engenharia de Aplicação & Desenvolvimento de Sistemas</h2>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([cvContent], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CV-Vinicius-Provasi-Engenheiro-Aplicacao.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <motion.header
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 font-sans ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-200/30"
          : "bg-gradient-to-r from-blue-900/80 via-indigo-900/85 to-purple-900/80 backdrop-blur-xl border-b border-blue-400/20"
      }`}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-bold transition-all duration-700 relative overflow-hidden transform group-hover:scale-110 ${
                    isScrolled
                      ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-blue-500/25"
                      : "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-2xl shadow-blue-400/30"
                  }`}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 3, -3, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="z-10 relative"
                  >
                    VP
                  </motion.div>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-center">
                <div
                  className={`font-bold text-lg leading-tight transition-all duration-700 ${
                    isScrolled
                      ? "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  Vinícius Provasi
                </div>
                <div
                  className={`text-xs transition-all duration-700 flex items-center gap-1 font-medium leading-tight ${
                    isScrolled ? "text-gray-600" : "text-blue-100"
                  }`}
                >
                  <Sparkles className="w-3 h-3 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    Engenheiro de Aplicação & Desenvolvedor Web
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold transition-all duration-500 relative py-3 px-4 rounded-xl group overflow-hidden ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-800 bg-gradient-to-r from-blue-100 to-indigo-100 shadow-lg shadow-blue-200/50 border border-blue-300/50"
                      : "text-white bg-gradient-to-r from-white/25 to-blue-100/25 backdrop-blur-lg shadow-xl shadow-white/15 border border-white/30"
                    : isScrolled
                      ? "text-gray-800 hover:text-blue-800 hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-100 hover:shadow-lg hover:shadow-gray-200/50"
                      : "text-blue-50 hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-blue-100/20 hover:backdrop-blur-lg hover:shadow-lg hover:shadow-white/10"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? "bg-blue-600" : "bg-white"
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge
                variant="outline"
                className={`text-xs transition-all duration-700 font-semibold ${
                  isScrolled
                    ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200/50 shadow-sm"
                    : "bg-emerald-500/20 text-emerald-200 border-emerald-300/40 backdrop-blur-sm"
                }`}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                Disponível
              </Badge>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="default"
                onClick={downloadCV}
                className={`h-12 px-6 transition-all duration-700 font-semibold relative overflow-hidden group ${
                  isScrolled
                    ? "border-2 border-gray-300 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-gray-200/50"
                    : "border-2 border-blue-300/40 text-blue-100 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-blue-100/15 hover:border-white/30 backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-white/10"
                } transform hover:scale-105 hover:-translate-y-1`}
              >
                <Download className="w-5 h-5 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                CV
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="default"
                className={`h-12 px-6 transition-all duration-700 shadow-xl hover:shadow-2xl font-semibold relative overflow-hidden group ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
                    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-blue-400/30 hover:shadow-blue-400/50"
                } transform hover:scale-105 hover:-translate-y-1`}
                asChild
              >
                <a
                  href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20contratar%20seus%20serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  Contratar
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="default"
                    className={`transition-all duration-700 px-3 py-2 font-semibold ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md"
                        : "bg-gradient-to-r from-blue-500/80 to-indigo-600/80 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md backdrop-blur-sm"
                    }`}
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/95 backdrop-blur-2xl border-l border-blue-200/30 shadow-2xl"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      VP
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="font-bold text-gray-900 leading-tight">
                        Vinícius Provasi
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-1 font-medium leading-tight">
                        <Zap className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          Engenheiro de Aplicação & Desenvolvedor Web
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-6 py-4 rounded-2xl transition-all duration-500 font-semibold relative overflow-hidden group ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-blue-600 border-l-4 border-blue-600 shadow-lg shadow-blue-100/50"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:text-blue-600 hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {activeSection === item.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-blue-600 rounded-full"
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Mobile Action Buttons */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <Badge
                      variant="outline"
                      className="w-full justify-center bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 py-2 font-semibold"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                      Disponível para Projetos
                    </Badge>

                    <Button
                      size="lg"
                      onClick={downloadCV}
                      className="w-full h-16 bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group transform hover:scale-105"
                    >
                      <Download className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10">📋 Download CV</span>
                    </Button>

                    <Button
                      size="lg"
                      className="w-full h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 font-bold text-lg py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group transform hover:scale-105"
                      asChild
                    >
                      <a
                        href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Phone className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                        <span className="relative z-10">Entrar em Contato</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 origin-left shadow-lg"
            style={{
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
            }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
