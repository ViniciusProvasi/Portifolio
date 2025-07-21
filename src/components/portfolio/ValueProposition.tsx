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
        "Implementação de soluções que resultaram em redução de 30% no tempo de processos administrativos através de automação inteligente e otimização de fluxos de trabalho",
      metrics: "30% redução no tempo de processos",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
    },
    {
      icon: Target,
      title: "Especialização Técnica",
      description:
        "Domínio técnico comprovado em Microsoft Power Platform, desenvolvimento React/TypeScript e automação industrial para criação de soluções corporativas robustas e escaláveis",
      metrics: "4+ anos de experiência técnica",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Desenvolvimento de scripts e automações que aumentaram produtividade em 20%, com foco em otimização de processos e eliminação de gargalos operacionais",
      metrics: "20% aumento de produtividade",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
    },
  ];

  const technologies = [
    {
      category: "Power Platform",
      skills: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      category: "Desenvolvimento Web",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      category: "Automação & Dados",
      skills: ["Python", "SQL", "Excel Avançado", "APIs REST"],
      color: "from-emerald-500 to-green-600"
    },
    {
      category: "Metodologias",
      skills: ["Lean Manufacturing", "Kaizen", "Gestão de Projetos", "Scrum"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const metrics = [
    {
      icon: BarChart3,
      value: "30%",
      label: "Redução de Tempo",
      description: "em processos administrativos"
    },
    {
      icon: Users,
      value: "50+",
      label: "Usuários Treinados",
      description: "em novas ferramentas"
    },
    {
      icon: Rocket,
      value: "7",
      label: "Projetos Entregues",
      description: "com sucesso comprovado"
    },
    {
      icon: Award,
      value: "4+",
      label: "Anos de Experiência",
      description: "em automação e desenvolvimento"
    }
  ];

  const personalInfo = [
    {
      label: "Localização",
      value: "Boituva, SP",
      icon: "🌍"
    },
    {
      label: "Disponibilidade",
      value: "Remoto/Presencial",
      icon: "💼"
    },
    {
      label: "Formação Atual",
      value: "FIAP (em curso)",
      icon: "🎓"
    },
    {
      label: "Idiomas",
      value: "Português/Inglês",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
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
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Profissional que entrega resultados mensuráveis através de soluções
            tecnológicas inovadoras e processos otimizados.
          </p>
        </motion.div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className={`h-full border-2 ${prop.borderColor} bg-gradient-to-br ${prop.bgColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {prop.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 ${prop.textColor} font-semibold text-lg bg-white/80 px-4 py-2 rounded-full`}>
                    <CheckCircle2 className="w-5 h-5" />
                    {prop.metrics}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Competências Técnicas
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stack tecnológico robusto para desenvolvimento de soluções completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-xl hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-center mb-4">
                      {tech.category}
                    </h4>
                    <div className="space-y-2">
                      {tech.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Números que Falam
              </span>
            </h3>
            <p className="text-gray-600">
              Resultados quantificáveis que demonstram impacto real
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Informações Profissionais
                  </span>
                </h3>
                <p className="text-gray-600">Detalhes sobre disponibilidade e formação</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-3xl mb-2">{info.icon}</div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {info.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {info.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">
                  Pronto para Impactar sua Empresa
                </h3>
                <Star className="w-8 h-8 text-white" />
              </div>
              <p className="text-blue-100 mb-8 text-xl max-w-3xl mx-auto">
                Combine minha experiência técnica com seu desafio empresarial.
                <span className="font-bold text-white"> Vamos criar soluções</span> que geram resultados reais!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Vamos Conversar
                </button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
