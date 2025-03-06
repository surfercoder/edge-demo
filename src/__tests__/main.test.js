import { describe, it, expect, vi } from 'vitest'
import { createApp } from 'vue'
import App from '../App.vue'
import router from '../router'

// Create a mock use function that we can track
const mockUse = vi.fn().mockReturnThis()

// Mock the createApp function with trackable use method
const mockMount = vi.fn()
const mockApp = {
  use: mockUse,
  mount: mockMount
}
vi.mock('vue', () => ({
  createApp: vi.fn(() => mockApp)
}))

// Mock the router
vi.mock('../router', () => ({
  default: {
    routes: []
  }
}))

describe('main.js', () => {
  it('creates and configures the Vue application correctly', async () => {
    // Clear all mocks before test
    vi.clearAllMocks()

    // Import the main.js file which will execute the app creation
    await import('../main.js')

    // Verify createApp was called with the App component
    expect(createApp).toHaveBeenCalledWith(App)

    // Verify router was used
    expect(mockUse).toHaveBeenCalledWith(router)

    // Verify app was mounted to #app
    expect(createApp().mount).toHaveBeenCalledWith('#app')
  })
})