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
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <button
              className="mr-2 p-2 hover:bg-accent hover:text-accent-foreground rounded-md lg:hidden"
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

      <div className="flex relative">
        {/* Sidebar */}
        <aside 
          className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
            fixed lg:static top-[3.5rem] bottom-0 w-64 transition-transform duration-300 
            border-r bg-background z-40 lg:z-0
          `}
        >
          <nav className="space-y-2 p-4">
            <button
              onClick={() => {
                setActiveSection('stocks');
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
              className={`flex w-full items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent ${
                activeSection === 'stocks' ? 'bg-accent' : ''
              }`}
            >
              <LineChart className="h-5 w-5" />
              <span>Stocks</span>
            </button>
            <button
              onClick={() => {
                setActiveSection('weather');
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
              className={`flex w-full items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent ${
                activeSection === 'weather' ? 'bg-accent' : ''
              }`}
            >
              <Cloud className="h-5 w-5" />
              <span>Weather</span>
            </button>
            <button
              onClick={() => {
                setActiveSection('news');
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
              className={`flex w-full items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent ${
                activeSection === 'news' ? 'bg-accent' : ''
              }`}
            >
              <Newspaper className="h-5 w-5" />
              <span>News</span>
            </button>
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 w-full">
          {activeSection === 'news' && <NewsSection />}
          {activeSection === 'stocks' && <StockSection />}
          {activeSection === 'weather' && <WeatherSection />}
        </main>
      </div>
    </div>
  );
}