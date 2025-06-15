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
} from "lucide-react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "ACE Schmersal",
      position: "Assistente Técnico Jr.",
      period: "Mar. 2025 – Atual",
      location: "Sorocaba, SP",
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
      location: "Sorocaba, SP",
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
      type: "Estágio",
      description:
        "Suporte técnico especializado em projetos de aplicação e documentação",
      achievements: [
        "Prestei suporte técnico em projetos de aplicação industrial",
        "Elaborei relatórios técnicos detalhados e documentação de processos",
        "Implementei sistema de controle documental para rastreabilidade",
      ],
      technologies: [
        "Documentação Técnica",
        "Relatórios",
        "Controle de Qualidade",
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
      type: "Programa de Aprendizagem",
      description:
        "Início da carreira com foco em organização e suporte técnico generalista",
      achievements: [
        "Organizei documentação técnica (ART) seguindo padrões da empresa",
        "Realizei conferência de demandas e controle de prazos",
        "Prestei suporte generalista a diferentes departamentos",
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Trajetória Profissional
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experiência Comprovada em Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 4 anos entregando soluções que geram impacto real nos
            negócios
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden md:block ${
                      exp.current ? "bg-green-500" : "bg-blue-600"
                    }`}
                  ></div>

                  <Card className="ml-0 md:ml-20 hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl text-gray-900">
                              {exp.position}
                            </CardTitle>
                            {exp.current && (
                              <Badge
                                variant="default"
                                className="bg-green-100 text-green-800 text-xs"
                              >
                                Atual
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Impact Metric */}
                        <div className="bg-blue-50 rounded-lg p-4 text-center min-w-[120px]">
                          <div className="text-2xl font-bold text-blue-600">
                            {exp.impact.metric}
                          </div>
                          <div className="text-xs text-gray-600">
                            {exp.impact.description}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-green-600" />
                          Principais Realizações
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-gray-600 flex items-start gap-2 text-sm"
                            >
                              <span className="text-green-600 mt-1 flex-shrink-0">
                                •
                              </span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Tecnologias Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Company Info */}
                      {companyInfo[exp.company] && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">
                              Sobre a Empresa
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {companyInfo[exp.company].sector}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {companyInfo[exp.company].description}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
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
                <Button size="lg">
                  <Target className="w-4 h-4 mr-2" />
                  Discutir Oportunidade
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download CV Completo
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
