'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Download, 
  ExternalLink,
  ChevronDown,
  Code2,
  Smartphone,
  Database,
  Brain,
  Zap,
  Shield,
  Globe,
  Star,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const techStack = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'Shadcn/UI', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Supabase', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'Express', level: 80 },
    ],
    web3: [
      { name: 'Solidity', level: 82 },
      { name: 'Ethers.js', level: 85 },
      { name: 'Hardhat', level: 80 },
      { name: 'IPFS', level: 75 },
      { name: 'Web3 Integration', level: 88 },
    ],
    ai: [
      { name: 'Python', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'LangChain', level: 82 },
      { name: 'OpenAI API', level: 88 },
      { name: 'Claude API', level: 90 },
    ]
  };

  const projects = [
    {
      title: 'LearnLoop',
      description: 'AI-powered SaaS platform for intelligent revision with white-label solutions for educational institutions.',
      tech: ['Next.js', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'Claude API'],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/robincassard/learnloop',
      demo: 'https://learnloop.education',
      highlights: ['OCR integration', 'Multi-role dashboard', 'White-label ready']
    },
    {
      title: 'DEX Price Comparator',
      description: 'Web3 frontend application comparing token prices across different decentralized exchanges.',
      tech: ['React', 'Ethers.js', 'Web3', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/robincassard/dex-comparator',
      demo: 'https://dex-compare.vercel.app',
      highlights: ['Wallet connection', 'Real-time prices', 'No backend needed']
    },
    {
      title: 'CausaliScribe',
      description: 'AI-powered causal narrative generator using LLM and causal inference for statistical analysis.',
      tech: ['Python', 'LangChain', 'Claude API', 'Streamlit'],
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/robincassard/causaliscribe',
      demo: 'https://causaliscribe.streamlit.app',
      highlights: ['MS DSBA project', 'Causal inference', 'Statistical insights']
    },
    {
      title: 'EthiCraft',
      description: 'AI ethics impact simulator with bias detection metrics and synthetic data generation.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'React', 'ML Libraries'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/robincassard/ethicraft',
      demo: 'https://ethicraft.app',
      highlights: ['Fairness metrics', 'Bias simulation', 'Audit dashboard']
    },
    {
      title: 'FlashBundler',
      description: 'DeFi infrastructure for transaction fee optimization with MEV protection and ZK claims.',
      tech: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS'],
      image: 'https://images.pexels.com/photos/8369769/pexels-photo-8369769.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/robincassard/flashbundler',
      demo: 'https://flashbundler.defi',
      highlights: ['Gas optimization', 'MEV protection', 'Scalability focus']
    },
    {
      title: 'Niche Market Scout',
      description: 'Business intelligence platform using LLM, web scraping and dashboard for emerging market detection.',
      tech: ['Next.js', 'OpenAI', 'LangChain', 'Web Scraping', 'NLP'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/robincassard/market-scout',
      demo: 'https://market-scout.app',
      highlights: ['Weak signal detection', 'NLP analysis', 'Market trends']
    }
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web3 dApp Development',
      description: 'Full-stack decentralized applications with wallet integration, smart contracts, and modern UI.',
      price: 'From $8K',
      features: ['Smart Contract Development', 'Wallet Integration', 'DeFi Protocol Building', 'NFT Marketplaces']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Integration & Automation',
      description: 'Custom AI solutions, chatbots, and intelligent automation systems for your business.',
      price: 'From $5K',
      features: ['Custom LLM Integration', 'RAG Systems', 'AI Chatbots', 'Process Automation']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Fullstack Web Applications',
      description: 'Modern, scalable web applications with responsive design and robust backend architecture.',
      price: 'From $6K',
      features: ['React/Next.js Frontend', 'API Development', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Solutions & Analytics',
      description: 'Web scraping, data processing, vector databases, and custom analytics dashboards.',
      price: 'From $4K',
      features: ['Web Scraping', 'ETL Pipelines', 'Analytics Dashboards', 'Vector Databases']
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Startup Founder',
      content: 'Robin delivered a high-quality Web3 solution for our token platform. His technical expertise and reliability were impressive.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Thomas Martin',
      role: 'EdTech Company CEO',
      content: 'Working with Robin on our AI-powered learning platform was excellent. He delivered beyond expectations with great communication.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Sophie Laurent',
      role: 'Product Manager',
      content: 'Robin\'s full-stack development skills and AI integration expertise helped us build a competitive advantage in our market.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Robin CASSARD
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="#contact">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Computer Science Engineering Student{' '}
                <span className="text-gradient">& Web3/AI Developer</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                24-year-old computer science engineering student at UTBM, specializing in AI. Building innovative Web3 and AI solutions while working as EDI technician at FORVIA. Available for freelance projects evenings & weekends, France timezone.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="lg" asChild>
                  <a href="#projects">
                    View Projects
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/robincassard" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/robincassard" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:robin.cassard@dev.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative bg-card rounded-2xl p-8 glow-effect">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Available for Freelance</h3>
                    <p className="text-muted-foreground mb-4">Evenings & weekends - France timezone</p>
                    <div className="flex justify-center space-x-2">
                      <Badge variant="secondary">Available</Badge>
                      <Badge variant="outline">France UTC+2</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              From Student to <span className="text-gradient">Web3 Pioneer</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Currently pursuing a computer science engineering degree at UTBM with a specialization in AI, while working as an EDI technician at FORVIA. My passion for emerging technologies led me to master Web3 development and AI integration.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  I combine academic knowledge with hands-on experience to build innovative solutions spanning blockchain, artificial intelligence, and modern web applications. Available for freelance projects during evenings and weekends.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>UTBM Engineering Student</Badge>
                  <Badge>AI Specialization</Badge>
                  <Badge>FORVIA Alternance</Badge>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">24-48h response time, agile development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Security First</h4>
                    <p className="text-sm text-muted-foreground">Audited smart contracts, secure coding practices</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">France Based</h4>
                    <p className="text-sm text-muted-foreground">UTC+2 timezone, crypto & fiat payments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="web3">Web3</TabsTrigger>
                <TabsTrigger value="ai">AI/ML</TabsTrigger>
              </TabsList>
              {Object.entries(techStack).map(([category, skills]) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions spanning Web3, AI, and fullstack applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/50 hover:border-border transition-all duration-300 glow-effect">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="icon" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground">4.9</span>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Services</span> & Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services tailored for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full p-6 hover:glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-gradient">{service.price}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-8">What Clients Say</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build <span className="text-gradient">Something Amazing</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to bring your Web3 or AI project to life? Let's discuss your vision.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input placeholder="your@email.com" type="email" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select className="w-full p-3 bg-input border border-border rounded-md">
                        <option>Web3 dApp Development</option>
                        <option>AI Integration</option>
                        <option>Fullstack Application</option>
                        <option>Smart Contract Audit</option>
                        <option>Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select className="w-full p-3 bg-input border border-border rounded-md">
                        <option>$5K - $10K</option>
                        <option>$10K - $25K</option>
                        <option>$25K - $50K</option>
                        <option>$50K+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details</label>
                      <Textarea 
                        placeholder="Tell me about your project, timeline, and specific requirements..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Quick Connect</h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start" variant="outline" size="lg" asChild>
                      <a href="https://calendly.com/robincassard/30min" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-5 h-5 mr-3" />
                        Schedule a Call
                      </a>
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="lg" asChild>
                      <a href="mailto:robin.cassard@dev.fr">
                        <Mail className="w-5 h-5 mr-3" />
                        robin.cassard@dev.fr
                      </a>
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="lg" asChild>
                      <a href="https://t.me/robincassard_dev" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-3" />
                        Telegram
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Timezone</span>
                      <Badge>France (UTC+2)</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Response Time</span>
                      <Badge variant="secondary">Fast replies</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Availability</span>
                      <Badge className="bg-green-500">Evenings & weekends</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment</span>
                      <Badge variant="outline">Crypto accepted</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/robincassard" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/robincassard" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="mailto:robin.cassard@dev.fr" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Robin CASSARD
            </motion.div>
            <p className="text-muted-foreground mb-6">
              Computer Science Engineering Student • EDI Technician at FORVIA • Web3/AI Developer
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Robin CASSARD. Building the future, one block at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}