import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import ToastNotification, { useToast } from "./ToastNotification";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Calendar,
  Clock,
  CheckCircle2,
  Zap,
  Users,
  Star,
  Sparkles,
  MessageCircle,
  Rocket,
  User,
  DollarSign,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const ContactCTA = () => {
  const { toasts, removeToast, showSuccess, showInfo, showWarning } =
    useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    project: "",
    message: "",
    timeline: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Direto",
      value: "viniciuslima1915@outlook.com.br",
      href: "mailto:viniciuslima1915@outlook.com.br",
      description: "Resposta em até 2 horas úteis",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: Phone,
      title: "WhatsApp/Telefone",
      value: "(15) 99817-6173",
      href: "https://wa.me/5515998176173",
      description: "Disponível das 8h às 18h",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/vinicius-provasi",
      href: "https://www.linkedin.com/in/vinicius-provasi/",
      description: "Rede profissional ativa",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ViniciusProvasi",
      href: "https://github.com/ViniciusProvasi",
      description: "Código e projetos públicos",
      color: "from-gray-500 to-gray-700",
      bgColor: "from-gray-50 to-slate-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
    },
  ];

  const availability = {
    status: "Disponível para novas oportunidades",
    startDate: "Imediato",
    type: "Tempo integral ou projetos",
    location: "Sorocaba, SP ou Remoto",
  };

  const services = [
    {
      name: "Desenvolvimento de Aplicações Power Platform",
      icon: Zap,
      color: "text-purple-600",
    },
    {
      name: "Automação de Processos Empresariais",
      icon: Rocket,
      color: "text-orange-600",
    },
    {
      name: "Desenvolvimento Frontend (React/TypeScript)",
      icon: Users,
      color: "text-blue-600",
    },
    {
      name: "Integração de Sistemas e APIs",
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      name: "Consultoria em Otimização de Processos",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      name: "Migração e Modernização de Sistemas",
      icon: Sparkles,
      color: "text-indigo-600",
    },
  ];

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push("Nome ou empresa é obrigatório");
    }

    if (!formData.email.trim()) {
      errors.push("Email é obrigatório");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push("Email deve ter um formato válido");
    }

    if (!formData.project.trim()) {
      errors.push("Tipo de projeto é obrigatório");
    }

    if (!formData.message.trim()) {
      errors.push("Descrição do projeto é obrigatória");
    } else if (formData.message.length < 20) {
      errors.push("Descrição deve ter pelo menos 20 caracteres");
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      showWarning(
        "Formulário Incompleto ⚠️",
        `Por favor, corrija os seguintes itens:\n• ${errors.join("\n• ")}`,
        6000,
      );
      return;
    }

    // Create email subject and body
    const subject = `Proposta de Projeto: ${formData.project}`;
    const body = `
Olá Vinícius,

Tenho interesse em discutir um projeto com você.

Detalhes:
- Nome/Empresa: ${formData.name}
- Email: ${formData.email}
- Telefone: ${formData.phone || "Não informado"}
- Tipo de Projeto: ${formData.project}
- Orçamento Estimado: ${formData.budget || "A definir"}
- Prazo Desejado: ${formData.timeline || "A definir"}

Descrição do Projeto:
${formData.message}

Aguardo seu retorno.

Atenciosamente,
${formData.name}
    `.trim();

    // Try multiple email methods for better compatibility
    const mailtoLink = `mailto:viniciuslima1915@outlook.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Method 1: Try mailto
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Mailto failed:", error);
    }

    // Method 2: Alternative - WhatsApp with project details
    const whatsappMessage = `
Olá Vinícius!

Tenho interesse em discutir um projeto:

*Projeto:* ${formData.project}
*Nome/Empresa:* ${formData.name}
*Email:* ${formData.email}
*Orçamento:* ${formData.budget || "A definir"}
*Prazo:* ${formData.timeline || "A definir"}

*Detalhes:*
${formData.message}

Podemos conversar?
    `.trim();

    // Method 3: Also prepare WhatsApp backup
    const whatsappLink = `https://wa.me/5515998176173?text=${encodeURIComponent(whatsappMessage)}`;

    // Show professional success notification
    showSuccess(
      "Proposta Enviada com Sucesso! ✅",
      "Seu email foi aberto automaticamente. Resposta garantida em até 2 horas úteis!",
      4000,
    );

    // Show WhatsApp backup option
    setTimeout(() => {
      showInfo(
        "Quer Resposta Mais Rápida? 🚀",
        "Clique no botão WhatsApp abaixo para enviar uma cópia e receber resposta imediata!",
        6000,
      );
    }, 2000);

    // Clear form after submission with success feedback
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        project: "",
        message: "",
        timeline: "",
      });

      // Form cleared notification
      showInfo(
        "Formulário Limpo! 🧽",
        "Aguardo seu contato. Pode enviar nova proposta quando quiser!",
        3000,
      );
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <ToastNotification toasts={toasts} onRemove={removeToast} />
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 text-blue-400/30"
          >
            <MessageCircle size={40} />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/3 left-1/4 text-green-400/30"
          >
            <Send size={36} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="default"
                className="mb-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg px-4 py-2"
              >
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                {availability.status}
              </Badge>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Vamos Conversar sobre
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Seu Projeto?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Pronto para entregar soluções que geram resultados reais. Entre em
              contato para discutir como posso contribuir com seus objetivos.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                {/* Availability Status */}
                <Card className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      Status Atual
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        label: "Disponibilidade:",
                        value: availability.startDate,
                        icon: Clock,
                      },
                      {
                        label: "Modalidade:",
                        value: availability.type,
                        icon: Users,
                      },
                      {
                        label: "Localização:",
                        value: availability.location,
                        icon: MapPin,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-white/80 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm text-gray-600">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Services */}
                <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      Serviços Oferecidos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <service.icon
                            className={`w-4 h-4 mt-0.5 ${service.color}`}
                          />
                          <span className="text-sm text-gray-600">
                            {service.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <Card
                        className={`hover:shadow-lg transition-all duration-300 border-2 ${contact.borderColor} bg-gradient-to-br ${contact.bgColor}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-md`}
                            >
                              <contact.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm mb-1">
                                {contact.title}
                              </h4>
                              <a
                                href={contact.href}
                                className={`${contact.textColor} hover:opacity-80 transition-opacity duration-200 text-sm font-medium`}
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
                              >
                                {contact.value}
                              </a>
                              <p className="text-xs text-gray-500 mt-1">
                                {contact.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="h-fit shadow-xl bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      Envie sua Proposta
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      Conte-me sobre seu projeto, necessidades e como posso
                      ajudar. Responderei com uma proposta detalhada em até 24
                      horas.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-3">
                          <Label
                            htmlFor="name"
                            className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                          >
                            <User className="w-4 h-4 text-blue-600" />
                            Nome / Empresa *
                          </Label>
                          <Input
                            id="name"
                            placeholder="Seu nome ou empresa"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl h-14 px-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/50 backdrop-blur-sm w-full"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4 text-blue-600" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl h-14 px-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/50 backdrop-blur-sm w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-3">
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4 text-blue-600" />
                            Telefone
                          </Label>
                          <Input
                            id="phone"
                            placeholder="(11) 99999-9999"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl h-14 px-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/50 backdrop-blur-sm w-full"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label
                            htmlFor="budget"
                            className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                          >
                            <DollarSign className="w-4 h-4 text-blue-600" />
                            Orçamento Estimado
                          </Label>
                          <Input
                            id="budget"
                            placeholder="R$ 5.000 - R$ 15.000"
                            value={formData.budget}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl h-14 px-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/50 backdrop-blur-sm w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label
                          htmlFor="project"
                          className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                        >
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          Tipo de Projeto *
                        </Label>
                        <Input
                          id="project"
                          placeholder="Ex: Desenvolvimento Power Apps, Automação, Frontend React"
                          required
                          value={formData.project}
                          onChange={handleChange}
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl h-14 px-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/50 backdrop-blur-sm w-full"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4 text-blue-600" />
                          Detalhes do Projeto *
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Descreva seu projeto, objetivos, cronograma desejado e qualquer informação relevante..."
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl px-4 py-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md resize-none bg-white/50 backdrop-blur-sm w-full min-h-[140px]"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label
                          htmlFor="timeline"
                          className="text-gray-700 font-semibold text-sm flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4 text-blue-600" />
                          Prazo Desejado
                        </Label>
                        <Input
                          id="timeline"
                          placeholder="Ex: 30 dias, 2 meses, urgente"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl h-14 px-4 text-base transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/50 backdrop-blur-sm w-full"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 font-bold text-lg rounded-2xl transition-all duration-500 relative overflow-hidden group transform hover:scale-105"
                        size="lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <Send className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                        <span className="relative z-10">
                          Enviar Proposta de Projeto
                        </span>
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        Ao enviar, você receberá uma resposta personalizada com
                        proposta técnica e comercial detalhada.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a
                      href="https://wa.me/5515998176173"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      💬 WhatsApp Direto
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a
                      href="https://calendly.com/viniciuslima1915"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      📅 Agendar Reunião
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold">
                    Transforme Suas Ideias em Resultados Reais
                  </h3>
                </div>
                <p className="text-blue-100 mb-6 text-lg">
                  Com experiência comprovada em projetos que geram{" "}
                  <span className="font-bold text-white">
                    30% de redução de tempo
                  </span>{" "}
                  e{" "}
                  <span className="font-bold text-white">
                    20% de aumento de produtividade
                  </span>
                  , estou pronto para seu próximo desafio.
                </p>
                <div className="flex justify-center items-center gap-2 text-blue-100">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">
                    Resposta garantida em até 2 horas úteis
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;
