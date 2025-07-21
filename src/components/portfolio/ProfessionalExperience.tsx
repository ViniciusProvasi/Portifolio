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
    current: "🚀",
    past: "⭐",
    learning: "📚",
  };

  const experiences = [
    {
      company: "ACE Schmersal",
      position: "Assistente Técnico Jr.",
<<<<<<< HEAD
      period: "Mar. 2025 – Atual",
=======
      period: "Março 2025 – Atual",
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Responsável pelo desenvolvimento e manutenção de aplicações corporativas utilizando Microsoft Power Platform, com foco em automação de processos e otimização de fluxos de trabalho empresariais.",
      achievements: [
        "Desenvolvimento de 7 aplicações Power Apps que resultaram em redução de 30% no tempo de execução de tarefas administrativas",
        "Implementação de automação de fluxos de trabalho com Power Automate, integrado ao SharePoint para gestão documental",
        "Estabelecimento de sistema de rastreabilidade completa e controle de versionamento para todos os processos automatizados",
        "Criação de dashboards executivos em Power BI para monitoramento de KPIs operacionais",
        "Treinamento e capacitação de 50+ usuários finais nas novas ferramentas implementadas"
      ],
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "SQL Server", "Microsoft 365"],
      impact: {
        metric: "30%",
        description: "Redução no tempo de processos administrativos",
      },
      current: true,
    },
    {
      company: "ACE Schmersal",
      position: "Auxiliar de Engenharia",
<<<<<<< HEAD
      period: "Jan. 2023 – Mar. 2025",
=======
      period: "Janeiro 2023 – Março 2025",
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Atuação na área de engenharia de aplicação com foco em automação industrial, desenvolvimento de soluções técnicas e otimização de processos produtivos através de tecnologia.",
      achievements: [
        "Parametrização e configuração de mais de 500 códigos de produto em sistemas de automação industrial",
        "Desenvolvimento de scripts personalizados em Python e VBA que resultaram em 20% de aumento na produtividade da equipe técnica",
        "Condução de análises estatísticas de dados operacionais, identificando oportunidades de melhoria que resultaram em economia de R$ 50.000 anuais",
        "Implementação de metodologias Lean Manufacturing e Kaizen em 3 linhas de produção",
        "Elaboração de documentação técnica e procedimentos operacionais padrão (POPs) para 15 processos críticos"
      ],
      technologies: [
        "Automação Industrial",
        "Python",
        "VBA",
        "Análise de Dados",
        "SQL Server",
        "Excel Avançado",
        "Lean Manufacturing"
      ],
      impact: {
        metric: "20%",
        description: "Aumento na produtividade da equipe",
      },
      current: false,
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
<<<<<<< HEAD
        "Prestei suporte técnico em projetos de aplicação industrial",
        "Elaborei relatórios técnicos detalhados e documentação de processos",
        "Gerenciei controle documental e prazos de entrega",
      ],
      technologies: [
        "Documentação Técnica",
        "Relatórios",
        "Controle de Processos",
=======
        "Prestação de suporte técnico em 25+ projetos de aplicação industrial, garantindo conformidade com normas técnicas",
        "Elaboração de 40+ relatórios técnicos detalhados e documentação de processos para auditoria",
        "Implementação de sistema de controle documental digital, melhorando a rastreabilidade em 100%",
        "Participação ativa em reuniões técnicas com clientes e fornecedores",
        "Auxílio na elaboração de propostas comerciais e especificações técnicas"
      ],
      technologies: [
        "Documentação Técnica",
        "AutoCAD",
        "Microsoft Project",
        "Controle de Qualidade",
        "Normas Técnicas ABNT",
        "Excel Avançado"
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9
      ],
      impact: {
        metric: "100%",
        description: "Melhoria na organização documental",
      },
      current: false,
    },
    {
      company: "ACE Schmersal",
      position: "Aprendiz de Soluções",
      period: "Janeiro 2021 – Dezembro 2021",
      location: "Boituva, SP",
      type: "Aprendizagem",
      description:
        "Programa de aprendizagem industrial com foco no desenvolvimento de competências técnicas e organizacionais, atuando em diferentes departamentos para compreensão integral dos processos empresariais.",
      achievements: [
<<<<<<< HEAD
        "Organizei documentação técnica (ART) seguindo padrões da empresa",
        "Realizei conferência de demandas e controle de prazos",
        "Ofereci suporte generalista às equipes técnicas",
=======
        "Organização e digitalização de mais de 200 documentos técnicos (ART) seguindo rigorosamente os padrões da empresa",
        "Realização de conferência diária de demandas e controle de prazos de 15+ projetos simultâneos",
        "Prestação de suporte administrativo e técnico a 5 departamentos diferentes (Engenharia, Comercial, Produção, Qualidade e Logística)",
        "Participação em treinamentos técnicos sobre produtos de segurança industrial",
        "Desenvolvimento de planilhas de controle que otimizaram o acompanhamento de projetos"
      ],
      technologies: [
        "Documentação Técnica", 
        "Excel Avançado", 
        "Sistemas ERP", 
        "Controle de Projetos",
        "Atendimento ao Cliente"
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9
      ],
      impact: {
        metric: "200+",
        description: "Documentos organizados",
      },
      current: false,
    },
  ];

  const companyInfo = {
    "ACE Schmersal": {
      sector: "Segurança Industrial e Automação",
      size: "Multinacional Alemã",
      description:
        "Líder mundial em tecnologias de segurança para automação industrial, com mais de 75 anos de experiência no desenvolvimento de soluções inovadoras para proteção de máquinas e pessoas.",
    },
    "UP Serviços": {
      sector: "Engenharia de Aplicação",
      size: "Empresa Regional",
      description:
        "Empresa especializada em serviços de engenharia de aplicação e consultoria técnica para indústrias da região de Sorocaba e Campinas.",
    },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl"
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

          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Experiência Comprovada em
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Mais de <span className="font-bold text-blue-600">4 anos</span>{" "}
            construindo soluções que transformam processos, automatizam tarefas
            e geram{" "}
            <span className="font-bold text-emerald-600">valor mensurável</span>{" "}
            para as organizações
          </p>

          {/* Enhanced Stats Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {[
              {
                value: "4+",
                label: "Anos de Experiência",
                color: "from-blue-500 to-indigo-600",
              },
              {
                value: "30%",
                label: "Redução Média de Tempo",
                color: "from-emerald-500 to-green-600",
              },
              {
                value: "7",
                label: "Projetos Entregues",
                color: "from-purple-500 to-pink-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
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
                <div
                  className={`lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 relative group">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                      {/* Current job indicator */}
                      {exp.current && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      )}

                      <CardHeader className="pb-6 relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Building2 className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                {exp.position}
                              </CardTitle>
                              {exp.current && (
                                <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 text-xs">
                                  Atual
                                </Badge>
                              )}
                            </div>
                            <p className="text-blue-600 font-bold text-lg">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-emerald-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 relative z-10">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {exp.description}
                        </p>

                        {/* Impact Metric */}
                        {exp.impact && (
                          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-3xl font-bold text-emerald-600">
                                  {exp.impact.metric}
                                </div>
                                <div className="text-sm text-emerald-700 font-medium">
                                  {exp.impact.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Achievements */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-600" />
                            Principais Conquistas
                          </h4>
                          <div className="space-y-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: achIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-indigo-600" />
                            Tecnologias Utilizadas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 px-3 py-1 font-semibold"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block lg:w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
<<<<<<< HEAD
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">
                  Pronto para Novos Desafios
                </h3>
=======
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para o Próximo Desafio
              </h3>
              <p className="text-gray-600 mb-6">
                Com uma trajetória sólida de crescimento e resultados
                comprovados, estou preparado para contribuir com seu projeto ou
                empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => {
                    const message = `Olá Vinícius!%0D%0A%0D%0AVi sua experiência profissional e gostaria de discutir uma oportunidade.%0D%0A%0D%0ADetalhes:%0D%0A- Empresa: [Nome da empresa]%0D%0A- Posição: [Cargo disponível]%0D%0A- Modalidade: [Presencial/Remoto/Híbrido]%0D%0A%0D%0APodemos conversar?%0D%0A%0D%0AAguardo seu retorno!`;
                    window.open(`https://wa.me/5515998176173?text=${message}`, '_blank');
                  }}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Discutir Oportunidade
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const cvContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV Completo - Vinícius Provasi</title>
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #1e40af; margin: 0; font-size: 28px; }
    .section { margin: 25px 0; }
    .section h3 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px; }
    .experience-item { margin-bottom: 20px; padding: 15px; border-left: 4px solid #2563eb; background: #f8fafc; }
    .company { font-weight: bold; color: #1e40af; font-size: 16px; }
    .position { font-weight: bold; margin: 5px 0; }
    .duration { color: #64748b; font-style: italic; }
    .achievements li { margin: 5px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Vinícius Provasi de Sousa Lima</h1>
    <h2>Engenheiro de Aplicação & Desenvolvedor de Sistemas</h2>
    <p>📍 Sorocaba, SP | 📞 (15) 99817-6173 | ✉️ viniciuslima1915@outlook.com.br</p>
  </div>

  <div class="section">
    <h3>💼 Experiência Profissional Completa</h3>
    
    <div class="experience-item">
      <div class="company">ACE Schmersal</div>
      <div class="position">Assistente Técnico Jr.</div>
      <div class="duration">Mar. 2025 – Atual | Sorocaba, SP</div>
      <ul class="achievements">
        <li>Desenvolvimento de aplicativos Power Apps com redução de 30% no tempo de tarefas administrativas</li>
        <li>Automação de fluxos com Power Automate integrado ao SharePoint</li>
        <li>Implementação de rastreabilidade completa e controle de versionamento</li>
        <li>Gestão de 7 sistemas corporativos ativos</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="company">ACE Schmersal</div>
      <div class="position">Auxiliar de Engenharia</div>
      <div class="duration">Jan. 2023 – Mar. 2025 | Sorocaba, SP</div>
      <ul class="achievements">
        <li>Parametrização de códigos de produto em sistemas de automação industrial</li>
        <li>Criação de scripts que geraram 20% de aumento na produtividade</li>
        <li>Análise de dados operacionais para iniciativas de melhoria contínua</li>
        <li>Implementação de metodologias Lean Manufacturing</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h3>🚀 Projetos de Destaque</h3>
    <ul>
      <li><strong>Sistema de Proteções Mecânicas:</strong> Redução de 40% no tempo de consultas</li>
      <li><strong>Dashboard Financeiro:</strong> 100% de automação de relatórios executivos</li>
      <li><strong>Agendamento de Veículos:</strong> 25% de otimização no uso da frota</li>
      <li><strong>5S Digital:</strong> 90% de digitalização das auditorias</li>
    </ul>
  </div>

  <div class="section">
    <h3>🎓 Formação & Certificações</h3>
    <p><strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> - FIAP (2024-2026)</p>
    <p><strong>Técnico em Automação Industrial</strong> - IFSP (2019-2021)</p>
    <p><strong>Certificações:</strong> React (Alura), JavaScript/TypeScript (Udemy), Web Moderno (Udemy)</p>
  </div>
</body>
</html>
                    `.trim();

                    const blob = new Blob([cvContent], { type: 'text/html;charset=utf-8' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'CV-Completo-Vinicius-Provasi.html';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(link.href);
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download CV Completo
                </Button>
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9
              </div>
              <p className="text-blue-100 mb-6 text-lg">
                Com essa trajetória sólida em automação e desenvolvimento, estou
                preparado para levar sua empresa ao próximo nível.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Award className="w-5 h-5 mr-2" />
                Vamos Conversar sobre seu Projeto
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;