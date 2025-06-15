import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const metrics = [
    { value: "30%", label: "Redução no Tempo de Processos" },
    { value: "20%", label: "Aumento de Produtividade" },
    { value: "4+", label: "Anos de Experiência" },
    { value: "7", label: "Projetos Entregues" },
  ];

  const coreSkills = ["React", "TypeScript", "Power Platform", "Automação"];

  return (
    <section className="relative min-h-screen bg-white">
      {/* Main Hero Content */}
      <div className="pt-20 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">VP</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Vinícius Provasi
                </div>
                <div className="text-xs text-gray-600">
                  Especialista em Desenvolvimento
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button size="sm">Contratar Agora</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="pt-20 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  Desenvolvedor Especialista Disponível
                </Badge>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Vinícius Provasi
                  <span className="block text-blue-600">
                    Engenheiro de Aplicação
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Especialista em <strong>automação de processos</strong> e
                  desenvolvimento de sistemas digitais. Experiência comprovada
                  em <strong>Power Platform</strong> e tecnologias web modernas.
                </p>
              </div>

              {/* Key Value Proposition */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Proposta de Valor
                </h3>
                <p className="text-gray-700">
                  Desenvolvo soluções que geram{" "}
                  <strong>resultados mensuráveis</strong>: 30% de redução no
                  tempo de processos administrativos e 20% de aumento na
                  produtividade.
                </p>
              </div>

              {/* Core Technologies */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">
                  Tecnologias Principais
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Iniciar Conversa
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://github.com/ViniciusProvasi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver Portfólio
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/vinicius-provasi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Sorocaba, SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(15) 99817-6173</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>viniciuslima1915@outlook.com.br</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Results & Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Current Status */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-gray-900">
                      Status Atual
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Assistente Técnico Jr.</strong> na ACE Schmersal
                  </p>
                  <p className="text-sm text-gray-600">
                    Cursando Tecnólogo em Análise e Desenvolvimento de Sistemas
                    (FIAP)
                  </p>
                </CardContent>
              </Card>

              {/* Recent Achievement */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Último Projeto
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Desenvolvimento de aplicativo Power Apps que reduziu em 30%
                    o tempo de tarefas administrativas
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Power Apps • SharePoint • Automação
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs">Ver mais</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
