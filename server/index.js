import express from 'express';
import cors from 'cors';
const app = express();

// Enable CORS for Vue.js frontend
app.use(cors());

// Mock financial data
const mockData = {
  portfolioPerformance: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Portfolio Value',
      data: [65000, 59000, 80000, 81000, 56000, 85000],
    }]
  },
  marketMetrics: {
    totalValue: 85000,
    changePercentage: 5.2,
    lastUpdated: new Date().toISOString()
  }
};

// API endpoints
app.get('/api/portfolio-performance', (req, res) => {
  res.json(mockData.portfolioPerformance);
});

app.get('/api/market-metrics', (req, res) => {
  res.json(mockData.marketMetrics);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});