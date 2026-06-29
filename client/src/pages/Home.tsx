import { HeroScene } from "@/components/HeroScene";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      {/* Hero Section with 3D Scene */}
      <section className="relative w-full h-screen">
        <HeroScene />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text">
              GOKULRAJ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Aspiring Full-Stack Developer
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Crafting immersive digital experiences with React, Python & 3D
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto"
            >
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 neon-glow px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore My Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            I'm an aspiring full-stack developer passionate about creating
            beautiful, interactive digital experiences. Currently studying B.E.
            CSE at Knowledge Institute of Technology (KIOT), I combine
            technical expertise with creative design to build applications that
            not only work flawlessly but also delight users.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            With experience in React, JavaScript, Python, and modern web
            technologies, I'm committed to continuous learning and pushing the
            boundaries of what's possible on the web. I'm open to opportunities
            in Coimbatore and surrounding areas for on-site or hybrid roles.
          </motion.p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
            >
              Skills & Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
                },
                {
                  category: "Backend",
                  skills: ["Python", "Node.js", "Express", "REST APIs"],
                },
                {
                  category: "3D & Animation",
                  skills: ["Three.js", "GSAP", "Framer Motion", "Spline"],
                },
                {
                  category: "Tools & Platforms",
                  skills: ["Git", "GitHub", "Figma", "VS Code"],
                },
                {
                  category: "Design",
                  skills: ["UI/UX Design", "Responsive Design", "Figma"],
                },
                {
                  category: "Other",
                  skills: ["HTML", "CSS", "Problem Solving", "Communication"],
                },
              ].map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-panel p-6 neon-border hover:neon-glow transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-accent">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "3D Portfolio Website",
                  description:
                    "An immersive portfolio showcasing 3D animations and interactive elements built with Three.js and React Three Fiber.",
                  tags: ["React", "Three.js", "GSAP", "Tailwind"],
                  link: "#",
                },
                {
                  title: "E-Commerce Platform",
                  description:
                    "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
                  tags: ["React", "Node.js", "MongoDB", "Stripe"],
                  link: "#",
                },
                {
                  title: "Task Management App",
                  description:
                    "Collaborative task management tool with real-time updates and team collaboration features.",
                  tags: ["React", "Firebase", "Tailwind", "TypeScript"],
                  link: "#",
                },
                {
                  title: "AI Chat Interface",
                  description:
                    "Modern chat interface with AI-powered responses and beautiful UI animations.",
                  tags: ["React", "Python", "API", "Framer Motion"],
                  link: "#",
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-8 neon-border hover:neon-glow transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold mb-3 text-accent group-hover:text-accent/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full neon-border text-accent hover:bg-accent/10"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
            >
              Experience & Education
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  title: "Google Student Ambassador",
                  company: "Google",
                  period: "Current",
                  description:
                    "Promoting Google technologies and supporting student community initiatives.",
                },
                {
                  title: "B.E. Computer Science Engineering",
                  company: "Knowledge Institute of Technology (KIOT)",
                  period: "In Progress",
                  description:
                    "Pursuing degree with focus on full-stack development and emerging technologies.",
                },
                {
                  title: "Developer Intern",
                  company: "Codec Technologies India",
                  period: "Recent",
                  description:
                    "Worked on web development projects using modern React and JavaScript technologies.",
                },
              ].map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-panel p-8 neon-border hover:neon-glow transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-accent">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground px-3 py-1 bg-accent/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-12"
            >
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <a
                href="mailto:gokulrajmisox@gmail.com"
                className="glass-panel p-4 neon-border hover:neon-glow transition-all duration-300 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/gokulraj-k-g/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 neon-border hover:neon-glow transition-all duration-300 inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 text-accent" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/gokulrajmisox"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 neon-border hover:neon-glow transition-all duration-300 inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5 text-accent" />
                <span>GitHub</span>
              </a>
              <a
                href="https://instagram.com/goxzion"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 neon-border hover:neon-glow transition-all duration-300 inline-flex items-center gap-2"
              >
                <Instagram className="w-5 h-5 text-accent" />
                <span>Instagram</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 neon-glow px-8 py-6 text-lg">
                Send Me an Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-border/50 text-center text-muted-foreground">
        <p>© 2026 Gokulraj K G. All rights reserved.</p>
      </footer>
    </div>
  );
}
