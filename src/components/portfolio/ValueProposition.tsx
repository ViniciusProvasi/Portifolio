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
} from "lucide-react";

const ValueProposition = () => {
  const valueProps = [
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description:
        "Reduzi processos administrativos em 30% através de automação inteligente",
      metrics: "30% redução de tempo",
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      icon: Target,
      title: "Especialização Técnica",
      description:
        "Domínio em Power Platform, React e TypeScript para soluções robustas",
      metrics: "4+ anos de experiência",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Scripts e automações que aumentaram produtividade em 20%",
      metrics: "20% aumento produtividade",
      color: "bg-orange-50 border-orange-200 text-orange-700",
    },
  ];

  const capabilities = [
    {
      category: "Desenvolvimento Frontend",
      skills: ["React", "TypeScript", "JavaScript ES6+", "HTML5/CSS3"],
      level: "Avançado",
      projects: "5+ projetos",
    },
    {
      category: "Power Platform",
      skills: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      level: "Especialista",
      projects: "7 sistemas",
    },
    {
      category: "Automação & Scripts",
      skills: ["Workflow Automation", "Process Optimization", "Data Analysis"],
      level: "Avançado",
      projects: "10+ automações",
    },
    {
      category: "Metodologias",
      skills: ["Lean Manufacturing", "Kaizen", "Melhoria Contínua"],
      level: "Intermediário",
      projects: "3+ iniciativas",
    },
  ];

  const certifications = [
    "React - Desenvolvendo com JavaScript (Alura, 2025)",
    "JavaScript & TypeScript - Básico ao Avançado (Udemy, 2025)",
    "Web Moderno - JavaScript, HTML5 & CSS3 (Udemy, 2021)",
  ];

  return (
    <section className="py-20 bg-white">
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
            Proposta de Valor
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Por que Contratar Vinícius Provasi?
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
            >
              <Card
                className={`h-full border-2 ${prop.color.split(" ")[1]} hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${prop.color.split(" ")[0]} flex items-center justify-center mb-4`}
                  >
                    <prop.icon
                      className={`w-6 h-6 ${prop.color.split(" ")[2]}`}
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {prop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{prop.description}</p>
                  <Badge variant="outline" className="text-xs">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Competências Técnicas Detalhadas
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{cap.category}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {cap.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {cap.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BarChart3 className="w-4 h-4" />
                      <span>{cap.projects}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Certificações Recentes
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-gray-600 text-sm flex items-start gap-2"
                  >
                    <span className="text-green-600 mt-1">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Stats */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Indicadores Chave
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">
                    Projetos Entregues
                  </span>
                  <span className="font-semibold text-gray-900">
                    7+ sistemas
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Economia Gerada</span>
                  <span className="font-semibold text-gray-900">
                    30% tempo/processo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">
                    Tempo de Experiência
                  </span>
                  <span className="font-semibold text-gray-900">4+ anos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Formação Atual</span>
                  <span className="font-semibold text-gray-900">
                    FIAP (em curso)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
