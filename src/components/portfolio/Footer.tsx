import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ViniciusProvasi",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vinicius-provasi/",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:viniciuslima1915@outlook.com.br",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                  VP
                </div>
                <span className="font-semibold text-lg">Vinícius Provasi</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desenvolvedor Front-End especializado em React e TypeScript.
                Criando interfaces modernas e experiências digitais
                excepcionais.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {["Sobre", "Experiência", "Projetos", "Contato"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Sorocaba, São Paulo</p>
                <p>(15) 99817-6173</p>
                <p>viniciuslima1915@outlook.com.br</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Vinícius Provasi. Todos os
                direitos reservados.
              </p>

              {/* Back to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Topo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
