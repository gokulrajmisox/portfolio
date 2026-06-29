import { motion } from "framer-motion";
import { Award } from "lucide-react";

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

export function CertificatesSection() {
  const certificates = [
    {
      title: "Siemens Mobility - Operations Industrial Engineer",
      issuer: "Forage",
      date: "Jun 2026",
      skills: ["System Administration"],
      credentialId: "jwr2zLtYzeNCo6Lwo",
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      date: "Jun 2026",
      skills: ["Python Programming"],
      credentialId: "ad0e4a5f-556a-4ce1-820c-5d0719cf58a0",
    },
    {
      title: "Build an AI Agent",
      issuer: "IBM",
      date: "May 2026",
      skills: ["AI", "Agentic AI Development", "Machine Learning"],
      credentialId: "2305f226-3515-4fc9-bab3-b104c57877de",
    },
    {
      title: "Critical Thinking in the AI Era",
      issuer: "HP LIFE",
      date: "May 2026",
      skills: ["Critical Thinking", "AI Literacy"],
      credentialId: "2bce667e-d178-4eb8-a9f9-da494c9d81b0",
    },
    {
      title: "Professional Networking for Career Growth",
      issuer: "HP LIFE",
      date: "May 2026",
      skills: ["Networking", "Career Development"],
      credentialId: "83243ab6-559d-493c-810f-0e188c619973",
    },
    {
      title: "AI on Jetson Nano",
      issuer: "NVIDIA",
      date: "May 2026",
      skills: ["AI", "Edge Computing", "IoT"],
      credentialId: "_SMMCkJuTvGTGRZ4HPswog",
    },
  ];

  return (
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
            className="text-4xl md:text-5xl font-bold mb-12 gradient-text flex items-center gap-3"
          >
            <Award className="w-10 h-10" />
            Certifications & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-panel p-6 neon-border hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-accent mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-4">
                  Issued: {cert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground/60 break-all">
                  ID: {cert.credentialId}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
