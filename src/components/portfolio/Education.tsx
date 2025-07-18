import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

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
    },
    {
      degree: "Técnico em Automação Industrial",
      institution: "IFSP",
      location: "Boituva, SP",
      period: "2019 – 2021",
      status: "Concluído",
      type: "Técnico",
      color: "bg-green-100 text-green-600",
    },
    {
      degree: "Técnico em Logística",
      institution: "IFSP",
      location: "Boituva, SP",
      period: "2018 – 2019",
      status: "Concluído",
      type: "Técnico",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const certifications = [
    {
      title: "React – Desenvolvendo com JavaScript",
      provider: "Alura",
      date: "Fev. 2025",
      status: "Concluído",
    },
    {
      title: "React Router & Componentes",
      provider: "Alura",
      date: "Mar. 2025",
      status: "Em curso",
    },
    {
      title: "JavaScript & TypeScript – Básico ao Avançado",
      provider: "Udemy",
      date: "Mar. 2025",
      status: "Em curso",
    },
    {
      title: "Web Moderno – JavaScript, HTML5 & CSS3",
      provider: "Udemy",
      date: "Set. 2021 – Out. 2021",
      status: "Concluído",
    },
    {
      title: "Java Básico, HTML5, CSS3, JavaScript",
      provider: "Curso em Vídeo",
      date: "Jul. – Out. 2021",
      status: "Concluído",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Formação Acadêmica
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Formação sólida em tecnologia com foco em desenvolvimento de
            sistemas e automação industrial
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Educação Formal
            </motion.h3>

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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Certificações & Cursos
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-blue-600 font-medium text-sm mb-1">
                            {cert.provider}
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
        </div>
      </div>
    </section>
  );
};

export default Education;
