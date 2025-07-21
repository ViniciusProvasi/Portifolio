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
        "Sistema completo para cadastro, consulta e painel de indicadores de manutenção de equipamentos de segurança industrial",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: Shield,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-600",
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
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      results: [
        "Integração completa com inventário existente",
        "Interface intuitiva para consultas rápidas",
        "Redução de 50% no tempo de busca de componentes",
      ],
      metrics: {
        users: "30+ usuários",
        impact: "50% busca rápida",
        scope: "Área técnica",
      },
      category: "Automação",
      year: "2024",
    },
    {
      title: "Agendamento Inteligente de Veículos",
      description:
        "Ferramenta de controle de frota corporativa com alertas automáticos e otimização de recursos",
      technologies: ["Power Apps", "SharePoint", "Power Automate"],
      icon: Calendar,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      results: [
        "Controle total da frota corporativa",
        "Alertas automáticos de manutenção",
        "Otimização de 25% no uso dos recursos",
      ],
      metrics: {
        users: "20+ funcionários",
        impact: "25% otimização",
        scope: "Gestão de frota",
      },
      category: "Automação",
      year: "2024",
    },
    {
      title: "Dashboard Financeiro Executivo",
      description:
        "Relatórios interativos de budget, contas a pagar e consumo de materiais para gestão estratégica",
      technologies: ["Power BI", "SharePoint", "Excel"],
      icon: DollarSign,
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-orange-600",
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
      year: "2023-2024",
    },
    {
      title: "Sistema de Enquete de Qualidade",
      description:
        "Workflow automatizado de coleta de feedback e análise de satisfação com relatórios inteligentes",
      technologies: ["Microsoft Forms", "Power Automate", "Power BI"],
      icon: MessageSquare,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      results: [
        "Automação completa do processo de feedback",
        "Análise inteligente de satisfação",
        "Relatórios automáticos para gestão",
      ],
      metrics: {
        users: "100+ respondentes",
        impact: "80% automaç��o",
        scope: "Qualidade corporativa",
      },
      category: "Automação",
      year: "2023",
    },
    {
      title: "Aplicativo Gerencial de Elevadores",
      description:
        "Solução completa desde solicitação de orçamento até entrega, melhorando processos internos",
      technologies: ["Forms", "Power Apps", "SharePoint", "Power BI", "SQL"],
      icon: Building,
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600",
      results: [
        "Workflow completo de vendas",
        "Rastreabilidade total dos projetos",
        "Melhoria significativa nos processos internos",
      ],
      metrics: {
        users: "15+ vendedores",
        impact: "60% eficiência",
        scope: "Vendas e projetos",
      },
      category: "Sistema Completo",
      year: "2023",
    },
    {
      title: "5S Digital - Gestão de Qualidade",
      description:
        "Sistema de gerenciamento e auditoria de 5S com ações de melhoria para ambiente de trabalho",
      technologies: ["Power Apps", "SharePoint", "Power BI"],
      icon: CheckCircle2,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      gradientFrom: "from-teal-500",
      gradientTo: "to-cyan-600",
      results: [
        "Digitalização completa das auditorias 5S",
        "Ações de melhoria automatizadas",
        "Ambiente de trabalho mais organizado",
      ],
      metrics: {
        users: "40+ auditores",
        impact: "90% digital",
        scope: "Toda fábrica",
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
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      value: "250+",
      label: "Usuários Impactados",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "Melhoria Média",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Clock,
      value: "85%",
      label: "Automação Média",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
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

      <div className="container mx-auto px-6 relative z-10">
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
            <Badge variant="outline" className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 shadow-lg px-6 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Projetos Realizados
            </Badge>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Soluções que Geram
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-purple-600">7 projetos entregues</span> que automatizaram processos, 
            reduziram custos e melhoraram a produtividade. Cada solução foi desenvolvida com foco em 
            <span className="font-bold text-emerald-600"> resultados mensuráveis</span> e impacto real nos negócios.
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
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
              <Card className="h-full overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 relative">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} text-white border-0 text-xs px-3 py-1`}>
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
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
                      <div className="text-xs font-semibold text-gray-600">Usuários</div>
                      <div className="text-sm font-bold text-gray-900">{project.metrics.users}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-600">Impacto</div>
                      <div className="text-sm font-bold text-gray-900">{project.metrics.impact}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <Target className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-600">Escopo</div>
                      <div className="text-sm font-bold text-gray-900">{project.metrics.scope}</div>
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
                          transition={{ duration: 0.5, delay: resultIndex * 0.1 }}
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
                      className={`w-full bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} hover:scale-105 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                      onClick={() => {
                        // Scroll to contact section for project details
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Ver Detalhes do Projeto
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                Com <span className="font-bold text-white">7 projetos entregues</span> e resultados comprovados, 
                estou pronto para transformar suas ideias em soluções reais que geram valor para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Iniciar Novo Projeto
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-xl transition-all duration-300"
                  onClick={() => {
                    window.open('https://github.com/ViniciusProvasi', '_blank');
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
