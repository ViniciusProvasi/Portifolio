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
    learning: "📚"
  };

  const experiences = [
    {
      company: "ACE Schmersal",
      position: "Assistente Técnico Jr.",
      period: "Mar. 2025 – Atual",
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Liderança em desenvolvimento de aplicações Power Apps e automação de processos empresariais",
      achievements: [
        "Desenvolvi aplicativos Power Apps que reduziram 30% do tempo em tarefas administrativas",
        "Implementei automação de fluxos com Power Automate integrado ao SharePoint",
        "Garantia de rastreabilidade completa e controle de versionamento de processos",
      ],
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      impact: {
        metric: "30%",
        description: "Redução no tempo de processos",
      },
      current: true,
    },
    {
      company: "ACE Schmersal",
      position: "Auxiliar de Engenharia",
      period: "Jan. 2023 – Mar. 2025",
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Especialização em automação industrial e desenvolvimento de scripts para otimização",
      achievements: [
        "Parametrizei códigos de produto em sistemas de automação industrial",
        "Criei scripts personalizados que geraram 20% de aumento na produtividade",
        "Conduzi análises de dados operacionais para iniciativas de melhoria contínua",
      ],
      technologies: [
        "Automação Industrial",
        "Scripts Python",
        "Análise de Dados",
        "SQL",
      ],
      impact: {
        metric: "20%",
        description: "Aumento de produtividade",
      },
      current: false,
    },
    {
      company: "UP Serviços",
      position: "Auxiliar Administrativo (Engenharia de Aplicação)",
      period: "Jan. 2022 – Jun. 2022",
      location: "Boituva, SP",
      type: "Tempo Integral",
      description:
        "Suporte técnico especializado em projetos de aplicação e documentação",
      achievements: [
        "Prestei suporte técnico em projetos de aplicação industrial",
        "Elaborei relatórios técnicos detalhados e documentação de processos",
        "Gerenciei controle documental e prazos de entrega",
      ],
      technologies: [
        "Documentação Técnica",
        "Relatórios",
        "Controle de Processos",
      ],
      impact: {
        metric: "100%",
        description: "Organização documental",
      },
      current: false,
    },
    {
      company: "ACE Schmersal",
      position: "Aprendiz de Soluções",
      period: "Jan. 2021 – Dez. 2021",
      location: "Boituva, SP",
      type: "Aprendizagem",
      description:
        "Início da carreira com foco em organização e suporte técnico generalista",
      achievements: [
        "Organizei documentação técnica (ART) seguindo padrões da empresa",
        "Realizei conferência de demandas e controle de prazos",
        "Ofereci suporte generalista às equipes técnicas",
      ],
      technologies: ["Documentação", "Organização", "Suporte Técnico"],
      impact: {
        metric: "1º",
        description: "Experiência profissional",
      },
      current: false,
    },
  ];

  const companyInfo = {
    "ACE Schmersal": {
      sector: "Automação Industrial",
      size: "Multinacional",
      description:
        "Líder mundial em tecnologias de segurança para automação industrial",
    },
    "UP Serviços": {
      sector: "Engenharia",
      size: "Média Empresa",
      description:
        "Empresa especializada em serviços de engenharia de aplicação",
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
            <Badge variant="outline" className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 shadow-lg px-6 py-2">
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
            Mais de <span className="font-bold text-blue-600">4 anos</span> construindo soluções que transformam processos,
            automatizam tarefas e geram <span className="font-bold text-emerald-600">valor mensurável</span> para as organizações
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
              { value: "4+", label: "Anos de Experiência", color: "from-blue-500 to-indigo-600" },
              { value: "30%", label: "Redução Média de Tempo", color: "from-emerald-500 to-green-600" },
              { value: "7", label: "Projetos Entregues", color: "from-purple-500 to-pink-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-2xl hidden lg:flex lg:items-center lg:justify-center z-10">
                  <span className="text-2xl">{exp.current ? timelineIcons.current : timelineIcons.past}</span>
                </div>

                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
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
                                transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{achievement}</span>
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">
                  Pronto para Novos Desafios
                </h3>
              </div>
              <p className="text-blue-100 mb-6 text-lg">
                Com essa trajetória sólida em automação e desenvolvimento, estou preparado para levar sua empresa ao próximo nível.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
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
