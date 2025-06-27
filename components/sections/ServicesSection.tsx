'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Brain, Code, Database, Search, Zap } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web3 Landing Pages & dApp MVPs',
      description: 'Complete Web3 applications from concept to deployment, including wallet integration and smart contract connectivity.',
      features: ['Wallet Connect Integration', 'Smart Contract UI', 'Token Interactions', 'DeFi Protocol Integration'],
      pricing: 'From $2,500',
      timeline: '2-4 weeks',
    },
    {
      icon: Code,
      title: 'Wallet Integration & Smart Contracts',
      description: 'Secure smart contract development and seamless wallet integration for your dApp or DeFi project.',
      features: ['Solidity Development', 'Contract Auditing', 'Gas Optimization', 'Multi-chain Deployment'],
      pricing: 'From $1,800',
      timeline: '1-3 weeks',
    },
    {
      icon: Brain,
      title: 'AI Integration & Automation',
      description: 'Custom AI solutions using LLMs, automation tools, and intelligent data processing for enhanced UX.',
      features: ['OpenAI/Claude Integration', 'Custom LLM Tools', 'Automated Workflows', 'Data Processing'],
      pricing: 'From $2,000',
      timeline: '2-3 weeks',
    },
    {
      icon: Database,
      title: 'Crypto Dashboards & APIs',
      description: 'Real-time data dashboards and robust backend APIs for crypto and DeFi applications.',
      features: ['Real-time Data', 'Custom Analytics', 'RESTful APIs', 'Database Design'],
      pricing: 'From $3,000',
      timeline: '3-5 weeks',
    },
    {
      icon: Search,
      title: 'Web Scraping & Vector Databases',
      description: 'Advanced data collection and AI-powered search systems using vector databases and embeddings.',
      features: ['Web Scraping Bots', 'Vector Search', 'Data Pipelines', 'AI Embeddings'],
      pricing: 'From $1,500',
      timeline: '1-2 weeks',
    },
    {
      icon: Zap,
      title: 'Full-Stack Consulting',
      description: 'Technical consulting and architecture planning for complex projects spanning Web3, AI, and traditional tech.',
      features: ['Architecture Review', 'Technical Strategy', 'Code Review', 'Team Mentoring'],
      pricing: 'From $150/hour',
      timeline: 'Flexible',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Productized services designed to help you build, launch, and scale your Web3 and AI projects efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/30 transition-all group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
                      <service.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2">
                        {service.timeline}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-purple-400">
                        {service.pricing}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6">
                Have a unique project that doesn't fit these packages? Let's discuss your specific needs 
                and create a custom solution that perfectly matches your requirements and budget.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Let's Talk Custom Solutions
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}