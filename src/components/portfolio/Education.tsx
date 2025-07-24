import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Star,
  CheckCircle2,
  Clock,
  TrendingUp,
  Target,
  Sparkles,
  ExternalLink,
  Brain,
  Code2,
  Zap,
  Trophy,
  Users,
  Building2,
  Rocket,
} from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "FIAP",
      location: "São Paulo, SP",
      period: "2024 – 2026",
      status: "Em curso",
      type: "Graduação",
      color: "bg-blue-100 text-blue-600",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      icon: Code2,
      currentProgress: 40,
      highlights: [
        "Desenvolvimento Web Full Stack",
        "Metodologias Ágeis e DevOps",
        "Banco de Dados e Cloud Computing",
        "Análise de Sistemas e UX/UI",
      ],
      relevantSubjects: [
        "Programação Orientada a Objetos",
        "Desenvolvimento Web",
        "Banco de Dados",
        "Engenharia de Software",
        "Arquitetura de Software",
        "DevOps e Cloud Computing",
      ],
      achievements: [
        "Participação em projetos práticos",
        "Desenvolvimento de aplicações empresariais",
        "Certificações Microsoft",
      ],
    },
    {
      degree: "Técnico em Automação Industrial",
      institution: "IFSP",
      location: "Boituva, SP",
      period: "2019 – 2021",
      status: "Concluído",
      type: "Ensino Técnico",
      color: "bg-green-100 text-green-600",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      icon: Zap,
      currentProgress: 100,
      highlights: [
        "Automação de Processos Industriais",
        "Sistemas de Controle e Supervisão",
        "Programação de CLPs",
        "Instrumentação e Sensores",
      ],
      relevantSubjects: [
        "Programação de CLPs",
        "Instrumentação Industrial",
        "Sistemas SCADA",
        "Redes Industriais",
        "Controle de Processos",
        "Manutenção Preventiva",
      ],
      achievements: [
        "Projeto de automação completa",
        "Certificação em programação de CLPs",
        "Estágio em automação industrial",
      ],
    },
    {
      degree: "Técnico em Logística",
      institution: "IFSP",
      location: "Boituva, SP",
      period: "2018 – 2019",
      status: "Concluído",
      type: "Ensino Técnico",
      color: "bg-purple-100 text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      icon: Trophy,
      currentProgress: 100,
      highlights: [
        "Gestão da Cadeia de Suprimentos",
        "Otimização de Processos Logísticos",
        "Controle de Estoque e Armazenagem",
        "Análise de Custos Logísticos",
      ],
      relevantSubjects: [
        "Supply Chain Management",
        "Gestão de Transportes",
        "Armazenagem e Distribuição",
        "Planejamento Logístico",
        "Controle de Qualidade",
        "Análise de Custos",
      ],
      achievements: [
        "Projeto de otimização logística",
        "Redução de custos em 15%",
        "Implementação de melhorias contínuas",
      ],
    },
  ];

  const certifications = [
    {
      name: "React – Desenvolvendo com JavaScript",
      issuer: "Alura",
      date: "Fev. 2025",
      status: "Concluído",
      credentialId: "ALURA-REACT",
      badge: "⚛️",
      description: "Desenvolvimento completo com React e JavaScript",
    },
    {
      name: "React Router & Componentes",
      issuer: "Alura",
      date: "Mar. 2025",
      status: "Em Progresso",
      credentialId: "ALURA-ROUTER",
      badge: "🔄",
      description: "Roteamento e componentização avançada em React",
    },
    {
      name: "JavaScript & TypeScript – Básico ao Avançado",
      issuer: "Udemy",
      date: "Mar. 2025",
      status: "Em Progresso",
      credentialId: "UDEMY-JS-TS",
      badge: "📜",
      description: "Programação completa em JavaScript e TypeScript",
    },
    {
      name: "Web Moderno – JavaScript, HTML5 & CSS3",
      issuer: "Udemy",
      date: "Set. 2021",
      status: "Concluído",
      credentialId: "UDEMY-WEB",
      badge: "🌐",
      description: "Desenvolvimento web moderno completo",
    },
    {
      name: "Java Básico, HTML5, CSS3, JavaScript",
      issuer: "Curso em Vídeo",
      date: "Jul. 2021",
      status: "Concluído",
      credentialId: "CEV-JAVA",
      badge: "☕",
      description: "Fundamentos de programação e desenvolvimento web",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "HTML5/CSS3",
        "JavaScript ES6+",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "RESTful APIs",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Microsoft Stack",
      items: [
        "Power Apps",
        "Power Automate",
        "SharePoint",
        "Power BI",
        "Office 365",
        "Azure",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "Ferramentas",
      items: ["Git", "Docker", "VS Code", "Figma", "Postman", "Jest"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-lg mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-600 bg-clip-text text-transparent mb-4">
            Formação & Certificações
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Minha jornada educacional combina{" "}
            <span className="font-semibold text-blue-600">
              formação técnica sólida
            </span>{" "}
            com{" "}
            <span className="font-semibold text-indigo-600">
              aprendizado contínuo
            </span>
            , sempre buscando as mais recentes tecnologias e metodologias do
            mercado.
          </p>
        </motion.div>

        <div className="space-y-16">
          {education.map((edu, index) => (
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
              <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg border-4 border-white z-10"></div>

              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 transform -translate-x-1/2"></div>

              <div
                className={`lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div
                    className={`h-2 bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo}`}
                  ></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <edu.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge className={`${edu.color} font-semibold mb-2`}>
                            {edu.type}
                          </Badge>
                          <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {edu.degree}
                          </CardTitle>
                        </div>
                      </div>
                      {edu.status === "Em curso" && (
                        <div className="text-right">
                          <div className="text-sm font-semibold text-blue-600 mb-1">
                            {edu.currentProgress}% Concluído
                          </div>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} h-2 rounded-full transition-all duration-1000`}
                              style={{ width: `${edu.currentProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-green-500" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge
                        className={`${
                          edu.status === "Concluído"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {edu.status}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                        Principais Destaques
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                          >
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                        Disciplinas Relevantes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantSubjects.map((subject, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-white hover:bg-blue-50 border-blue-200 text-blue-700"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-orange-500" />
                        Conquistas & Projetos
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Certificações & Competências
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Certificações que validam minhas habilidades e conhecimento
              atualizado nas principais tecnologias do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">{cert.badge}</div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        className={`text-xs px-2 py-1 ${
                          cert.status === "Concluído"
                            ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                            : cert.status === "Em Progresso"
                              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                              : "bg-gradient-to-r from-gray-500 to-slate-600 text-white"
                        }`}
                      >
                        {cert.status}
                      </Badge>
                      <span className="text-xs text-gray-500">{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden h-full">
                  <div
                    className={`h-1 bg-gradient-to-r ${skillSet.color}`}
                  ></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {skillSet.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillSet.items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-2 bg-gray-50 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-50 group-hover:to-pink-50 transition-all duration-300"
                        >
                          <Code2 className="w-3 h-3 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <Brain className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h3 className="text-3xl font-bold mb-4">
                  Aprendizado Contínuo
                </h3>
                <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                  Acredito que a{" "}
                  <span className="font-semibold bg-white/20 px-2 py-1 rounded">
                    educação nunca termina
                  </span>
                  . Estou sempre em busca de novos conhecimentos e desafios que
                  me permitam crescer profissionalmente e contribuir ainda mais
                  com o sucesso dos projetos e empresas.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Sempre Evoluindo
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Target className="w-3 h-3 mr-1" />
                    Focado em Resultados
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Users className="w-3 h-3 mr-1" />
                    Trabalho em Equipe
                  </Badge>
                </div>
                <p className="text-lg text-white/80 mb-8">
                  Se você está procurando um profissional{" "}
                  <span className="font-semibold text-white">
                    comprometido, dedicado e sempre disposto a aprender
                  </span>
                  , estou sempre pronto para novos desafios.
                </p>
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
                  <Rocket className="w-5 h-5 mr-2" />
                  Vamos Trabalhar Juntos
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
