'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Building Scalable DeFi Applications with Modern Web3 Stack',
      excerpt: 'A comprehensive guide to architecting DeFi applications that can handle millions of users while maintaining security and performance.',
      category: 'Web3',
      date: '2025-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/6771027/pexels-photo-6771027.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'AI-Powered Smart Contract Auditing: The Future of Security',
      excerpt: 'How artificial intelligence is revolutionizing smart contract security auditing and reducing vulnerabilities in DeFi protocols.',
      category: 'AI',
      date: '2025-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Zero-Knowledge Proofs in Practice: Privacy-First dApps',
      excerpt: 'Real-world implementation of zero-knowledge proofs for building privacy-preserving decentralized applications.',
      category: 'Web3',
      date: '2025-01-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Integrating LLMs into Web3: Building Intelligent dApps',
      excerpt: 'A technical deep-dive into combining large language models with blockchain technology for next-generation applications.',
      category: 'AI',
      date: '2025-01-02',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Gas Optimization Techniques for Smart Contract Developers',
      excerpt: 'Advanced strategies for reducing gas costs in Ethereum smart contracts without compromising functionality or security.',
      category: 'Development',
      date: '2024-12-30',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'The Rise of AI Agents in DeFi: Automated Trading Strategies',
      excerpt: 'Exploring how AI agents are transforming DeFi trading through intelligent automation and risk management.',
      category: 'AI',
      date: '2024-12-25',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['All', 'Web3', 'AI', 'Development'];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Blog & Technical Notes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on Web3 development, AI integration, 
              and the future of decentralized technology.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/30 transition-all group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get notified when I publish new articles about Web3 development, 
                  AI integration, and emerging technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-purple-500 focus:outline-none"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}