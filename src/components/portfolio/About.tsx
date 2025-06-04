import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Especialização",
      description:
        "Power Apps, Power Automate, SharePoint e Power BI para otimização operacional",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Redução de até 30% no tempo de tarefas administrativas através de automação",
    },
    {
      icon: TrendingUp,
      title: "Melhoria Contínua",
      description:
        "Forte capacidade analítica para identificação de gargalos e implementação de melhorias",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Resumo Profissional
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Profissional com mais de 4 anos de experiência em automação de
                processos e desenvolvimento de sistemas digitais, com
                especialização em ferramentas da Microsoft Power Platform.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Atualmente cursando Tecnólogo em Análise e Desenvolvimento de
                Sistemas na FIAP e constantemente me atualizando com as melhores
                práticas em desenvolvimento web moderno, incluindo React,
                TypeScript e JavaScript.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">4+ Anos de Experiência</Badge>
                <Badge variant="secondary">Power Platform Expert</Badge>
                <Badge variant="secondary">Automação de Processos</Badge>
                <Badge variant="secondary">Desenvolvimento Web</Badge>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <highlight.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
