'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techStack = {
    frontend: {
      title: 'Frontend',
      technologies: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'Shadcn/ui', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    backend: {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Supabase', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Python', level: 75 },
      ],
    },
    web3: {
      title: 'Web3',
      technologies: [
        { name: 'Ethers.js', level: 85 },
        { name: 'Solidity', level: 80 },
        { name: 'Hardhat', level: 75 },
        { name: 'IPFS', level: 70 },
        { name: 'The Graph', level: 70 },
        { name: 'Wallet Connect', level: 85 },
      ],
    },
    ai: {
      title: 'AI/ML',
      technologies: [
        { name: 'OpenAI API', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'Claude API', level: 80 },
        { name: 'Vector Databases', level: 75 },
        { name: 'Python ML', level: 70 },
        { name: 'Custom LLM Tools', level: 80 },
      ],
    },
    devops: {
      title: 'DevOps',
      technologies: [
        { name: 'Vercel', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Railway', level: 75 },
        { name: 'WSL', level: 85 },
        { name: 'Git/GitHub', level: 95 },
      ],
    },
  };

  const categories = Object.keys(techStack) as Array<keyof typeof techStack>;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technologies and frameworks I use to build scalable, secure, and innovative applications.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {techStack[category].title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  {techStack[activeCategory].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techStack[activeCategory].technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{tech.name}</span>
                        <Badge variant="secondary">{tech.level}%</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}