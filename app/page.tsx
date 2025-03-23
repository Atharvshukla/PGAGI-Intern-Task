"use client"

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/particles-background';
import { AuthForm } from '@/components/auth/auth-form';
import { BarChart3, LineChart, CloudSun, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const [showAuthForm, setShowAuthForm] = useState(false);

  const features = [
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Stock Analytics",
      description: "Real-time stock market data and comprehensive analysis tools"
    },
    {
      icon: <CloudSun className="h-12 w-12" />,
      title: "Weather Insights",
      description: "Accurate weather forecasts with detailed meteorological data"
    },
    {
      icon: <LineChart className="h-12 w-12" />,
      title: "News Feed",
      description: "Latest news updates from trusted sources worldwide"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <ParticlesBackground />
      
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Analytics Dashboard
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one platform for real-time analytics, weather insights, and news updates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full max-w-sm mx-auto"
        >
          {!showAuthForm ? (
            <Button
            size="lg"
            onClick={() => setShowAuthForm(true)}
            className="text-lg group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
      
          ) : (
            <AuthForm />
          )}
        </motion.div>
      </div>
    </div>
  );
}