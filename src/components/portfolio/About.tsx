import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Especialização Frontend",
      description:
        "React, TypeScript e tecnologias web modernas para criar interfaces excepcionais",
    },
    {
      icon: Zap,
      title: "Performance & UX",
      description:
        "Otimização de aplicações web com foco em experiência do usuário e performance",
    },
    {
      icon: TrendingUp,
      title: "Desenvolvimento Ágil",
      description:
        "Metodologias modernas e boas práticas para entrega contínua de valor",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre o Desenvolvedor
          </h2>
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
                Desenvolvedor Frontend
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desenvolvedor Front-End com mais de 4 anos de experiência
                criando interfaces web modernas e responsivas. Especializado em
                React, TypeScript e no ecossistema JavaScript para
                desenvolvimento de aplicações escaláveis.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Formação em Análise e Desenvolvimento de Sistemas (FIAP) e
                certificações em tecnologias web modernas. Experiência
                comprovada em projetos que aumentaram a produtividade e
                melhoraram a experiência do usuário.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Developer</Badge>
                <Badge variant="secondary">TypeScript Expert</Badge>
                <Badge variant="secondary">UI/UX Focus</Badge>
                <Badge variant="secondary">Performance Optimization</Badge>
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
