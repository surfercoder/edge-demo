import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import express from 'express'
import request from 'supertest'
import cors from 'cors'

describe('Express Server', () => {
  let app

  beforeAll(() => {
    app = express()
    app.use(cors())

    // Mock data setup
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
    }

    // API endpoints
    app.get('/api/portfolio-performance', (req, res) => {
      res.json(mockData.portfolioPerformance)
    })

    app.get('/api/market-metrics', (req, res) => {
      res.json(mockData.marketMetrics)
    })
  })

  it('GET /api/portfolio-performance should return portfolio data', async () => {
    const response = await request(app).get('/api/portfolio-performance')
    
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    
    expect(response.body).toHaveProperty('labels')
    expect(response.body).toHaveProperty('datasets')
    expect(response.body.labels).toHaveLength(6)
    expect(response.body.datasets).toHaveLength(1)
    expect(response.body.datasets[0]).toHaveProperty('label', 'Portfolio Value')
    expect(response.body.datasets[0].data).toHaveLength(6)
  })

  it('GET /api/market-metrics should return market metrics', async () => {
    const response = await request(app).get('/api/market-metrics')
    
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    
    expect(response.body).toHaveProperty('totalValue')
    expect(response.body).toHaveProperty('changePercentage')
    expect(response.body).toHaveProperty('lastUpdated')
    expect(typeof response.body.totalValue).toBe('number')
    expect(typeof response.body.changePercentage).toBe('number')
    expect(typeof response.body.lastUpdated).toBe('string')
  })
})