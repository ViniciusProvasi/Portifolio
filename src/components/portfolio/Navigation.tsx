import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Download, Phone, ChevronDown } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200"
          : "bg-transparent"
      }`}
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
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
                  isScrolled
                    ? "bg-blue-600 shadow-lg"
                    : "bg-white/20 backdrop-blur-sm border border-white/30"
                }`}
              >
                VP
              </div>
              <div className="hidden md:block">
                <div
                  className={`font-bold text-lg transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Vinícius Provasi
                </div>
                <div
                  className={`text-xs transition-colors duration-300 ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  Especialista em Desenvolvimento
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative py-2 px-1 ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-600"
                      : "text-white"
                    : isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
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
            <Badge
              variant="outline"
              className={`text-xs transition-all duration-300 ${
                isScrolled
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-white/20 text-white border-white/30 backdrop-blur-sm"
              }`}
            >
              Disponível
            </Badge>

            <Button
              variant="outline"
              size="sm"
              className={`transition-all duration-300 ${
                isScrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>

            <Button
              size="sm"
              className={`transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white text-blue-600 hover:bg-white/90"
              }`}
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contratar
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      VP
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Vinícius Provasi
                      </div>
                      <div className="text-xs text-gray-600">
                        Especialista em Desenvolvimento
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
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {activeSection === item.id && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Mobile Action Buttons */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <Badge
                      variant="outline"
                      className="w-full justify-center bg-green-50 text-green-700 border-green-200 py-2"
                    >
                      Disponível para Projetos
                    </Badge>

                    <Button variant="outline" size="lg" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>

                    <Button
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
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

      {/* Progress Bar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 origin-left"
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
