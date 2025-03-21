export const API_KEYS = {
  NEWS_API: 'c80d98c29c0845d984a2aa8a7866b6a1', 
  ALPHA_VANTAGE: 'SLMYJBCFF8Q1R5KI',
  WEATHER_API: 'YOUR_OPENWEATHER_API_KEY',
};

export const API_ENDPOINTS = {
  NEWS: 'https://newsapi.org/v2/everything',
  ALPHA_VANTAGE: 'https://www.alphavantage.co/query',
  WEATHER: 'https://api.openweathermap.org/data/2.5',
};

export const NEWS_CATEGORIES = [
  'technology',
  'business',
  'science',
  'health',
  'entertainment',
  'sports',
] as const;

// Additional endpoints for News API
export const NEWS_API_ENDPOINTS = {
  EVERYTHING: 'https://newsapi.org/v2/everything',
  TOP_HEADLINES: 'https://newsapi.org/v2/top-headlines',
  SOURCES: 'https://newsapi.org/v2/top-headlines/sources',
};

// News API parameters
export const NEWS_API_PARAMS = {
  SORT_BY: ['publishedAt', 'relevancy', 'popularity'] as const,
  LANGUAGES: ['en', 'es', 'fr', 'de'] as const,
  PAGE_SIZE: 20,
};