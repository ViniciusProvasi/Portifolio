import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Database, Settings, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Power Platform & Ferramentas",
      icon: Database,
      skills: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Metodologias",
      icon: Settings,
      skills: [
        "Lean Manufacturing",
        "Kaizen",
        "Melhoria Contínua",
        "Automação Industrial",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Outros",
      icon: Wrench,
      skills: ["Git", "Gestão de Requisitos", "Documentação Técnica"],
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Competências Técnicas
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Amplo conhecimento em tecnologias modernas e metodologias de
            desenvolvimento
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Idiomas
            </h3>
            <div className="flex justify-center gap-8">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 text-xl font-bold">
                      {lang.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900">{lang.name}</h4>
                  <p className="text-gray-600 text-sm">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
