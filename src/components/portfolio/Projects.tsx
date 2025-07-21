import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Shield,
  Database,
  Calendar,
  DollarSign,
  MessageSquare,
  Building,
  CheckCircle2,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gerenciamento de Proteções Mecânicas",
      description:
        "App para cadastro, consulta e painel de indicadores de manutenção de equipamentos de segurança",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: Shield,
      color: "bg-red-100 text-red-600",
      features: [
        "Cadastro de equipamentos",
        "Indicadores de manutenção",
        "Relatórios automatizados",
      ],
    },
    {
      title: "Catálogo de Botoeiras",
      description:
        "Sistema de consulta de componentes elétricos integrado ao inventário da empresa",
      technologies: ["Power Apps", "SharePoint"],
      icon: Database,
      color: "bg-blue-100 text-blue-600",
      features: [
        "Consulta de componentes",
        "Integração com inventário",
        "Interface intuitiva",
      ],
    },
    {
      title: "Agendamento de Veículos",
      description:
        "Ferramenta de controle de frota com alertas automáticos e otimização de recursos",
      technologies: ["Power Apps", "SharePoint", "Power Automate"],
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      features: [
        "Controle de frota",
        "Alertas automáticos",
        "Otimização de recursos",
      ],
    },
    {
      title: "Dashboard Financeiro",
      description:
        "Relatórios interativos de budget, contas a pagar e consumo de materiais",
      technologies: ["Power BI", "SQL"],
      icon: DollarSign,
      color: "bg-yellow-100 text-yellow-600",
      features: [
        "Análise de budget",
        "Controle de contas",
        "Consumo de materiais",
      ],
    },
    {
      title: "Enquete de Qualidade",
      description:
        "Workflow automatizado de coleta de feedback e análise de satisfação",
      technologies: ["Forms", "Power Automate", "Power BI"],
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600",
      features: [
        "Coleta de feedback",
        "Análise de satisfação",
        "Workflow automatizado",
      ],
    },
    {
      title: "Aplicativo Gerencial Elevadores",
      description:
        "Solução completa desde solicitação de orçamento até entrega, melhorando processos internos",
      technologies: ["Forms", "Power Apps", "SharePoint", "Power BI", "SQL"],
      icon: Building,
      color: "bg-indigo-100 text-indigo-600",
      features: [
        "Gestão de orçamentos",
        "Controle de entrega",
        "Melhoria de processos",
      ],
    },
    {
      title: "5S Digital",
      description:
        "Gerenciamento e auditoria de 5S, com ações de melhoria para ambiente de trabalho",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: CheckCircle2,
      color: "bg-teal-100 text-teal-600",
      features: [
        "Auditoria digital",
        "Ações de melhoria",
        "Ambiente de trabalho",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projetos Destaque
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções desenvolvidas que impactaram positivamente os processos
            organizacionais
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4`}
                    >
                      <project.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Recursos:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-xs text-gray-600 flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Tecnologias:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="w-full mt-4 text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-md cursor-default opacity-90"
                      disabled
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      📁 Projeto Corporativo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
