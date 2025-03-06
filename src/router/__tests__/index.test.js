import { describe, it, expect, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import router from '../index'
import Dashboard from '../../views/Dashboard.vue'

// Mock vue-router functions
vi.mock('vue-router', () => ({
  createRouter: vi.fn((config) => ({
    routes: config.routes,
    history: config.history
  })),
  createWebHistory: vi.fn(() => ({}))
}))

describe('Router Configuration', () => {
  it('creates router with web history mode', () => {
    expect(createWebHistory).toHaveBeenCalled()
    expect(createRouter).toHaveBeenCalledWith({
      history: expect.any(Object),
      routes: expect.any(Array)
    })
  })

  it('configures dashboard as the root route', () => {
    const routes = router.routes
    const dashboardRoute = routes.find(route => route.path === '/')

    expect(dashboardRoute).toBeDefined()
    expect(dashboardRoute.name).toBe('Dashboard')
    expect(dashboardRoute.component).toBe(Dashboard)
  })

  it('has the correct number of routes', () => {
    expect(router.routes).toHaveLength(1)
  })
})