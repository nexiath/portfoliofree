'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'LearnLoop',
      description: 'AI-powered revision and learning optimization SaaS for educational institutions.',
      longDescription: 'An intelligent learning platform that uses AI to personalize study schedules, optimize revision timing, and improve learning outcomes. Includes analytics dashboard for educators.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Supabase', 'OpenAI API', 'Stripe', 'Analytics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://learnloop.io',
      stars: 28,
      category: 'SaaS',
    },
    {
      id: 2,
      title: 'FlashBundler',
      description: 'Gas fee optimization infrastructure for DeFi transactions and MEV protection.',
      longDescription: 'Advanced transaction bundling service that optimizes gas fees and provides MEV protection for DeFi users. Features smart routing algorithms and real-time gas price optimization.',
      image: 'https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Hardhat', 'Node.js', 'Ethers.js', 'Go'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://flashbundler.xyz',
      stars: 65,
      category: 'Web3',
    },
    {
      id: 3,
      title: 'Niche Market Scout',
      description: 'AI-powered market research tool using LLMs to identify weak signals and opportunities.',
      longDescription: 'An intelligent market research platform that leverages large language models to analyze market trends, identify emerging opportunities, and provide actionable insights. Features custom LLM integration and data visualization dashboard.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'OpenAI API', 'LangChain', 'PostgreSQL', 'D3.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://market-scout.vercel.app',
      stars: 23,
      category: 'AI',
    },
    {
      id: 4,
      title: 'DEX Price Comparator',
      description: 'Real-time price comparison across decentralized exchanges with wallet integration.',
      longDescription: 'A comprehensive DeFi tool that aggregates prices from multiple DEXs, provides arbitrage opportunities, and includes wallet connectivity for seamless trading. Built with React, Ethers.js, and real-time WebSocket connections.',
      image: 'https://images.pexels.com/photos/6771027/pexels-photo-6771027.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Ethers.js', 'Web3', 'TailwindCSS', 'WebSocket'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://dex-comparator.vercel.app',
      stars: 47,
      category: 'Web3',
    },
    {
      id: 5,
      title: 'FrameStore',
      description: 'Farcaster Frame Gallery & Editor with drag-and-drop creation and Web3 integration.',
      longDescription: 'A comprehensive platform for creating, sharing, and discovering Farcaster Frames. Features visual drag-and-drop editor, AI image generation, real-time preview, Web3 wallet authentication, and community interaction with analytics tracking.',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Wagmi', 'Tailwind CSS'],
      githubUrl: 'https://github.com/nexiath/frameStore',
      liveUrl: 'https://framestore.vercel.app',
      stars: 45,
      category: 'Web3',
    },
    {
      id: 6,
      title: 'ZKClaim',
      description: 'Zero-knowledge proof system for private on-chain claim attestation.',
      longDescription: 'A privacy-preserving attestation system using zero-knowledge proofs to verify claims without revealing sensitive information. Built with cutting-edge cryptographic protocols.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Circom', 'TypeScript', 'Zero-Knowledge', 'IPFS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://zkclaim.xyz',
      stars: 42,
      category: 'Web3',
    },
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web3', 'AI', 'SaaS'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of impactful projects showcasing my expertise in Web3, AI, and full-stack development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/30 transition-all group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {project.title}
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="h-4 w-4 mr-1" />
                              {project.stars}
                            </div>
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {project.longDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}