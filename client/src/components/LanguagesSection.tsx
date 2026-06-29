import { motion } from "framer-motion";
import { Globe } from "lucide-react";

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

export function LanguagesSection() {
  const languages = [
    {
      name: "English",
      proficiency: "Professional working proficiency",
      level: 90,
      detail: "Duolingo Score 115",
    },
    {
      name: "Tamil",
      proficiency: "Professional working proficiency",
      level: 85,
      detail: "Native speaker",
    },
    {
      name: "German",
      proficiency: "Limited working proficiency",
      level: 60,
      detail: "Duolingo Score 80",
    },
    {
      name: "Hindi",
      proficiency: "Elementary proficiency",
      level: 50,
      detail: "Conversational",
    },
    {
      name: "Sourashtra",
      proficiency: "Native or bilingual proficiency",
      level: 95,
      detail: "Native speaker",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
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
            <Globe className="w-10 h-10" />
            Languages
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((lang, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-panel p-6 neon-border hover:neon-glow transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-1">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {lang.proficiency}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-accent">
                    {lang.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-background/50 rounded-full h-2 mb-3 overflow-hidden border border-border/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  />
                </div>

                <p className="text-xs text-muted-foreground">{lang.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
