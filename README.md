# Analytics Dashboard PGAGI-Intern-Task 🌟

## Live Demo
🎉 The project is live at [Analytics Dashboard](https://pgagi-sde-interntask-atharv.vercel.app/).

## Demo Video
[Demo Video](https://drive.google.com/file/d/15355TrNVJl7iA0Tdn9Vwx0KnbVJ6kjok/view?usp=sharing).

## Description
The **Analytics Dashboard** is a web application that integrates data from three public APIs: **OpenWeatherMap API**, **NewsAPI**, and **Alpha Vantage API**. It provides real-time weather updates, the latest news headlines, and stock market data in an interactive and user-friendly interface. The application is built using **Next.js**, **TypeScript**, and **Tailwind CSS**, with interactive charts powered by **Recharts** and **Chart.js**.

---

## Features 🚀

### Weather API Integration
- **Current Weather**: Display real-time weather information for a user-specified location.
- **7-Day Forecast**: Show temperature trends, humidity, wind speed, and weather conditions for the next 7 days.
- **Geolocation**: Automatically fetch weather data based on the user's current location.
- **Interactive Charts**: Visualize weather data using Recharts or D3.js.

### News API Integration
- **Latest Headlines**: Display news articles categorized into Technology, Sports, Business, Health, and Entertainment.
- **Filtering**: Allow users to filter news based on selected categories.
- **Pagination/Infinite Scroll**: Implement pagination or infinite scrolling for news articles.
- **Article Details**: Show detailed views of articles with external links.

### Finance API Integration
- **Real-Time Stock Data**: Display stock market data for user-selected symbols.
- **Interactive Charts**: Show line charts for price trends and candlestick charts for trading activity.
- **Historical Data**: Provide options to view stock data over different time ranges (1 day, 1 week, 1 month, 1 year).
- **Key Metrics**: Display current price, daily high/low, volume, and percentage change.

---

## Technologies Used 🛠️

### Frontend
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts, Chart.js
- **Icons**: Lucide React

### APIs
- **Weather**: OpenWeatherMap API
- **News**: NewsAPI
- **Finance**: Alpha Vantage API

### Development Tools
- **Linting**: ESLint
- **Formatting**: Prettier
- **CSS Processing**: PostCSS

---

## API Details 📡

### Weather API
- **Endpoint**: `https://api.openweathermap.org/data/2.5/forecast`
- **Parameters**:
  - `lat`: Latitude of the location.
  - `lon`: Longitude of the location.
  - `city`: City name (optional).
  - `units`: Metric or Imperial units.
- **Response**: Includes current weather and 7-day forecast data.

### News API
- **Endpoint**: `https://newsapi.org/v2/top-headlines`
- **Parameters**:
  - `category`: News category (e.g., technology, sports).
  - `pageSize`: Number of articles to fetch.
  - `page`: Page number for pagination.
- **Response**: Includes headlines, summaries, images, and source information.

### Finance API
- **Endpoint**: `https://www.alphavantage.co/query`
- **Parameters**:
  - `function`: API function (e.g., `OVERVIEW`, `TIME_SERIES_DAILY`).
  - `symbol`: Stock symbol (e.g., AAPL, MSFT).
  - `apikey`: API key for authentication.
- **Response**: Includes stock overview, time series data, and key metrics.

---

## Installation ⚙️

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Atharvshukla/PGAGI-Intern-Task
   cd PGAGI-Intern-Task
    ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts 📝
- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs the linter to check for code quality.

## Project Structure 🗂️

```plaintext
├── README.md
├── app
│   ├── api
│   │   ├── movies
│   │   │   └── route.ts
│   │   ├── news
│   │   │   └── route.ts
│   │   ├── stocks
│   │   │   ├── overview
│   │   │   │   └── route.ts
│   │   │   └── timeseries
│   │   │       └── route.ts
│   │   └── weather
│   │       └── route.ts
│   ├── auth
│   │   └── callback
│   │       └── route.ts
│   ├── dashboard
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── auth
│   │   └── auth-form.tsx
│   ├── layout
│   │   └── header.tsx
│   ├── movies
│   │   ├── movie-card.tsx
│   │   └── movie-section.tsx
│   ├── news
│   │   ├── news-card.tsx
│   │   └── news-section.tsx
│   ├── particles-background.tsx
│   ├── stocks
│   │   └── stock-section.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── ui
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   └── tooltip.tsx
│   ├── user
│   │   └── user-dashboard.tsx
│   └── weather
│       └── weather-section.tsx
├── components.json
├── hooks
│   └── use-toast.ts
├── lib
│   ├── api-config.ts
│   ├── supabase
│   │   └── client.ts
│   └── utils.ts
├── middleware.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── supabase
│   └── migrations
│       └── 20250322201248_turquoise_cave.sql
├── tailwind.config.ts
└── tsconfig.json
```

## Commit History 
![image](https://github.com/user-attachments/assets/0c342299-d0f7-4110-829c-d0289fcd152c)

👤 Atharv Shukla<br>
📧 atharvshukla.dev@gmail.com<br>
🌐 http://atharvshukla.vercel.app<br>

Happy Coding! 🚀

