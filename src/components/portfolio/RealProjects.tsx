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
  TrendingUp,
  Zap,
  Star,
  Sparkles,
  Target,
  Award,
  Eye,
  ArrowRight,
  Rocket,
} from "lucide-react";

const RealProjects = () => {
  const projects = [
    {
      title: "Gerenciamento de Proteções Mecânicas",
      description:
        "Sistema corporativo completo para cadastro, consulta e monitoramento de equipamentos de proteção mecânica, incluindo painel de indicadores em tempo real para gestão de manutenção preventiva e preditiva",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: Shield,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-600",
      results: [
        "Centralização de 100% dos equipamentos de segurança da empresa (500+ itens)",
        "Redução de 40% no tempo de consultas e localizaç��o de equipamentos",
        "Dashboard executivo em tempo real para tomada de decisões estratégicas",
        "Implementação de alertas automáticos para manutenções preventivas",
      ],
      metrics: {
        users: "50+ usuários",
        impact: "40% redução no tempo",
        scope: "Corporativo",
      },
      category: "Sistema Crítico",
      year: "2024-2025",
    },
    {
      title: "Catálogo Digital de Botoeiras",
      description:
        "Sistema integrado de consulta de componentes elétricos com conexão direta ao inventário corporativo, incluindo funcionalidades de busca avançada, especificações técnicas e disponibilidade em estoque",
      technologies: ["Power Apps", "SharePoint", "SQL"],
      icon: Database,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      results: [
        "Integração completa com sistema ERP existente (1000+ componentes)",
        "Interface intuitiva que reduziu tempo de consulta em 60%",
        "Controle de estoque automatizado com alertas de reposição",
        "Histórico completo de movimentações e especificações técnicas",
      ],
      metrics: {
        users: "30+ técnicos",
        impact: "60% redução no tempo de busca",
        scope: "Departamento técnico",
      },
      category: "Automação",
      year: "2024",
    },
    {
      title: "Agendamento Inteligente de Veículos",
      description:
        "Plataforma completa de gestão de frota corporativa com agendamento inteligente, controle de manutenção, alertas automáticos e relatórios de utilização para otimização de recursos",
      technologies: ["Power Apps", "SharePoint", "Power Automate"],
      icon: Calendar,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      results: [
        "Controle centralizado de frota de 15 veículos corporativos",
        "Sistema de alertas automáticos para manutenções preventivas",
        "Otimização de 25% na utilização dos recursos de transporte",
        "Redução de 30% nos custos operacionais da frota",
      ],
      metrics: {
        users: "20+ funcionários",
        impact: "25% otimização de recursos",
        scope: "Gestão de frota",
      },
      category: "Automação",
      year: "2024",
    },
    {
      title: "Dashboard Financeiro Executivo",
      description:
        "Plataforma de Business Intelligence com relatórios executivos interativos para acompanhamento de budget, análise de contas a pagar, consumo de materiais e indicadores financeiros estratégicos",
      technologies: ["Power BI", "SQL", "Excel"],
      icon: DollarSign,
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-orange-600",
      results: [
        "Visualização em tempo real do budget anual (R$ 2M+)",
        "Análise detalhada de consumo de materiais com projeções",
        "Automatização de 100% dos relatórios executivos mensais",
        "Redução de 80% no tempo de preparação de relatórios financeiros",
      ],
      metrics: {
        users: "10+ gestores",
        impact: "100% automação de relat��rios",
        scope: "Área financeira",
      },
      category: "Business Intelligence",
      year: "2023-2024",
    },
    {
      title: "Sistema de Enquete de Qualidade",
      description:
        "Sistema completo de gestão da qualidade com workflow automatizado para coleta de feedback, análise de satisfação do cliente e geração de relatórios inteligentes para melhoria contínua",
      technologies: ["Microsoft Forms", "Power Automate", "Power BI"],
      icon: MessageSquare,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      results: [
        "Automação completa do processo de coleta de feedback (500+ respostas/mês)",
        "Análise inteligente de satisfação com indicadores NPS",
        "Relatórios automáticos semanais para gestão da qualidade",
        "Implementação de ações corretivas baseadas em dados",
      ],
      metrics: {
        users: "100+ respondentes",
        impact: "80% automação do processo",
        scope: "Qualidade corporativa",
      },
      category: "Automação",
      year: "2023",
    },
    {
      title: "Aplicativo Gerencial de Elevadores",
      description:
        "Solução corporativa end-to-end para gestão completa de projetos de elevadores, desde solicitação de orçamento até entrega final, com rastreabilidade total e otimização de processos internos",
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
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600",
      results: [
        "Digitalização completa do processo de vendas (100+ projetos/ano)",
        "Rastreabilidade total de projetos com status em tempo real",
        "Redução de 50% no tempo de processamento de pedidos",
        "Integração com sistema ERP para controle financeiro",
      ],
      metrics: {
        users: "15+ usuários",
        impact: "50% redução no tempo de processo",
        scope: "Divisão elevadores",
      },
      category: "Sistema Completo",
      year: "2023",
    },
    {
      title: "5S Digital - Gestão de Qualidade",
      description:
        "Plataforma digital completa para gerenciamento e auditoria do programa 5S, incluindo check-lists digitais, planos de ação automáticos e acompanhamento de melhorias no ambiente de trabalho",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: CheckCircle2,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      gradientFrom: "from-teal-500",
      gradientTo: "to-cyan-600",
      results: [
        "Digitalização de 100% das auditorias 5S (50+ áreas auditadas)",
        "Geração automática de planos de ação corretiva",
        "Melhoria de 90% nos indicadores de organização do ambiente",
        "Redução de 70% no tempo de execução das auditorias",
      ],
      metrics: {
        users: "40+ auditores",
        impact: "90% melhoria nos indicadores",
        scope: "Toda planta fabril",
      },
      category: "Qualidade",
      year: "2022-2023",
    },
  ];

  const stats = [
    {
      icon: Target,
      value: "7",
      label: "Projetos Entregues",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      value: "250+",
      label: "Usuários Impactados",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "Melhoria Média",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Clock,
      value: "85%",
      label: "Automação Média",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl"
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
              className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 shadow-lg px-6 py-2"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Projetos Realizados
            </Badge>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Soluções que Geram
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-purple-600">
              7 projetos entregues
            </span>{" "}
            que automatizaram processos, reduziram custos e melhoraram a
            produtividade. Cada solução foi desenvolvida com foco em
            <span className="font-bold text-emerald-600">
              {" "}
              resultados mensuráveis
            </span>{" "}
            e impacto real nos negócios.
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

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-xl hover:shadow-xl transition-all duration-300 relative">
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    className={`bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} text-white border-0 text-xs px-3 py-1`}
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-600">
                        Usuários
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {project.metrics.users}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-600">
                        Impacto
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {project.metrics.impact}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <Target className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-600">
                        Escopo
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {project.metrics.scope}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Resultados Alcançados
                    </h4>
                    <div className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <motion.div
                          key={resultIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: resultIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-indigo-600" />
                      Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            variant="outline"
                            className={`bg-gradient-to-r ${project.gradientFrom}/10 ${project.gradientTo}/10 border-gray-200 hover:border-gray-300 transition-all duration-300 px-3 py-1 font-medium`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="sm"
                      className="w-full mt-4 text-xs bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                      onClick={() => {
                        const message = `Olá Vinícius!%0D%0A%0D%0AGostaria de saber mais sobre o projeto "${project.title}".%0D%0A%0D%0APoderia me contar mais detalhes sobre:%0D%0A- Como foi desenvolvido%0D%0A- Tecnologias utilizadas%0D%0A- Resultados alcançados%0D%0A%0D%0ATenho interesse em um projeto similar.%0D%0A%0D%0AAguardo seu retorno!`;
                        window.open(
                          `https://wa.me/5515998176173?text=${message}`,
                          "_blank",
                        );
                      }}
                    >
                      <MessageSquare className="w-3 h-3 mr-1" />
                      💬 Conversar sobre Este Projeto
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-indigo-600/90"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">
                  Seu Próximo Projeto de Sucesso
                </h3>
                <Star className="w-8 h-8 text-white" />
              </div>
              <p className="text-purple-100 mb-8 text-xl max-w-3xl mx-auto">
                Com{" "}
                <span className="font-bold text-white">
                  7 projetos entregues
                </span>{" "}
                e resultados comprovados, estou pronto para transformar suas
                ideias em soluções reais que geram valor para seu negócio.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const message = `Olá Vinícius!%0D%0A%0D%0AVi seu portfólio e fiquei impressionado com os resultados dos seus projetos.%0D%0A%0D%0AGostaria de conversar sobre um projeto similar para minha empresa.%0D%0A%0D%0APodemos agendar uma conversa?%0D%0A%0D%0AAguardo seu retorno!`;
                    window.open(
                      `https://wa.me/5515998176173?text=${message}`,
                      "_blank",
                    );
                  }}
                >
                  <Users className="w-4 h-4 mr-2" />
                  🚀 Quero um Projeto Assim!
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => {
                    window.open("https://github.com/ViniciusProvasi", "_blank");
                  }}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Ver Mais Projetos
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
