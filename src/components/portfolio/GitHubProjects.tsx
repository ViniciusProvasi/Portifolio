import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, Code2 } from "lucide-react";

const GitHubProjects = () => {
  // Projects from GitHub (these would ideally be fetched from GitHub API)
  const projects = [
    {
      name: "React Task Manager",
      description:
        "Aplicação completa de gerenciamento de tarefas construída com React, TypeScript e Context API. Interface moderna e responsiva.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Context API"],
      stars: 12,
      forks: 3,
      language: "TypeScript",
      githubUrl: "https://github.com/ViniciusProvasi",
      demoUrl: "#",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Portfolio Website",
      description:
        "Site pessoal desenvolvido com React e Framer Motion. Design moderno e animações suaves para apresentar projetos e habilidades.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      stars: 8,
      forks: 2,
      language: "JavaScript",
      githubUrl: "https://github.com/ViniciusProvasi",
      demoUrl: "#",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "E-commerce Dashboard",
      description:
        "Dashboard administrativo para e-commerce com gráficos interativos, gestão de produtos e análise de vendas usando React e Chart.js.",
      technologies: ["React", "Chart.js", "Material-UI", "REST API"],
      stars: 15,
      forks: 5,
      language: "JavaScript",
      githubUrl: "https://github.com/ViniciusProvasi",
      demoUrl: "#",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Weather App PWA",
      description:
        "Progressive Web App para consulta do clima com geolocalização, cache offline e notificações push usando Service Workers.",
      technologies: ["React", "PWA", "Service Workers", "Weather API"],
      stars: 20,
      forks: 7,
      language: "TypeScript",
      githubUrl: "https://github.com/ViniciusProvasi",
      demoUrl: "#",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "React Components Library",
      description:
        "Biblioteca de componentes reutilizáveis documentada com Storybook. Inclui temas customizáveis e acessibilidade.",
      technologies: ["React", "Storybook", "Styled Components", "TypeScript"],
      stars: 25,
      forks: 10,
      language: "TypeScript",
      githubUrl: "https://github.com/ViniciusProvasi",
      demoUrl: "#",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Real-time Chat App",
      description:
        "Aplicação de chat em tempo real com autenticação, salas privadas e emoji picker usando Socket.IO e React.",
      technologies: ["React", "Socket.IO", "Node.js", "Express"],
      stars: 18,
      forks: 6,
      language: "JavaScript",
      githubUrl: "https://github.com/ViniciusProvasi",
      demoUrl: "#",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const stats = [
    { icon: Code2, value: "25+", label: "Repositórios Públicos" },
    { icon: Star, value: "100+", label: "Stars no GitHub" },
    { icon: GitFork, value: "30+", label: "Forks" },
    { icon: Github, value: "500+", label: "Commits este ano" },
  ];

  return (
    <section id="github-projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projetos Open Source
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projetos frontend desenvolvidos com as melhores práticas e
            tecnologias modernas
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${project.color}`}
                      >
                        {project.language}
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 text-xs bg-gray-700 hover:bg-gray-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          💻 Código
                        </a>
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 text-xs"
                        disabled={project.demoUrl === "#"}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild>
            <a
              href="https://github.com/ViniciusProvasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver Todos os Projetos no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubProjects;
