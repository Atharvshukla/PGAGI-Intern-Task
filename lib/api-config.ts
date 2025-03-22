export const API_KEYS = {
  NEWS_API: 'c80d98c29c0845d984a2aa8a7866b6a1',
  ALPHA_VANTAGE: 'SLMYJBCFF8Q1R5KI',
  WEATHER_API: 'e0336c4fd73ebb2fe3f511dd8601c80e',
};

export const API_ENDPOINTS = {
  NEWS_HEADLINES: 'https://newsapi.org/v2/top-headlines',
  NEWS_SOURCES: 'https://newsapi.org/v2/top-headlines/sources',
  ALPHA_VANTAGE: 'https://www.alphavantage.co/query',
  WEATHER: 'https://api.openweathermap.org/data/2.5',
};

export const NEWS_CATEGORIES = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
] as const;

export const NEWS_COUNTRIES = [
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'ca', name: 'Canada' },
] as const;

export const NEWS_API_PARAMS = {
  SORT_BY: ['publishedAt', 'relevancy', 'popularity'] as const,
  LANGUAGES: ['en', 'es', 'fr', 'de'] as const,
  PAGE_SIZE: 20,
};