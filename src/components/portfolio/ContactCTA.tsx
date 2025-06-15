import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
} from "lucide-react";

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Direto",
      value: "viniciuslima1915@outlook.com.br",
      href: "mailto:viniciuslima1915@outlook.com.br",
      description: "Resposta em até 2 horas úteis",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      icon: Phone,
      title: "WhatsApp/Telefone",
      value: "(15) 99817-6173",
      href: "tel:+5515998176173",
      description: "Disponível das 8h às 18h",
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/vinicius-provasi",
      href: "https://www.linkedin.com/in/vinicius-provasi/",
      description: "Rede profissional ativa",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ViniciusProvasi",
      href: "https://github.com/ViniciusProvasi",
      description: "Código e projetos públicos",
      color: "bg-gray-50 border-gray-200 text-gray-700",
    },
  ];

  const availability = {
    status: "Disponível para novas oportunidades",
    startDate: "Imediato",
    type: "Tempo integral ou projetos",
    location: "Sorocaba, SP ou Remoto",
  };

  const services = [
    "Desenvolvimento de Aplicações Power Platform",
    "Automação de Processos Empresariais",
    "Desenvolvimento Frontend (React/TypeScript)",
    "Integração de Sistemas e APIs",
    "Consultoria em Otimização de Processos",
    "Migração e Modernização de Sistemas",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4 bg-green-100 text-green-800">
            {availability.status}
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Vamos Conversar sobre Seu Projeto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para entregar soluções que geram resultados reais. Entre em
            contato para discutir como posso contribuir com seus objetivos.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Availability Status */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Status Atual
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Disponibilidade:
                    </span>
                    <Badge
                      variant="outline"
                      className="text-xs bg-green-100 text-green-800"
                    >
                      {availability.startDate}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Modalidade:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {availability.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Localização:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {availability.location}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Serviços Oferecidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-blue-600 mt-1 flex-shrink-0">
                          •
                        </span>
                        {service}
                      </li>
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
                  >
                    <Card
                      className={`hover:shadow-md transition-shadow duration-300 border-2 ${contact.color.split(" ")[1]}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg ${contact.color.split(" ")[0]} flex items-center justify-center`}
                          >
                            <contact.icon
                              className={`w-5 h-5 ${contact.color.split(" ")[2]}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">
                              {contact.title}
                            </h4>
                            <a
                              href={contact.href}
                              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
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
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-xl">Envie sua Proposta</CardTitle>
                  <p className="text-gray-600 text-sm">
                    Conte-me sobre seu projeto, necessidades e como posso
                    ajudar. Responderei com uma proposta detalhada em até 24
                    horas.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome / Empresa *</Label>
                        <Input
                          id="name"
                          placeholder="Seu nome ou empresa"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(11) 99999-9999" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Orçamento Estimado</Label>
                        <Input id="budget" placeholder="R$ 5.000 - R$ 15.000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Tipo de Projeto *</Label>
                      <Input
                        id="project"
                        placeholder="Ex: Desenvolvimento Power Apps, Automação, Frontend React"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Detalhes do Projeto *</Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva seu projeto, objetivos, cronograma desejado e qualquer informação relevante..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Prazo Desejado</Label>
                      <Input
                        id="timeline"
                        placeholder="Ex: 30 dias, 2 meses, urgente"
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Proposta de Projeto
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
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5515998176173"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Direto
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Reunião
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Transforme Suas Ideias em Resultados Reais
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Com experiência comprovada em projetos que geram{" "}
                <strong>30% de redução de tempo</strong> e
                <strong> 20% de aumento de produtividade</strong>, estou pronto
                para seu próximo desafio.
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
  );
};

export default ContactCTA;
