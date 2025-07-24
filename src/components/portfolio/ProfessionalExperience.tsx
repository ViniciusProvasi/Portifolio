import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Target,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Award,
  Zap,
  Code2,
} from "lucide-react";

const ProfessionalExperience = () => {
  const timelineIcons = {
    current: "����",
    past: "⭐",
    learning: "📚",
  };

  const experiences = [
    {
      company: "ACE Schmersal",
      position: "Assistente Técnico Jr.",
      period: "Março 2025 – Atual",
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Responsável pelo desenvolvimento e manutenção de aplicações corporativas utilizando Microsoft Power Platform, com foco em automação de processos e otimização de fluxos de trabalho empresariais.",
      achievements: [
        "Desenvolvimento de 7 aplicações Power Apps que resultaram em redução de 30% no tempo de execução de tarefas administrativas",
        "Implementação de automação de fluxos de trabalho com Power Automate, integrado ao SharePoint para gestão documental",
        "Estabelecimento de sistema de rastreabilidade completa e controle de versionamento para todos os processos automatizados",
        "Criação de dashboards executivos em Power BI para monitoramento de KPIs operacionais",
        "Treinamento e capacitação de 50+ usuários finais nas novas ferramentas implementadas",
      ],
      technologies: [
        "Power Apps",
        "Power Automate",
        "SharePoint",
        "Power BI",
        "SQL Server",
        "Microsoft 365",
      ],
      impact: {
        metric: "30%",
        description: "Redução no tempo de processos",
      },
      current: true,
      color: "from-blue-600 to-indigo-600",
    },
    {
      company: "ACE Schmersal",
      position: "Auxiliar de Engenharia",
      period: "Janeiro 2023 – Março 2025",
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Atuação em projetos de engenharia de aplicação com responsabilidades em parametrização de sistemas, desenvolvimento de soluções automatizadas e análise de dados operacionais para melhoria contínua.",
      achievements: [
        "Parametrização e configuração de códigos de produto em sistemas de automação industrial, garantindo precisão técnica",
        "Desenvolvimento de scripts e ferramentas de automação que geraram aumento de 20% na produtividade operacional",
        "Análise detalhada de dados operacionais para identificação de oportunidades de melhoria contínua e otimização",
        "Colaboração com equipes multidisciplinares em projetos de inovação e implementação de novas tecnologias",
        "Documentação técnica abrangente e criação de procedimentos operacionais padronizados",
      ],
      technologies: [
        "Automação Industrial",
        "Scripts Python",
        "SQL",
        "Excel Avançado",
        "Sistemas ERP",
        "Lean Manufacturing",
      ],
      impact: {
        metric: "20%",
        description: "Aumento na produtividade",
      },
      current: false,
      color: "from-emerald-600 to-green-600",
    },
    {
      company: "UP Serviços",
      position: "Auxiliar Administrativo (Engenharia de Aplicação)",
      period: "Janeiro 2022 – Junho 2022",
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Suporte técnico especializado em projetos de engenharia de aplicação, com responsabilidades em documentação técnica, controle de qualidade e gestão de processos administrativos.",
      achievements: [
        "Prestação de suporte técnico em 25+ projetos de aplicação industrial, garantindo conformidade com normas técnicas",
        "Elaboração de 40+ relatórios técnicos detalhados e documentação de processos para auditoria",
        "Implementação de sistema de controle documental digital, melhorando a rastreabilidade em 100%",
        "Coordenação de atividades administrativas e técnicas com foco em qualidade e prazos de entrega",
        "Desenvolvimento de procedimentos de controle de qualidade e padronização de processos",
      ],
      technologies: [
        "Documentação Técnica",
        "Controle de Qualidade",
        "Normas Técnicas ABNT",
        "Excel Avançado",
        "Sistemas de Gestão",
        "AutoCAD Básico",
      ],
      impact: {
        metric: "100%",
        description: "Melhoria na rastreabilidade",
      },
      current: false,
      color: "from-purple-600 to-pink-600",
    },
    {
      company: "ACE Schmersal",
      position: "Aprendiz de Soluções",
      period: "Janeiro 2021 – Dezembro 2021",
      location: "Boituva, SP",
      type: "Programa de Aprendizagem",
      description:
        "Programa de aprendizagem industrial com foco no desenvolvimento de competências técnicas e organizacionais, atuando em diferentes departamentos para compreensão integral dos processos empresariais.",
      achievements: [
        "Organização e digitalização de mais de 200 documentos técnicos (ART) seguindo rigorosamente os padrões da empresa",
        "Realização de conferência diária de demandas e controle de prazos de 15+ projetos simultâneos",
        "Prestação de suporte administrativo e técnico a 5 departamentos diferentes (Engenharia, Comercial, Produção, Qualidade e Logística)",
        "Participação em treinamentos especializados e desenvolvimento de competências profissionais",
        "Contribuição para melhoria de processos internos através de sugestões e implementação de melhorias",
      ],
      technologies: [
        "Organização Documental",
        "Gestão de Projetos",
        "Sistemas ERP",
        "Controle de Projetos",
        "Atendimento ao Cliente",
        "Office 365",
      ],
      impact: {
        metric: "200+",
        description: "Documentos organizados",
      },
      current: false,
      color: "from-orange-600 to-red-600",
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "4+",
      label: "Anos de Experiência",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Target,
      value: "30%",
      label: "Redução de Tempo",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Users,
      value: "50+",
      label: "Usuários Treinados",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 shadow-lg px-6 py-2"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Trajetória Profissional
            </Badge>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Experiência Comprovada em
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Mais de <span className="font-bold text-blue-600">4 anos</span>{" "}
            construindo soluções que transformam processos, automatizam tarefas
            e geram{" "}
            <span className="font-bold text-emerald-600">valor mensurável</span>{" "}
            para as organizações.
          </p>

          {/* Enhanced Stats Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full hidden lg:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 last:mb-0 lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-2xl hidden lg:flex lg:items-center lg:justify-center z-10">
                  <span className="text-2xl">
                    {exp.current ? timelineIcons.current : timelineIcons.past}
                  </span>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`lg:w-5/12 ${
                    index % 2 === 0
                      ? "lg:mr-auto lg:pr-16"
                      : "lg:ml-auto lg:pl-16"
                  }`}
                >
                  <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 group">
                    <CardHeader className="relative overflow-hidden">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {exp.position}
                          </CardTitle>
                          <div className="text-lg font-semibold text-blue-600 mb-2">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
                            Atual
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-600" />
                          Principais Conquistas
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-purple-600" />
                          Tecnologias Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:scale-105 transition-transform duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metric */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-4 border-l-4 border-gradient-to-b from-blue-500 to-purple-600"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}
                          >
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                            >
                              {exp.impact.metric}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                              {exp.impact.description}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">
                  Pronto para o Próximo Desafio
                </h3>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <p className="text-blue-100 mb-8 text-xl max-w-3xl mx-auto">
                Com uma trajetória sólida em automação e desenvolvimento, estou
                preparado para
                <span className="font-bold text-white">
                  {" "}
                  contribuir significativamente
                </span>{" "}
                com o crescimento da sua empresa!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Vamos Conversar
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a
                    href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20sua%20experiência%20profissional%20e%20gostaria%20de%20conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    💬 WhatsApp Direto
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
