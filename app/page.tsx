"use client"

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Card } from '@/components/ui/card';
import { NewsSection } from '@/components/news/news-section';
import { StockSection } from '@/components/stocks/stock-section';
import { WeatherSection } from '@/components/weather/weather-section';
import { 
  LayoutDashboard, 
  LineChart, 
  Cloud, 
  Newspaper,
  Menu
} from 'lucide-react';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('news');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <button
              className="mr-2 px-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </button>
            <a href="/" className="flex items-center space-x-2">
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-bold">Analytics Dashboard</span>
            </a>
          </div>
          <div className="flex-1" />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden border-r bg-background`}>
          <nav className="space-y-2 p-4">
            <button
              onClick={() => setActiveSection('stocks')}
              className={`flex w-full items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent ${
                activeSection === 'stocks' ? 'bg-accent' : ''
              }`}
            >
              <LineChart className="h-5 w-5" />
              <span>Stocks</span>
            </button>
            <button
              onClick={() => setActiveSection('weather')}
              className={`flex w-full items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent ${
                activeSection === 'weather' ? 'bg-accent' : ''
              }`}
            >
              <Cloud className="h-5 w-5" />
              <span>Weather</span>
            </button>
            <button
              onClick={() => setActiveSection('news')}
              className={`flex w-full items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent ${
                activeSection === 'news' ? 'bg-accent' : ''
              }`}
            >
              <Newspaper className="h-5 w-5" />
              <span>News</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeSection === 'news' && <NewsSection />}
          {activeSection === 'stocks' && <StockSection />}
          {activeSection === 'weather' && <WeatherSection />}
        </main>
      </div>
    </div>
  );
}