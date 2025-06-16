import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Download,
  Phone,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";
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

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold transition-all duration-500 relative overflow-hidden ${
                  isScrolled
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
                    : "bg-white/20 backdrop-blur-sm border border-white/30"
                }`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  VP
                </motion.div>
                {isScrolled && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl"
                  />
                )}
              </div>
              <div className="hidden md:flex flex-col justify-center">
                <div
                  className={`font-bold text-lg leading-tight transition-all duration-500 ${
                    isScrolled
                      ? "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                      : "text-white drop-shadow-sm"
                  }`}
                >
                  Vinícius Provasi
                </div>
                <div
                  className={`text-xs transition-colors duration-500 flex items-center gap-1 font-medium leading-tight ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  <Sparkles className="w-3 h-3 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    Engenheiro de Aplicação & Dev Web
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold transition-all duration-300 relative py-2 px-3 rounded-lg ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/20 backdrop-blur-sm"
                    : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
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
          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge
                variant="outline"
                className={`text-xs transition-all duration-500 font-semibold ${
                  isScrolled
                    ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200/50 shadow-sm"
                    : "bg-white/20 text-white border-white/30 backdrop-blur-sm"
                }`}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                Disponível
              </Badge>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className={`transition-all duration-500 font-semibold ${
                  isScrolled
                    ? "border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm"
                    : "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                }`}
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className={`transition-all duration-500 shadow-lg hover:shadow-xl font-semibold ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    : "bg-white text-blue-600 hover:bg-white/90"
                }`}
                onClick={() => scrollToSection("contact")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contratar
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
                    variant="ghost"
                    size="sm"
                    className={`transition-all duration-500 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      VP
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Vinícius Provasi
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                        <Zap className="w-3 h-3 text-blue-500" />
                        Engenheiro de Aplicação & Dev Web
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
                        className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 font-semibold ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border-l-4 border-blue-600 shadow-sm"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
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
                      variant="outline"
                      size="lg"
                      className="w-full border-gray-300 hover:bg-gray-50 font-semibold"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg font-semibold"
                      onClick={() => {
                        scrollToSection("contact");
                        setIsOpen(false);
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Entrar em Contato
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
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 origin-left shadow-lg"
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
