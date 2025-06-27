'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, MessageSquare, Clock, Zap, Globe } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const advantages = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Usually reply within 2-4 hours',
    },
    {
      icon: Globe,
      title: 'Europe Timezone',
      description: 'Available evenings & weekends',
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Efficient delivery without compromising quality',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your Web3 or AI project to life? Let's discuss your requirements and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="project"
                      placeholder="Project Type (e.g., Web3 dApp, AI Integration)"
                      value={formData.project}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {advantages.map((advantage) => (
                <Card key={advantage.title} className="bg-card/30 backdrop-blur border-border/30">
                  <CardContent className="p-4 text-center">
                    <advantage.icon className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                    <h4 className="font-semibold text-sm mb-1">{advantage.title}</h4>
                    <p className="text-xs text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule a Call
                </CardTitle>
                <CardDescription>
                  Prefer to talk? Book a free 30-minute consultation to discuss your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  asChild
                >
                  <a href="https://calendly.com/alex-chen" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Quick Questions?
                </CardTitle>
                <CardDescription>
                  For quick questions or project inquiries, reach out directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Email:</span>
                  <a href="mailto:alex@example.com" className="text-sm text-purple-400 hover:underline">
                    alex@example.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Response Time:</span>
                  <Badge variant="secondary">2-4 hours</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Availability:</span>
                  <Badge variant="secondary">Evenings & Weekends</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Payment Options</CardTitle>
                <CardDescription>
                  Flexible payment methods to suit your preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cryptocurrency</span>
                    <Badge variant="outline">ETH, USDC, BTC</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Traditional</span>
                    <Badge variant="outline">Bank Transfer, PayPal</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Terms</span>
                    <Badge variant="outline">50% upfront, 50% completion</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}