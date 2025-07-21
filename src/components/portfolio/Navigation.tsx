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

  const trackLinkClick = (linkName: string, url: string) => {
    console.log(`Professional link accessed: ${linkName} -> ${url}`);
    // You can integrate analytics here (Google Analytics, etc.)
  };

  const downloadCV = () => {
    trackLinkClick('CV Download', 'CV-Vinicius-Provasi.html');
    // CV content in HTML format for better formatting
    const cvContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CV - Vinícius Provasi de Sousa Lima</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { color: #1e40af; margin: 0; font-size: 28px; }
          .header h2 { color: #64748b; margin: 5px 0; font-size: 18px; font-weight: normal; }
          .contact-info { margin: 15px 0; font-size: 14px; }
          .section { margin: 25px 0; }
          .section h3 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px; }
          .experience-item, .education-item { margin-bottom: 20px; }
          .company { font-weight: bold; color: #1e40af; }
          .position { font-weight: bold; margin: 5px 0; }
          .duration { color: #64748b; font-style: italic; }
          .achievements { margin-top: 8px; }
          .achievements li { margin: 3px 0; }
          .skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }
          .skill-tag { background: #eff6ff; color: #1e40af; padding: 5px 10px; border-radius: 15px; font-size: 12px; border: 1px solid #bfdbfe; }
          .projects-list li { margin: 8px 0; }
          .project-name { font-weight: bold; color: #1e40af; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Vinícius Provasi de Sousa Lima</h1>
          <h2>Engenharia de Aplicação & Desenvolvimento de Sistemas</h2>
          <div class="contact-info">
            📍 Boituva, SP | 📞 (15) 99817-6173 | ✉️ viniciuslima1915@outlook.com.br<br>
            🔗 <a href="https://github.com/ViniciusProvasi">GitHub</a> • <a href="https://www.linkedin.com/in/vinicius-provasi/">LinkedIn</a>
          </div>
        </div>

        <div class="section">
          <h3>🌟 Resumo Profissional</h3>
          <p>Profissional com <strong>4+ anos de experiência</strong> em automação de processos e desenvolvimento de sistemas digitais.</p>
          <p>Especialista em Power Apps, Power Automate, SharePoint e Power BI para otimização operacional e redução de custos.</p>
          <p>Forte capacidade analítica para identificação de gargalos e implementação de melhorias contínuas.</p>
        </div>

        <div class="section">
          <h3>🛠️ Competências Técnicas</h3>
          <div class="skills-grid">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">HTML5</span>
            <span class="skill-tag">CSS3</span>
            <span class="skill-tag">Power Apps</span>
            <span class="skill-tag">Power Automate</span>
            <span class="skill-tag">SharePoint</span>
            <span class="skill-tag">Power BI</span>
            <span class="skill-tag">Lean Manufacturing</span>
            <span class="skill-tag">Kaizen</span>
            <span class="skill-tag">Automação Industrial</span>
            <span class="skill-tag">Git</span>
          </div>
        </div>

        <div class="section">
          <h3>💼 Experiência Profissional</h3>

          <div class="experience-item">
            <div class="company">ACE Schmersal • Boituva, SP</div>
            <div class="position">Assistente Técnico Jr.</div>
            <div class="duration">Mar. 2025 – Atual</div>
            <ul class="achievements">
              <li>Desenvolvo aplicativos Power Apps, reduzindo em até <strong>30%</strong> o tempo de tarefas administrativas.</li>
              <li>Automação de fluxos com Power Automate e integração com SharePoint, garantindo rastreabilidade e versionamento.</li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="company">ACE Schmersal • Boituva, SP</div>
            <div class="position">Auxiliar de Engenharia</div>
            <div class="duration">Jan. 2023 – Mar. 2025</div>
            <ul class="achievements">
              <li>Parametrização de códigos de produto em sistemas de automação.</li>
              <li>Criação de scripts que geraram <strong>20%</strong> de aumento de produtividade.</li>
              <li>Análise de dados operacionais para iniciativas de melhoria contínua.</li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="company">UP Serviços • Boituva, SP</div>
            <div class="position">Auxiliar Administrativo (Engenharia de Aplicação)</div>
            <div class="duration">Jan. 2022 – Jun. 2022</div>
            <ul class="achievements">
              <li>Suporte técnico em projetos de aplicação, elaboração de relatórios e controle documental.</li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="company">ACE Schmersal • Boituva, SP</div>
            <div class="position">Aprendiz de Soluções</div>
            <div class="duration">Jan. 2021 – Dez. 2021</div>
            <ul class="achievements">
              <li>Organização de documentação técnica (ART), conferência de demandas e suporte generalista.</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h3>🎓 Formação Acadêmica</h3>
          <div class="education-item">
            <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong><br>
            FIAP, SP (2024 – 2026, em curso)
          </div>
          <div class="education-item">
            <strong>Técnico em Automação Industrial</strong><br>
            IFSP, Boituva (2019 – 2021)
          </div>
          <div class="education-item">
            <strong>Técnico em Logística</strong><br>
            IFSP, Boituva (2018 – 2019)
          </div>
        </div>

        <div class="section">
          <h3>📜 Certificações</h3>
          <ul>
            <li><strong>Alura:</strong> React – Desenvolvendo com JavaScript (Fev. 2025)</li>
            <li><strong>Alura:</strong> React Router & Componentes (Mar. 2025 – em curso)</li>
            <li><strong>Udemy:</strong> JavaScript & TypeScript – Básico ao Avançado (Mar. 2025 – em curso)</li>
            <li><strong>Udemy:</strong> Web Moderno – JavaScript, HTML5 & CSS3 (Set. 2021 – Out. 2021)</li>
            <li><strong>Curso em Vídeo:</strong> Java Básico, HTML5, CSS3, JavaScript (Jul. – Out. 2021)</li>
          </ul>
        </div>

        <div class="section">
          <h3>��� Projetos Destaque</h3>
          <ul class="projects-list">
            <li><span class="project-name">Gerenciamento de Proteções Mecânicas (Power Apps / SharePoint):</span> App para cadastro, consulta e painel de indicadores de manutenção.</li>
            <li><span class="project-name">Catálogo de Botoeiras (Power Apps / SharePoint):</span> Sistema de consulta de componentes elétricos integrado ao inventário.</li>
            <li><span class="project-name">Agendamento de Veículos (Power Apps / SharePoint):</span> Ferramenta de controle de frota com alertas automáticos.</li>
            <li><span class="project-name">Dashboard Financeiro (Power BI):</span> Relatórios interativos de budget, contas a pagar e consumo de materiais.</li>
            <li><span class="project-name">Enquete de Qualidade (Forms, Power Automate, Power BI):</span> Workflow automatizado de coleta de feedback e análise de satisfação.</li>
            <li><span class="project-name">Aplicativo Gerencial Elevadores (Forms, Power Apps, SharePoint, Power BI, SQL):</span> Solução completa desde solicitação de orçamento até entrega.</li>
            <li><span class="project-name">5S Digital (Power Apps, SharePoint, Power BI):</span> Gerenciamento e auditoria de 5S, com ações de melhoria para ambiente de trabalho.</li>
          </ul>
        </div>

        <div class="section">
          <h3>🌐 Idiomas</h3>
          <p><strong>Inglês:</strong> Intermediário (KNN Idiomas, 2024 – 2026)</p>
        </div>
      </body>
      </html>
    `;

    // Create and download the CV as HTML file
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
          ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gradient-to-r from-blue-200/30 to-purple-200/30"
          : "bg-gradient-to-r from-blue-900/80 via-indigo-900/85 to-purple-900/80 backdrop-blur-xl border-b border-gradient-to-r from-blue-400/20 to-purple-400/20"
      } before:absolute before:inset-0 before:bg-gradient-to-r ${
        isScrolled
          ? "before:from-white/10 before:to-gray-50/10"
          : "before:from-blue-600/10 before:via-indigo-600/10 before:to-purple-600/10"
      } before:pointer-events-none`}
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
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-50" />
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg transform scale-110" />
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
                className={`text-sm font-semibold transition-all duration-500 relative py-3 px-4 rounded-xl group overflow-hidden ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg shadow-blue-100/50 border border-blue-200/50"
                      : "text-white bg-gradient-to-r from-white/20 to-blue-100/20 backdrop-blur-lg shadow-xl shadow-white/10 border border-white/20"
                    : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:shadow-lg hover:shadow-gray-100/50"
                      : "text-blue-100 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-blue-100/15 hover:backdrop-blur-lg hover:shadow-lg hover:shadow-white/5"
                } before:absolute before:inset-0 before:bg-gradient-to-r ${
                  isScrolled
                    ? "before:from-blue-500/0 before:to-purple-500/0 hover:before:from-blue-500/5 hover:before:to-purple-500/5"
                    : "before:from-white/0 before:to-blue-300/0 hover:before:from-white/5 hover:before:to-blue-300/5"
                } before:transition-all before:duration-500`}
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

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="default"
                onClick={downloadCV}
                className={`h-12 px-6 transition-all duration-700 font-semibold relative overflow-hidden group ${
                  isScrolled
                    ? "border-2 border-gray-300 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-gray-200/50"
                    : "border-2 border-blue-300/40 text-blue-100 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-blue-100/15 hover:border-white/30 backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-white/10"
                } before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/0 before:to-purple-500/0 hover:before:from-blue-500/10 hover:before:to-purple-500/10 before:transition-all before:duration-500 transform hover:scale-105 hover:-translate-y-1`}
              >
                <Download className="w-5 h-5 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                CV
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="default"
                className={`h-12 px-6 transition-all duration-700 shadow-xl hover:shadow-2xl font-semibold relative overflow-hidden group ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
                    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-blue-400/30 hover:shadow-blue-400/50"
                } before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/0 before:to-white/0 hover:before:from-white/10 hover:before:via-white/5 hover:before:to-white/10 before:transition-all before:duration-500 transform hover:scale-105 hover:-translate-y-1`}
                asChild
              >
                <a
                  href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20contratar%20seus%20serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLinkClick('WhatsApp Contratar', 'https://wa.me/5515998176173')}
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
                    variant="ghost"
                    size="default"
                    className={`transition-all duration-700 px-3 py-2 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-blue-100 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/95 backdrop-blur-2xl border-l border-gradient-to-b from-blue-200/30 to-purple-200/30 shadow-2xl"
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
                        } before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/0 before:to-purple-500/0 hover:before:from-blue-500/5 hover:before:to-purple-500/5 before:transition-all before:duration-500`}
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
                      onClick={downloadCV}
                      className="w-full h-16 border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group transform hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                      <Download className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10">Download CV</span>
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
                        onClick={() => trackLinkClick('WhatsApp Mobile', 'https://wa.me/5515998176173')}
                        className="flex items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
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
