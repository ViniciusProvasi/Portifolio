import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend Frameworks",
      icon: "⚛️",
      techs: ["React", "Next.js", "Vue.js"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      category: "Languages",
      icon: "📝",
      techs: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
      color: "bg-green-50 border-green-200",
    },
    {
      category: "Styling & UI",
      icon: "🎨",
      techs: [
        "Tailwind CSS",
        "Styled Components",
        "Material-UI",
        "Framer Motion",
      ],
      color: "bg-purple-50 border-purple-200",
    },
    {
      category: "Tools & Build",
      icon: "🛠️",
      techs: ["Vite", "Webpack", "npm/yarn", "Git"],
      color: "bg-orange-50 border-orange-200",
    },
    {
      category: "Testing & Quality",
      icon: "🧪",
      techs: ["Jest", "Vitest", "ESLint", "Prettier"],
      color: "bg-red-50 border-red-200",
    },
    {
      category: "Backend & APIs",
      icon: "🔗",
      techs: ["REST APIs", "GraphQL", "Node.js", "Express"],
      color: "bg-indigo-50 border-indigo-200",
    },
  ];

  const stats = [
    { number: "4+", label: "Anos de Experiência" },
    { number: "30+", label: "Projetos Entregues" },
    { number: "20%", label: "Aumento de Produtividade" },
    { number: "99%", label: "Satisfação do Cliente" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stack Tecnológico
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tecnologias modernas e ferramentas que domino para criar soluções
            web de alta qualidade
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${tech.color}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="font-semibold text-gray-900">
                        {tech.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.techs.map((item, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Sempre Aprendendo</h3>
              <p className="text-blue-100 mb-6">
                Atualmente cursando Tecnólogo em Análise e Desenvolvimento de
                Sistemas na FIAP e constantemente me atualizando com as últimas
                tecnologias do mercado.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  React Avançado
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  Web Performance
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
