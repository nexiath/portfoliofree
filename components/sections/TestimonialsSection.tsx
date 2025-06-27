'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'CTO at CryptoFlow',
      company: 'CryptoFlow',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex delivered our DeFi dashboard ahead of schedule with exceptional quality. His Web3 expertise and attention to detail made all the difference in our product launch.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'AI Innovations Lab',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Alex on our AI integration project was seamless. He understood our complex requirements and delivered a solution that exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Product Manager',
      company: 'DeFi Ventures',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex combines technical excellence with business understanding. Our smart contract implementation was flawless, and his communication throughout the project was outstanding.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Engineering',
      company: 'BlockTech Solutions',
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Fast turnaround, clean code, and great communication. Alex helped us launch our Web3 platform on time and within budget. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'CEO',
      company: 'EdTech Innovations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The AI-powered features Alex built for our learning platform transformed our user experience. His expertise in both AI and full-stack development is impressive.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Technical Lead',
      company: 'Crypto Analytics',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex delivered a complex data pipeline with real-time analytics that processes millions of transactions daily. Exceptional work and reliability.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What clients say about working with me on their Web3, AI, and full-stack projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
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