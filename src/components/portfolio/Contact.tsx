import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "viniciuslima1915@outlook.com.br",
      href: "mailto:viniciuslima1915@outlook.com.br",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(15) 99817-6173",
      href: "tel:+5515998176173",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Boituva, SP",
      href: "#",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ViniciusProvasi",
      href: "https://github.com/ViniciusProvasi",
      color: "bg-gray-100 text-gray-600",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/vinicius-provasi/",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estou sempre aberto para discutir novas oportunidades e projetos
            interessantes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Informações de Contato
                </h3>
                <p className="text-gray-600 mb-8">
                  Fique à vontade para entrar em contato comigo através de
                  qualquer um dos canais abaixo. Respondo rapidamente e estou
                  sempre disposto a conversar sobre tecnologia e oportunidades.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-lg ${contact.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <contact.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">
                              {contact.title}
                            </h4>
                            <a
                              href={contact.href}
                              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              {contact.value}
                            </a>
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
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Sua mensagem..."
                        rows={5}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
