# Financial Data Visualization Dashboard

A modern dashboard application built with Vue.js and Node.js that visualizes financial portfolio data.

## Features

- Interactive financial portfolio performance chart
- Real-time market metrics
- Responsive design for all device sizes
- RESTful API backend with mock data

## Live Demo

Check out the live demo: [Edge Demo](https://edge-demo-teal.vercel.app/)

## Tech Stack

### Frontend
- Vue.js 3 with Composition API
- Vue Router for navigation
- Chart.js and Vue-ChartJS for data visualization
- Vite as build tool

### Backend
- Node.js
- Express.js
- CORS middleware

## Project Structure

```
├── server/          # Backend Node.js server
│   └── index.js     # Express server setup and API endpoints
├── src/
│   ├── views/       # Vue components for different views
│   ├── router/      # Vue Router configuration
└── public/          # Public static files
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/portfolio-performance`: Returns portfolio performance data
- `GET /api/market-metrics`: Returns current market metrics

## Development Guidelines

### Git Commit Convention

This project follows semantic commit messages:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat: add portfolio performance chart
fix: correct data loading in dashboard
```

### Code Style

- Use Composition API for Vue components
- Follow Vue.js style guide
- Maintain clean and documented code
- Implement responsive design practices

## Future Improvements

- Add real-time data updates
- Implement user authentication
- Add more interactive visualizations
- Integrate with a database
- Add unit and integration tests
