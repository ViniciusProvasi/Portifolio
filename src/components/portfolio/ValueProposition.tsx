import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  BarChart3,
  Users,
  Clock,
  Code2,
  Lightbulb,
  Rocket,
  Shield,
  Award,
  Star,
  Sparkles,
} from "lucide-react";

const ValueProposition = () => {
  const valueProps = [
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description:
        "Reduzi processos administrativos em 30% através de automação inteligente",
      metrics: "30% redução de tempo",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
    },
    {
      icon: Target,
      title: "Especialização Técnica",
      description:
        "Domínio em Power Platform, React e TypeScript para soluções robustas",
      metrics: "4+ anos de experiência",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Scripts e automações que aumentaram produtividade em 20%",
      metrics: "20% aumento produtividade",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
    },
  ];

  const capabilities = [
    {
      category: "Desenvolvimento Frontend",
      skills: ["React", "TypeScript", "JavaScript ES6+", "HTML5/CSS3"],
      level: "Avançado",
      projects: "5+ projetos",
      icon: Code2,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
    },
    {
      category: "Power Platform",
      skills: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      level: "Especialista",
      projects: "7 sistemas",
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      category: "Automação & Scripts",
      skills: ["Workflow Automation", "Process Optimization", "Data Analysis"],
      level: "Avançado",
      projects: "10+ automações",
      icon: Rocket,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      category: "Metodologias",
      skills: ["Lean Manufacturing", "Kaizen", "Melhoria Contínua"],
      level: "Intermediário",
      projects: "3+ iniciativas",
      icon: Shield,
      color: "from-orange-500 to-yellow-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ];

  const certifications = [
    {
      title: "React - Desenvolvendo com JavaScript (Alura, 2025)",
      status: "Concluído",
      color: "text-green-600",
    },
    {
      title: "JavaScript & TypeScript - Básico ao Avançado (Udemy, 2025)",
      status: "Em curso",
      color: "text-blue-600",
    },
    {
      title: "Web Moderno - JavaScript, HTML5 & CSS3 (Udemy, 2021)",
      status: "Concluído",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden" id="value-proposition">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Proposta de Valor
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Por que Contratar
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Vinícius Provasi?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissional que entrega resultados mensuráveis através de soluções
            tecnológicas inovadoras e processos otimizados.
          </p>
        </motion.div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`h-full border-2 ${prop.borderColor} hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${prop.bgColor} overflow-hidden relative group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${prop.color} opacity-20 rounded-bl-3xl group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <CardHeader className="pb-4 relative">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {prop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {prop.description}
                  </p>
                  <Badge
                    variant="outline"
                    className={`text-xs ${prop.textColor} border-current bg-white/70 group-hover:bg-white transition-colors duration-300`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {prop.metrics}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Competências Técnicas
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Detalhadas
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`hover:shadow-xl transition-all duration-500 ${cap.bgColor} border-gray-200 group cursor-pointer`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${cap.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                        >
                          <cap.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-gray-800 transition-colors duration-300">
                            {cap.category}
                          </CardTitle>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${cap.textColor} bg-white/80 group-hover:bg-white transition-colors duration-300`}
                          >
                            {cap.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {cap.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs bg-white/80 group-hover:bg-white transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <BarChart3 className="w-4 h-4 text-blue-500" />
                        <span className="font-medium group-hover:text-gray-800 transition-colors duration-300">{cap.projects}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 via-white to-blue-50 rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                Certificações Recentes
              </h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/80 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${cert.status === "Concluído" ? "bg-green-500" : "bg-blue-500"}`}
                    ></div>
                    <div>
                      <span className="text-gray-700 text-sm">
                        {cert.title}
                      </span>
                      <Badge
                        variant="outline"
                        className={`ml-2 text-xs ${cert.color} border-current`}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Key Stats */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                Indicadores Chave
              </h4>
              <div className="space-y-4">
                {[
                  {
                    label: "Projetos Entregues",
                    value: "7+ sistemas",
                    icon: Award,
                    color: "text-purple-600",
                  },
                  {
                    label: "Economia Gerada",
                    value: "30% tempo/processo",
                    icon: TrendingUp,
                    color: "text-green-600",
                  },
                  {
                    label: "Tempo de Experiência",
                    value: "4+ anos",
                    icon: Clock,
                    color: "text-blue-600",
                  },
                  {
                    label: "Formação Atual",
                    value: "FIAP (em curso)",
                    icon: Users,
                    color: "text-orange-600",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 rounded-lg bg-white/80 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-gray-600 text-sm">
                        {stat.label}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;