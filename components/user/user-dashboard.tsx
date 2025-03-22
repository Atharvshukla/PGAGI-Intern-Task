"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Cloud, Newspaper, History, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface UserDashboardProps {
  searchHistory: {
    stocks: string[];
    weather: string[];
    news: string[];
  };
}

export function UserDashboard({ searchHistory }: UserDashboardProps) {
  const router = useRouter();

  const clearHistory = (section: string) => {
    const currentHistory = JSON.parse(localStorage.getItem('searchHistory') || '{}');
    currentHistory[section] = [];
    localStorage.setItem('searchHistory', JSON.stringify(currentHistory));
    window.location.reload();
  };

  const sections = [
    {
      title: 'Recent Stock Searches',
      icon: <LineChart className="h-5 w-5" />,
      data: searchHistory.stocks || [],
      section: 'stocks'
    },
    {
      title: 'Recent Weather Searches',
      icon: <Cloud className="h-5 w-5" />,
      data: searchHistory.weather || [],
      section: 'weather'
    },
    {
      title: 'Recent News Searches',
      icon: <Newspaper className="h-5 w-5" />,
      data: searchHistory.news || [],
      section: 'news'
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="font-semibold">{section.title}</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearHistory(section.section)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {section.data.length > 0 ? (
                <ul className="space-y-2">
                  {section.data.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <History className="h-4 w-4" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No recent searches</p>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Button
              onClick={() => router.push('/stocks')}
              className="flex items-center gap-2"
            >
              <LineChart className="h-5 w-5" />
              View Stocks
            </Button>
            <Button
              onClick={() => router.push('/weather')}
              className="flex items-center gap-2"
            >
              <Cloud className="h-5 w-5" />
              Check Weather
            </Button>
            <Button
              onClick={() => router.push('/news')}
              className="flex items-center gap-2"
            >
              <Newspaper className="h-5 w-5" />
              Read News
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}