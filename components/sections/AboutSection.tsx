'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Zap, Globe } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'From React frontends to Node.js backends, I build complete solutions that scale.',
    },
    {
      icon: Globe,
      title: 'Web3 Pioneer',
      description: 'Deep experience with smart contracts, DeFi protocols, and blockchain infrastructure.',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging LLMs, LangChain, and custom AI tools to create intelligent applications.',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Fast turnaround times with quality code, available evenings and weekends.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a versatile developer who bridges the gap between traditional web development 
            and cutting-edge technologies. From student to hybrid fullstack + Web3 developer 
            with AI experience, I help startups and established companies build the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Starting as a curious student diving into code, I quickly discovered my passion 
                for building things that matter. What began with simple web applications evolved 
                into a deep fascination with blockchain technology and artificial intelligence.
              </p>
              <p>
                Today, I specialize in creating production-ready applications that leverage the 
                best of Web3, AI, and traditional full-stack development. I've worked with 
                startups in the crypto space, built DeFi tools, and integrated AI capabilities 
                into real-world applications.
              </p>
              <p>
                My approach combines technical excellence with business understanding - I don't 
                just write code, I solve problems and create value for users and stakeholders.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">Available Evenings & Weekends</Badge>
              <Badge variant="secondary">Europe Timezone</Badge>
              <Badge variant="secondary">Fast Response Time</Badge>
              <Badge variant="secondary">Crypto & Fiat Payments</Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/30 transition-colors">
                  <CardContent className="p-6">
                    <highlight.icon className="h-10 w-10 text-purple-400 mb-4" />
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}