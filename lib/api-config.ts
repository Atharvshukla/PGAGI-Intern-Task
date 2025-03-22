export const API_KEYS = {
  NEWS_API: 'c80d98c29c0845d984a2aa8a7866b6a1',
  ALPHA_VANTAGE: 'SLMYJBCFF8Q1R5KI',
  WEATHER_API: 'e0336c4fd73ebb2fe3f511dd8601c80e',
  TMDB_API: 'fd14e9cd1ec9e4f599ed4aee7d179b34',
  TMDB_ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDE0ZTljZDFlYzllNGY1OTllZDRhZWU3ZDE3OWIzNCIsIm5iZiI6MTc0MjY2OTg2MC44MjUsInN1YiI6IjY3ZGYwODI0NGNlMDdkNjg0ZTA3YWYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z2eWj2qUY1yLdXM0UQ7LsioUR-kJswjAL75zfVu1Vrk'
};

export const API_ENDPOINTS = {
  NEWS_HEADLINES: 'https://newsapi.org/v2/top-headlines',
  NEWS_SOURCES: 'https://newsapi.org/v2/top-headlines/sources',
  ALPHA_VANTAGE: 'https://www.alphavantage.co/query',
  WEATHER: 'https://api.openweathermap.org/data/2.5',
  TMDB: 'https://api.themoviedb.org/3'
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

export const MOVIE_CATEGORIES = [
  'popular',
  'top_rated',
  'upcoming',
  'now_playing'
] as const;