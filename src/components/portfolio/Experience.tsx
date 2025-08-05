import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Assistente Técnico Jr.",
      company: "ACE Schmersal",
      location: "Boituva, SP",
      period: "Mar. 2025 – Atual",
      description: [
        "Desenvolvo aplicativos Power Apps, reduzindo em até 30% o tempo de tarefas administrativas",
        "Automação de fluxos com Power Automate e integração com SharePoint, garantindo rastreabilidade e versionamento",
      ],
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
    },
    {
      title: "Auxiliar de Engenharia",
      company: "ACE Schmersal",
      location: "Boituva, SP",
      period: "Jan. 2023 – Mar. 2025",
      description: [
        "Parametrização de códigos de produto em sistemas de automação",
        "Criação de scripts que geraram 20% de aumento de produtividade",
        "Análise de dados operacionais para iniciativas de melhoria contínua",
      ],
      technologies: [
        "Automação Industrial",
        "Scripts",
        "Análise de Dados",
        "Melhoria Contínua",
      ],
    },
    {
      title: "Auxiliar Administrativo (Engenharia de Aplicação)",
      company: "UP Serviços",
      location: "Boituva, SP",
      period: "Jan. 2022 – Jun. 2022",
      description: [
        "Suporte técnico em projetos de aplicação, elaboração de relatórios e controle documental",
      ],
      technologies: ["Suporte Técnico", "Documentação", "Relatórios"],
    },
    {
      title: "Aprendiz de Soluções",
      company: "ACE Schmersal",
      location: "Boituva, SP",
      period: "Jan. 2021 – Dez. 2021",
      description: [
        "Organização de documentação técnica (ART), conferência de demandas e suporte generalista",
      ],
      technologies: ["Documentação Técnica", "Organização", "Suporte"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-4">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent max-w-2xl mx-auto">
            Mais de 4 anos de experiência em automação de processos,
            desenvolvimento de sistemas e melhoria contínua
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
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
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <Card className="ml-0 md:ml-20 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-blue-600 font-medium mt-1">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-blue-600 mt-1.5 flex-shrink-0">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
