import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Calendar,
  DollarSign,
  MessageSquare,
  Building,
  CheckCircle2,
  ExternalLink,
  Users,
  BarChart3,
  Clock,
} from "lucide-react";

const RealProjects = () => {
  const projects = [
    {
      title: "Gerenciamento de Proteções Mecânicas",
      description:
        "Sistema completo para cadastro, consulta e painel de indicadores de manutenção de equipamentos de segurança industrial",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: Shield,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      results: [
        "Centralização de 100% dos equipamentos de segurança",
        "Redução de 40% no tempo de consultas",
        "Dashboard em tempo real para tomada de decisões",
      ],
      metrics: {
        users: "50+ usuários",
        impact: "40% redução tempo",
        scope: "Toda empresa",
      },
      category: "Sistema Crítico",
      year: "2024-2025",
    },
    {
      title: "Catálogo Digital de Botoeiras",
      description:
        "Sistema de consulta de componentes elétricos integrado ao inventário da empresa com busca avançada",
      technologies: ["Power Apps", "SharePoint", "SQL"],
      icon: Database,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      results: [
        "Integração completa com inventário existente",
        "Interface intuitiva para consultas rápidas",
        "Controle de estoque automatizado",
      ],
      metrics: {
        users: "30+ técnicos",
        impact: "60% busca mais rápida",
        scope: "Departamento técnico",
      },
      category: "Automação",
      year: "2024",
    },
    {
      title: "Sistema de Agendamento de Veículos",
      description:
        "Ferramenta de controle de frota corporativa com alertas automáticos e otimização de recursos",
      technologies: ["Power Apps", "SharePoint", "Power Automate"],
      icon: Calendar,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      results: [
        "Controle centralizado da frota de veículos",
        "Alertas automáticos de manutenção",
        "Otimização de 25% no uso dos recursos",
      ],
      metrics: {
        users: "20+ funcionários",
        impact: "25% otimização",
        scope: "Gestão de frota",
      },
      category: "Logística",
      year: "2023-2024",
    },
    {
      title: "Dashboard Financeiro Executivo",
      description:
        "Relatórios interativos de budget, contas a pagar e consumo de materiais para gestão estratégica",
      technologies: ["Power BI", "SQL", "Excel"],
      icon: DollarSign,
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      results: [
        "Visualização em tempo real do budget",
        "Análise detalhada de consumo de materiais",
        "Relatórios executivos automatizados",
      ],
      metrics: {
        users: "10+ gestores",
        impact: "100% automação",
        scope: "Área financeira",
      },
      category: "Business Intelligence",
      year: "2024",
    },
    {
      title: "Sistema de Enquete de Qualidade",
      description:
        "Workflow automatizado de coleta de feedback e análise de satisfação com relatórios inteligentes",
      technologies: ["Microsoft Forms", "Power Automate", "Power BI"],
      icon: MessageSquare,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      results: [
        "Automação completa do processo de feedback",
        "Análise inteligente de satisfação",
        "Relatórios automáticos para gestão",
      ],
      metrics: {
        users: "100+ respondentes",
        impact: "80% automação",
        scope: "Qualidade corporativa",
      },
      category: "Qualidade",
      year: "2023",
    },
    {
      title: "Aplicativo Gerencial de Elevadores",
      description:
        "Solução end-to-end desde solicitação de orçamento até entrega, otimizando processos internos",
      technologies: [
        "Microsoft Forms",
        "Power Apps",
        "SharePoint",
        "Power BI",
        "SQL",
      ],
      icon: Building,
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
      results: [
        "Processo completo digitalizado",
        "Rastreabilidade total dos projetos",
        "Melhoria significativa nos processos internos",
      ],
      metrics: {
        users: "15+ usuários",
        impact: "50% processo digital",
        scope: "Divisão elevadores",
      },
      category: "Sistema Completo",
      year: "2023-2024",
    },
    {
      title: "5S Digital - Auditoria e Gestão",
      description:
        "Sistema de gerenciamento e auditoria de 5S com ações de melhoria para ambiente de trabalho",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: CheckCircle2,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      results: [
        "Digitalização completa das auditorias 5S",
        "Ações de melhoria automatizadas",
        "Ambiente de trabalho mais organizado",
      ],
      metrics: {
        users: "40+ auditores",
        impact: "90% digital",
        scope: "Toda planta fabril",
      },
      category: "Qualidade",
      year: "2023",
    },
  ];

  const projectStats = {
    total: "7",
    users: "250+",
    efficiency: "35%",
    automation: "85%",
  };

  return (
    <section id="projects" className="py-20 bg-white">
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
            Portfolio de Projetos
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Projetos Reais com Impacto Comprovado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sistemas desenvolvidos que transformaram processos e geraram
            resultados mensuráveis para a organização
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {projectStats.total}
              </div>
              <div className="text-sm text-gray-600">Sistemas Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {projectStats.users}
              </div>
              <div className="text-sm text-gray-600">Usuários Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">
                {projectStats.efficiency}
              </div>
              <div className="text-sm text-gray-600">Melhoria Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {projectStats.automation}
              </div>
              <div className="text-sm text-gray-600">Automação Média</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${project.color}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${project.color.split(" ")[0]} flex items-center justify-center`}
                      >
                        <project.icon
                          className={`w-6 h-6 ${project.iconColor}`}
                        />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs mb-1">
                          {project.category}
                        </Badge>
                        <div className="text-xs text-gray-500">
                          {project.year}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Results */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                        Resultados Alcançados
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            className="text-gray-600 flex items-start gap-2 text-sm"
                          >
                            <span className="text-green-600 mt-1 flex-shrink-0">
                              ✓
                            </span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3 text-sm">
                        Métricas do Projeto
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {project.metrics.users}
                          </div>
                          <div className="text-xs text-gray-600">Usuários</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {project.metrics.impact}
                          </div>
                          <div className="text-xs text-gray-600">Impacto</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {project.metrics.scope}
                          </div>
                          <div className="text-xs text-gray-600">Escopo</div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 text-sm">
                        Stack Tecnológico
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
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

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 text-xs"
                      disabled
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Projeto Corporativo Interno
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Resultados Similares para Seu Projeto?
              </h3>
              <p className="text-gray-600 mb-6">
                Estes são apenas alguns exemplos dos sistemas que desenvolvi.
                Cada projeto foi pensado para resolver problemas reais e gerar
                valor mensurável.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">
                  <Users className="w-4 h-4 mr-2" />
                  Conversar sobre Projeto
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://github.com/ViniciusProvasi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Código GitHub
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

export default RealProjects;
