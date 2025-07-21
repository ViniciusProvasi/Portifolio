import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
<<<<<<< HEAD
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
=======
import { GraduationCap, Calendar, MapPin, BookOpen, Award, ExternalLink } from "lucide-react";
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9

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
      ],
      current: true,
    },
    {
      degree: "Técnico em Automaç��o Industrial",
      institution: "IFSP",
      location: "Boituva, SP",
      period: "2019 – 2021",
      status: "Concluído",
      type: "Técnico",
      color: "bg-green-100 text-green-600",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      icon: Building2,
      highlights: [
        "Sistemas de Controle e Automação",
        "Programação de CLPs",
        "Instrumentação Industrial",
        "Redes Industriais",
      ],
      relevantSubjects: [
        "Controladores Lógicos Programáveis",
        "Sistemas SCADA",
        "Instrumentação",
        "Redes Industriais",
      ],
      current: false,
    },
    {
      degree: "Técnico em Logística",
      institution: "IFSP",
      location: "Boituva, SP",
      period: "2018 – 2019",
      status: "Concluído",
      type: "Técnico",
      color: "bg-orange-100 text-orange-600",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-600",
      icon: TrendingUp,
      highlights: [
        "Gestão da Cadeia de Suprimentos",
        "Análise de Processos Logísticos",
        "Controle de Estoque",
        "Gestão de Qualidade",
      ],
      relevantSubjects: [
        "Gestão de Estoques",
        "Logística Empresarial",
        "Controle de Qualidade",
        "Gestão de Processos",
      ],
      current: false,
    },
  ];

  const certifications = [
    {
      title: "React – Desenvolvendo com JavaScript",
      provider: "Alura",
      date: "Fev. 2025",
      status: "Concluído",
      type: "Frontend",
      hours: "40h",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-blue-600",
      icon: Code2,
    },
    {
      title: "React Router & Componentes",
      provider: "Alura",
      date: "Mar. 2025",
      status: "Em curso",
      type: "Frontend",
      hours: "32h",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      icon: Zap,
      progress: 75,
    },
    {
      title: "JavaScript & TypeScript – Básico ao Avançado",
      provider: "Udemy",
      date: "Mar. 2025",
      status: "Em curso",
      type: "Desenvolvimento",
      hours: "60h",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-orange-600",
      icon: Brain,
      progress: 65,
    },
    {
      title: "Web Moderno – JavaScript, HTML5 & CSS3",
      provider: "Udemy",
      date: "Set. 2021 – Out. 2021",
      status: "Concluído",
      type: "Frontend",
      hours: "97h",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      icon: BookOpen,
    },
    {
      title: "Java Básico, HTML5, CSS3, JavaScript",
      provider: "Curso em Vídeo",
      date: "Jul. – Out. 2021",
      status: "Concluído",
      type: "Desenvolvimento",
      hours: "80h",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      icon: Trophy,
    },
  ];

  const skills = [
    {
      name: "Desenvolvimento Web",
      level: 85,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Automação Industrial",
      level: 90,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Análise de Sistemas",
      level: 80,
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Gestão de Processos",
      level: 75,
      color: "from-orange-500 to-red-600",
    },
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: "3",
      label: "Formações Técnicas",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Award,
      value: "5+",
      label: "Certificações",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Clock,
      value: "300+",
      label: "Horas de Estudo",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Target,
      value: "2024",
      label: "Início Superior",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-600/20 rounded-full blur-3xl"
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
        {/* Enhanced Header */}
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
              className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-indigo-200 shadow-lg px-6 py-2"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Formação Acadêmica
            </Badge>
          </motion.div>

<<<<<<< HEAD
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Base Sólida em
            </span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tecnologia e Inovação
            </span>
          </h2>
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${edu.color} flex items-center justify-center mb-3`}
                      >
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2 text-sm">Principais Disciplinas:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {edu.subjects?.slice(0, 3).map((subject, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {edu.type}
                        </Badge>
                        <Badge
                          variant={
                            edu.status === "Em curso" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9

          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Formação técnica robusta combinada com{" "}
            <span className="font-bold text-indigo-600">
              educação superior em andamento
            </span>{" "}
            e
            <span className="font-bold text-purple-600">
              {" "}
              certificações especializadas
            </span>{" "}
            para manter-me sempre atualizado com as tecnologias mais modernas do
            mercado.
          </p>

          {/* Enhanced Stats Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}
                >
<<<<<<< HEAD
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

        {/* Enhanced Education Timeline */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Trajetória Acadêmica
              </span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Formação progressiva e estratégica para construir uma base sólida
              em tecnologia
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

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
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full border-4 border-white shadow-2xl hidden lg:flex lg:items-center lg:justify-center z-10">
                  <edu.icon className="w-8 h-8 text-white" />
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
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Current education indicator */}
                      {edu.current && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      )}

                      <CardHeader className="pb-6 relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradientFrom} ${edu.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <edu.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                {edu.degree}
                              </CardTitle>
                              {edu.current && (
                                <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 text-xs">
                                  Em Curso
                                </Badge>
                              )}
                            </div>
                            <p
                              className={`bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} bg-clip-text text-transparent font-bold text-lg`}
                            >
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-indigo-500" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-purple-500" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* Progress Bar for current education */}
                        {edu.current && edu.currentProgress && (
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-600 font-medium">
                                Progresso do Curso
                              </span>
                              <span className="text-gray-900 font-bold">
                                {edu.currentProgress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className={`bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} h-2 rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${edu.currentProgress}%`,
                                }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        )}
                      </CardHeader>

                      <CardContent className="space-y-6 relative z-10">
                        {/* Highlights */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            Principais Destaques
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {edu.highlights.map((highlight, hIndex) => (
                              <motion.div
                                key={hIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: hIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Relevant Subjects */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-indigo-600" />
                            Disciplinas Relevantes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantSubjects.map((subject, sIndex) => (
                              <motion.div
                                key={sIndex}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Badge
                                  variant="outline"
                                  className={`bg-gradient-to-r ${edu.gradientFrom}/10 ${edu.gradientTo}/10 border-gray-200 hover:border-gray-300 transition-all duration-300 px-3 py-1 font-medium`}
                                >
                                  {subject}
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
=======
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                            {cert.description}
                          </p>
                          <p className="text-blue-600 font-medium text-sm mb-1">
                            {cert.provider} {cert.hours && `• ${cert.hours}`}
                          </p>
                          <p className="text-gray-500 text-sm">{cert.date}</p>
                        </div>
                        <Badge
                          variant={
                            cert.status === "Em curso" ? "default" : "secondary"
                          }
                          className="text-xs flex-shrink-0"
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Formação Sólida em Tecnologia
                </h3>
                <p className="text-gray-600 mb-6">
                  Combinando formação acadêmica com certificações práticas para entregar soluções de qualidade.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={() => {
                      const message = `Olá Vinícius!%0D%0A%0D%0AVi sua formação acadêmica e certificações.%0D%0A%0D%0AGostaria de conversar sobre:%0D%0A- Sua experiência com as tecnologias%0D%0A- Projetos acadêmicos desenvolvidos%0D%0A- Aplicação prática dos conhecimentos%0D%0A%0D%0APodemos agendar uma conversa?`;
                      window.open(`https://wa.me/5515998176173?text=${message}`, '_blank');
                    }}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Conversar sobre Formação
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      window.open('https://www.fiap.com.br/graduacao/tecnologo/analise-desenvolvimento-sistemas/', '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Curso FIAP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
>>>>>>> f44332e3fa5f03f8e0a5eb283042ed7a427a73b9
        </div>

        {/* Enhanced Certifications */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certificações e Cursos
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sempre me mantendo atualizado com as tecnologias mais modernas do
              mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-xl hover:shadow-xl transition-all duration-300 relative">
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      className={`text-xs px-2 py-1 ${
                        cert.status === "Concluído"
                          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                          : "bg-gradient-to-r from-orange-500 to-yellow-600 text-white"
                      }`}
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradientFrom} ${cert.gradientTo} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                      >
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                          {cert.title}
                        </CardTitle>
                        <p
                          className={`bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo} bg-clip-text text-transparent font-semibold`}
                        >
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{cert.hours}</span>
                      </div>
                    </div>

                    {/* Progress bar for ongoing courses */}
                    {cert.progress && (
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600 font-medium">
                            Progresso
                          </span>
                          <span className="text-gray-900 font-bold">
                            {cert.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo} h-2 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${cert.progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    )}

                    <Badge
                      variant="outline"
                      className="w-full justify-center py-2"
                    >
                      {cert.type}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Level */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Nível de Conhecimento
              </span>
            </h3>
            <p className="text-gray-600">
              Competências adquiridas através da formação e experiência prática
            </p>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-gray-900">{skill.name}</h4>
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full shadow-sm`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
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
          className="text-center"
        >
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">
                  Sempre Aprendendo e Evoluindo
                </h3>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <p className="text-indigo-100 mb-8 text-xl max-w-3xl mx-auto">
                Minha jornada de aprendizado continua todos os dias. Com uma
                base sólida em tecnologia e sede constante por conhecimento,
                estou sempre pronto para novos desafios.
              </p>
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
