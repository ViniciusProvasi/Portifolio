import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Code2,
  Zap,
  TrendingUp,
  Award,
  Star,
  Users,
  Download,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const metrics = [
    {
      value: "30%",
      label: "Redução no Tempo de Processos",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-600",
    },
    {
      value: "20%",
      label: "Aumento de Produtividade",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    {
      value: "4+",
      label: "Anos de Experiência",
      icon: Award,
      color: "from-blue-500 to-indigo-600",
    },
    {
      value: "7",
      label: "Projetos Entregues",
      icon: Code2,
      color: "from-purple-500 to-pink-600",
    },
  ];

  const coreSkills = [
    { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200" },
    {
      name: "Power Platform",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      name: "Automação",
      color: "bg-green-100 text-green-800 border-green-200",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 text-blue-400/30"
        >
          <Code2 size={48} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/5 text-purple-400/30"
        >
          <Zap size={40} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-1/3 text-emerald-400/30"
        >
          <TrendingUp size={36} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl blur-xl transform rotate-6 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-4 shadow-2xl border border-gray-200/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Faad2ee0e75b74a72a20bf4fddbeddbec%2Fa25500830e3e4389bb4723c7c824012e?format=webp&width=800"
                    alt="Vinícius Provasi - Engenheiro de Aplicação & Desenvolvedor de Sistemas"
                    className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl object-cover object-center shadow-lg transition-transform duration-500 hover:scale-105"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    style={{
                      opacity: 0,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  />
                </div>
                {/* Professional Status Indicator */}
                <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <span>Ativo</span>
                </div>
                {/* Professional Badge */}
                <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-blue-500/20 animate-bounce">
                  <span>Pro</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 shadow-sm font-medium"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  Desenvolvedor Especialista Disponível
                </Badge>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Vinícius Provasi
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                    Engenheiro de Aplicação
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-3xl lg:text-4xl mt-1">
                    & Desenvolvedor de Sistemas
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-xl text-gray-600 leading-relaxed font-medium"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Especialista em{" "}
                  <span className="font-semibold text-blue-600">
                    automação de processos empresariais
                  </span>{" "}
                  e desenvolvimento de sistemas corporativos. Experiência comprovada
                  em{" "}
                  <span className="font-semibold text-purple-600">
                    Power Platform
                  </span>{" "}
                  e tecnologias de desenvolvimento como{" "}
                  <span className="font-semibold text-cyan-600">
                    React e TypeScript
                  </span>
                  .
                </motion.p>
              </div>
            </div>

            {/* Key Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-lg">
                    Proposta de Valor
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Desenvolvo soluções que geram{" "}
                    <span className="font-bold text-emerald-600">
                      resultados comprovados
                    </span>
                    : redução de 30% no tempo de processos administrativos e 
                    aumento de 20% na produtividade organizacional através de 
                    automação e otimização de sistemas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 text-lg">
                <Code2 className="w-5 h-5 text-blue-600" />
                Tecnologias Principais
              </h4>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="outline"
                      className={`${skill.color} font-semibold shadow-sm hover:shadow-md transition-shadow duration-300 px-4 py-2 text-sm`}
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-4 text-base"
                asChild
              >
                <a href="mailto:viniciuslima1915@outlook.com.br">
                  <Mail className="w-4 h-4 mr-2" />
                  Iniciar Conversa
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-50 shadow-sm font-semibold px-8 py-4 text-base"
                asChild
              >
                <a
                  href="https://github.com/ViniciusProvasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver Portfólio
                </a>
              </Button>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-green-300 text-green-600 hover:bg-green-50 shadow-sm font-medium"
                asChild
              >
                <a
                  href="https://wa.me/5515998176173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 shadow-sm font-medium"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/vinicius-provasi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 shadow-sm font-medium"
                onClick={() => {
                  // Create comprehensive CV content
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
  </style>
</head>
<body>
  <div class="header">
    <h1>Vinícius Provasi de Sousa Lima</h1>
    <h2>Engenharia de Aplicação & Desenvolvimento de Sistemas</h2>
    <div class="contact-info">
      📍 Sorocaba, SP | 📞 (15) 99817-6173 | ✉️ viniciuslima1915@outlook.com.br<br>
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
      <div class="company">ACE Schmersal • Sorocaba, SP</div>
      <div class="position">Assistente Técnico Jr.</div>
      <div class="duration">Mar. 2025 – Atual</div>
      <ul class="achievements">
        <li>Desenvolvo aplicativos Power Apps, reduzindo em até <strong>30%</strong> o tempo de tarefas administrativas.</li>
        <li>Automação de fluxos com Power Automate e integração com SharePoint, garantindo rastreabilidade e versionamento.</li>
      </ul>
    </div>
    <div class="experience-item">
      <div class="company">ACE Schmersal • Sorocaba, SP</div>
      <div class="position">Auxiliar de Engenharia</div>
      <div class="duration">Jan. 2023 – Mar. 2025</div>
      <ul class="achievements">
        <li>Parametrização de códigos de produto em sistemas de automação.</li>
        <li>Criação de scripts que geraram <strong>20%</strong> de aumento de produtividade.</li>
        <li>Análise de dados operacionais para iniciativas de melhoria contínua.</li>
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
  </div>

  <div class="section">
    <h3>🚀 Projetos Destaque</h3>
    <ul>
      <li><strong>Gerenciamento de Proteções Mecânicas:</strong> App para cadastro, consulta e painel de indicadores de manutenção.</li>
      <li><strong>Catálogo de Botoeiras:</strong> Sistema de consulta de componentes elétricos integrado ao inventário.</li>
      <li><strong>Dashboard Financeiro:</strong> Relatórios interativos de budget, contas a pagar e consumo de materiais.</li>
      <li><strong>5S Digital:</strong> Gerenciamento e auditoria de 5S, com ações de melhoria para ambiente de trabalho.</li>
    </ul>
  </div>
</body>
</html>
                  `.trim();

                  const blob = new Blob([cvContent], { type: 'text/html;charset=utf-8' });
                  const link = document.createElement('a');
                  link.href = URL.createObjectURL(blob);
                  link.download = 'CV-Vinicius-Provasi-Engenheiro-Aplicacao.html';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  URL.revokeObjectURL(link.href);
                }}
              >
                <Download className="w-3 h-3 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap gap-6 text-sm text-gray-600 font-medium"
            >
              <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Sorocaba, SP</span>
              </div>
              <a
                href="https://wa.me/5515998176173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-green-500" />
                <span>(15) 99817-6173</span>
              </a>
              <a
                href="mailto:viniciuslima1915@outlook.com.br"
                className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>viniciuslima1915@outlook.com.br</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Results & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer">
                    <CardContent className="p-6 text-center relative">
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${metric.color} opacity-20 rounded-bl-3xl group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <metric.icon className="w-7 h-7 text-white" />
                      </div>
                      <div
                        className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                        style={{
                          fontFamily:
                            "Inter, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Card className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                      Status Atual
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    <span className="font-bold text-emerald-700">
                      Assistente Técnico Jr.
                    </span>{" "}
                    na ACE Schmersal
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    Cursando Tecnólogo em Análise e Desenvolvimento de Sistemas
                    (FIAP)
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                        Último Projeto
                      </h4>
                      <p className="text-gray-700 text-sm mb-3 font-medium leading-relaxed">
                        Desenvolvimento de aplicativo Power Apps que reduziu em
                        30% o tempo de tarefas administrativas na ACE Schmersal
                      </p>
                      <div className="flex gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs bg-blue-100 text-blue-700 border-blue-200 font-semibold"
                        >
                          Power Apps
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs bg-purple-100 text-purple-700 border-purple-200 font-semibold"
                        >
                          SharePoint
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs bg-green-100 text-green-700 border-green-200 font-semibold"
                        >
                          Automação
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-300 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl"
          onClick={() => {
            const element = document.getElementById("value-proposition");
            if (element) {
              const offsetTop = element.offsetTop - 100;
              window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
          }}
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium">Ver mais</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;