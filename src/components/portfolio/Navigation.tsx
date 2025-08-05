import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
    const cvUrl =
      "https://cdn.builder.io/o/assets%2Fec2c5318e0034d92aab1b1131d2d9363%2F9663f8c16c894daabf577c081dcd605a?alt=media&token=a6fa9cae-862d-4b13-a098-47484818e93f&apiKey=ec2c5318e0034d92aab1b1131d2d9363";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Vinicius-Provasi-Engenheiro-Aplicacao.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 font-sans ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50"
      }`}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-semibold transition-all duration-300 ${
                    isScrolled ? "bg-slate-800" : "bg-slate-700"
                  }`}
                >
                  VP
                </div>
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <div
                  className={`font-medium text-sm leading-tight transition-all duration-300 ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  V. Provasi
                </div>
                <div
                  className={`text-xs transition-all duration-300 font-medium leading-tight opacity-90 ${
                    isScrolled ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  <span className="whitespace-nowrap tracking-wide">Application Engineer</span>
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
                className={`text-xs font-medium transition-all duration-300 relative py-1.5 px-3 rounded-md ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-slate-800 bg-slate-100 border border-slate-200"
                      : "text-white bg-white/10 backdrop-blur-sm"
                    : isScrolled
                      ? "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled ? "bg-slate-800" : "bg-white"
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge
                variant="outline"
                className={`text-xs transition-all duration-300 font-medium hidden lg:flex px-2 py-1 ${
                  isScrolled
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-green-500/20 text-green-200 border-green-300/40 backdrop-blur-sm"
                }`}
              >
                <div className="w-1 h-1 bg-green-500 rounded-full mr-1"></div>
                Online
              </Badge>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="default"
                onClick={downloadCV}
                className={`h-8 px-3 transition-all duration-300 font-medium text-xs ${
                  isScrolled
                    ? "bg-slate-800 hover:bg-slate-900 text-white shadow-sm"
                    : "bg-slate-700 hover:bg-slate-800 text-white backdrop-blur-sm shadow-sm"
                }`}
              >
                <Download className="w-3 h-3 mr-1" />
                CV
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="default"
                className={`h-8 px-3 transition-all duration-300 font-medium text-xs ${
                  isScrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    : "bg-blue-600 hover:bg-blue-700 text-white backdrop-blur-sm shadow-sm"
                }`}
                asChild
              >
                <a
                  href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20contratar%20seus%20serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Contato
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="default"
                    className={`transition-all duration-300 px-2.5 py-1.5 font-medium text-sm ${
                      isScrolled
                        ? "bg-slate-800 hover:bg-slate-900 text-white"
                        : "bg-slate-700 hover:bg-slate-800 text-white backdrop-blur-sm"
                    }`}
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 sm:w-80 bg-white backdrop-blur-2xl border-l border-slate-200 shadow-2xl z-[9999]"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de Navegação</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                      VP
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="font-semibold text-sm text-slate-900 leading-tight">
                        Vinícius Provasi
                      </div>
                      <div className="text-xs text-slate-500 font-normal leading-tight">
                        <span className="whitespace-nowrap">
                          Engenheiro de Aplicação
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
                        className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-300 font-medium text-sm ${
                          activeSection === item.id
                            ? "bg-slate-100 text-slate-800 border-l-2 border-slate-800"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {activeSection === item.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-slate-800 rounded-full"
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Mobile Action Buttons */}
                  <div className="space-y-3 pt-6 border-t border-slate-200">
                    <Badge
                      variant="outline"
                      className="w-full justify-center bg-green-50 text-green-700 border-green-200 py-1.5 font-medium text-xs"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                      Disponível
                    </Badge>

                    <Button
                      size="lg"
                      onClick={downloadCV}
                      className="w-full h-10 bg-slate-800 hover:bg-slate-900 text-white font-medium text-sm py-2 rounded-md shadow-sm transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      CV
                    </Button>

                    <Button
                      size="lg"
                      className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium text-sm py-2 rounded-md transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contato
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
            className="absolute bottom-0 left-0 h-0.5 bg-slate-800 origin-left"
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
