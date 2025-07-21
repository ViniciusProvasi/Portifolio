import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
  Download,
  ExternalLink,
  Users,
  Zap,
  Heart,
  Coffee,
  Rocket,
  Target,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Profissional",
      value: "viniciuslima1915@outlook.com.br",
      href: "mailto:viniciuslima1915@outlook.com.br?subject=Contato%20via%20Portfólio&body=Olá%20Vinícius,%0D%0A%0D%0AVisitei%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%0D%0A%0D%0AAtenciosamente,",
      description: "Resposta garantida em até 2 horas úteis",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Direto",
      value: "(15) 99817-6173",
      href: "https://wa.me/5515998176173?text=Olá%20Vinícius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      description: "Chat direto e resposta imediata",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/vinicius-provasi",
      href: "https://www.linkedin.com/in/vinicius-provasi/",
      description: "Rede profissional e experiências",
      gradientFrom: "from-blue-600",
      gradientTo: "to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ViniciusProvasi",
      href: "https://github.com/ViniciusProvasi",
      description: "Projetos e código fonte",
      gradientFrom: "from-gray-700",
      gradientTo: "to-gray-900",
      bgColor: "from-gray-50 to-slate-50",
      borderColor: "border-gray-200",
    },
    {
      icon: Calendar,
      title: "Agendar Reuni��o",
      value: "calendly.com/viniciuslima1915",
      href: "https://calendly.com/viniciuslima1915",
      description: "Marque um horário para conversarmos",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Sorocaba, São Paulo",
      href: "#",
      description: "Disponível para trabalho remoto",
      gradientFrom: "from-red-500",
      gradientTo: "to-orange-600",
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
    },
  ];

  const availability = {
    status: "Disponível para novos projetos",
    responseTime: "2 horas úteis",
    workStyle: "Remoto ou Presencial",
    timezone: "GMT-3 (Brasília)",
  };

  const quickActions = [
    {
      icon: Send,
      title: "Enviar Proposta",
      description: "Formulário completo para seu projeto",
      action: () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      },
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Download,
      title: "Download CV",
      description: "Currículo completo em PDF",
      action: () => {
        // CV download function
        const cvContent = `
          <!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <title>CV - Vinícius Provasi</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 20px; }
              .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Vinícius Provasi de Sousa Lima</h1>
              <h2>Engenharia de Aplicação & Desenvolvimento de Sistemas</h2>
            </div>
          </body>
          </html>
        `;

        const blob = new Blob([cvContent], { type: "text/html;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "CV-Vinicius-Provasi-Engenheiro-Aplicacao.html";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      },
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: MessageCircle,
      title: "Chat Rápido",
      description: "WhatsApp para dúvidas rápidas",
      action: () => {
        window.open(
          "https://wa.me/5515998176173?text=Olá%20Vinícius!%20Tenho%20uma%20dúvida%20rápida.",
          "_blank",
        );
      },
      color: "from-green-600 to-emerald-600",
    },
  ];

  const stats = [
    {
      icon: Clock,
      value: "2h",
      label: "Tempo de Resposta",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: CheckCircle2,
      value: "100%",
      label: "Taxa de Resposta",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Users,
      value: "24/7",
      label: "Disponibilidade",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Target,
      value: "5★",
      label: "Avaliação Média",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
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
              className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 shadow-lg px-6 py-2"
            >
              <Heart className="w-4 h-4 mr-2" />
              Vamos Trabalhar Juntos
            </Badge>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Múltiplas Formas de
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Entrar em Contato
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Escolha a forma que for mais conveniente para você. Estou sempre
            disponível para
            <span className="font-bold text-blue-600">
              {" "}
              conversar sobre projetos
            </span>
            , tirar dúvidas ou
            <span className="font-bold text-purple-600">
              {" "}
              discutir oportunidades
            </span>{" "}
            de colaboração.
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

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ações Rápidas
              </span>
            </h3>
            <p className="text-gray-600">
              Para facilitar nosso primeiro contato
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
                onClick={action.action}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-xl hover:shadow-xl transition-all duration-300 relative">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <action.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {action.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {action.description}
                    </p>
                    <motion.div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      <span>Clique aqui</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Informações de Contato
              </span>
            </h3>
            <p className="text-gray-600">
              Todas as formas de entrar em contato comigo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card
                  className={`h-full overflow-hidden border-2 shadow-lg bg-gradient-to-br ${contact.bgColor} ${contact.borderColor} hover:shadow-xl transition-all duration-300 relative`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {contact.description}
                        </p>
                      </div>
                    </div>

                    {contact.href !== "#" ? (
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Button
                          size="lg"
                          className={`w-full h-14 bg-gradient-to-r ${contact.gradientFrom} ${contact.gradientTo} hover:shadow-xl hover:shadow-blue-500/25 text-white border-0 transition-all duration-300 group font-semibold text-base rounded-xl transform hover:scale-105 hover:-translate-y-1`}
                          asChild
                        >
                          <a
                            href={contact.href}
                            target={
                              contact.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              contact.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center justify-center gap-3"
                          >
                            <span className="truncate flex-1 text-left">
                              {contact.value}
                            </span>
                            <ExternalLink className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                          </a>
                        </Button>
                      </motion.div>
                    ) : (
                      <div className="w-full p-3 bg-white/80 rounded-lg text-center">
                        <span className="text-gray-700 font-medium">
                          {contact.value}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Status de Disponibilidade
                  </h3>
                  <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-emerald-700 font-semibold text-lg">
                  {availability.status}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/80 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    Tempo de Resposta
                  </div>
                  <div className="text-blue-600 font-bold">
                    {availability.responseTime}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    Estilo de Trabalho
                  </div>
                  <div className="text-purple-600 font-bold">
                    {availability.workStyle}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl">
                  <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    Fuso Horário
                  </div>
                  <div className="text-emerald-600 font-bold">
                    {availability.timezone}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Coffee className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">
                  Que tal tomarmos um café (virtual)?
                </h3>
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <p className="text-blue-100 mb-8 text-xl max-w-3xl mx-auto">
                Estou sempre aberto para novas conexões e oportunidades.
                <span className="font-bold text-white">
                  {" "}
                  Vamos conversar
                </span>{" "}
                sobre como posso contribuir com seu projeto ou empresa!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Button
                  size="lg"
                  className="h-16 bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => {
                    window.open(
                      "https://wa.me/5515998176173?text=Olá%20Vinícius!%20Que%20tal%20conversarmos%20sobre%20um%20projeto?",
                      "_blank",
                    );
                  }}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Iniciar Conversa
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/viniciuslima1915",
                      "_blank",
                    );
                  }}
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Agendar Reunião
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
