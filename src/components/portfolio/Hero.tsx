import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Code2,
  Zap,
  TrendingUp,
  Award,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const metrics = [
    {
      value: "30%",
      label: "Redução no Tempo de Processos",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-600",
    },
    {
      value: "20%",
      label: "Aumento de Produtividade",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    {
      value: "4+",
      label: "Anos de Experiência",
      icon: Award,
      color: "from-blue-500 to-indigo-600",
    },
    {
      value: "7",
      label: "Projetos Entregues",
      icon: Code2,
      color: "from-purple-500 to-pink-600",
    },
  ];

  const coreSkills = [
    { name: "React", color: "bg-cyan-100 text-cyan-900 border-cyan-300" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-900 border-blue-300" },
    {
      name: "Power Platform",
      color: "bg-purple-100 text-purple-900 border-purple-300",
    },
    {
      name: "Automação",
      color: "bg-green-100 text-green-900 border-green-300",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 to-purple-100 pt-20 overflow-hidden font-sans">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/25 via-indigo-400/20 to-purple-600/25 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/25 via-teal-400/20 to-cyan-600/25 rounded-full blur-3xl"
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

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      </div>

      {/* Enhanced Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 text-blue-400/40 drop-shadow-lg"
        >
          <div className="relative">
            <Code2 size={52} className="filter drop-shadow-2xl" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl transform scale-150" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 8, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/3 left-1/5 text-purple-400/40 drop-shadow-lg"
        >
          <div className="relative">
            <Zap size={44} className="filter drop-shadow-2xl" />
            <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl transform scale-150" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 left-1/3 text-emerald-400/40 drop-shadow-lg"
        >
          <div className="relative">
            <TrendingUp size={40} className="filter drop-shadow-2xl" />
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl transform scale-150" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-160px)]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-3 shadow-2xl border border-gray-200/50 backdrop-blur-sm">
                  <OptimizedImage
                    src="https://cdn.builder.io/api/v1/image/assets%2Faad2ee0e75b74a72a20bf4fddbeddbec%2Fa25500830e3e4389bb4723c7c824012e?format=webp&width=800"
                    alt="Vinícius Provasi - Engenheiro de Aplicação & Desenvolvedor Web"
                    className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl object-cover object-center shadow-lg transition-transform duration-300 hover:scale-105"
                    width="176"
                    height="176"
                    priority={true}
                  />
                </div>
                {/* Professional Status Indicator */}
                <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Ativo</span>
                </div>
                {/* Professional Badge */}
                <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg border border-blue-500/20">
                  <span>Pro</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border-emerald-300 shadow-sm font-bold"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  Desenvolvedor Especialista Disponível
                </Badge>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Vinícius Provasi
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                    Engenheiro de Aplicação
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl mt-1">
                    & Desenvolvedor Web
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Especialista em{" "}
                  <span className="font-bold text-blue-700">
                    automação de processos
                  </span>{" "}
                  e desenvolvimento de sistemas digitais. Experiência comprovada
                  em{" "}
                  <span className="font-bold text-purple-700">
                    Power Platform
                  </span>{" "}
                  e tecnologias web modernas como{" "}
                  <span className="font-bold text-cyan-700">
                    React e TypeScript
                  </span>
                  .
                </motion.p>
              </div>
            </div>

            {/* Key Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-lg">
                    Proposta de Valor
                  </h3>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    Desenvolvo soluções que geram{" "}
                    <span className="font-bold text-emerald-700">
                      resultados mensuráveis
                    </span>
                    : 30% de redução no tempo de processos administrativos e 20%
                    de aumento na produtividade organizacional.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-gray-900 flex items-center gap-2 text-lg">
                <Code2 className="w-5 h-5 text-blue-600" />
                Tecnologias Principais
              </h4>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="outline"
                      className={`${skill.color} font-bold shadow-sm hover:shadow-md transition-shadow duration-300 px-4 py-2 text-sm border-2`}
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="h-12 sm:h-16 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:shadow-3xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl relative overflow-hidden group border-0 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => {
                  // Scroll to contact section for better UX
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <span className="relative z-10">Iniciar Conversa</span>
              </Button>
              <Button
                size="lg"
                className="h-12 sm:h-16 bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group transform hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a
                  href="https://github.com/ViniciusProvasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Track GitHub link click
                    console.log("GitHub portfolio accessed");
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                  <Github className="w-6 h-6 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10">💻 Ver Projetos GitHub</span>
                </a>
              </Button>
              <Button
                size="lg"
                className="h-12 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group transform hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/vinicius-provasi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Track LinkedIn link click
                    console.log("LinkedIn profile accessed");
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />
                  <Linkedin className="w-6 h-6 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10">LinkedIn</span>
                </a>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700 font-bold"
            >
              <div
                className="flex items-center gap-2 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                title="Localização: Sorocaba, São Paulo"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Sorocaba, SP</span>
              </div>
              <a
                href="https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-green-500" />
                <span>(15) 99817-6173</span>
              </a>
              <a
                href="mailto:viniciuslima1915@outlook.com.br"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>viniciuslima1915@outlook.com.br</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-lg sm:shadow-xl bg-white/90 backdrop-blur-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/20">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <metric.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div
                        className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-800 font-bold leading-tight">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white hover:shadow-3xl transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 group-hover:from-blue-500/90 group-hover:via-indigo-500/90 group-hover:to-purple-500/90 transition-all duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Vamos Trabalhar Juntos?
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Transforme suas ideias em soluções reais
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Estou pronto para contribuir com o crescimento da sua
                    empresa através de soluções inovadoras e eficientes.
                  </p>
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => {
                          const contactSection =
                            document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Entrar em Contato
                      </button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              const valueSection = document.getElementById("value-proposition");
              if (valueSection) {
                valueSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-sm font-medium text-gray-700">
              Continue explorando
            </span>
            <ChevronDown className="w-6 h-6 text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
