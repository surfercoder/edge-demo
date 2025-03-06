import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Dashboard from '../Dashboard.vue'

describe('Dashboard.vue', () => {
  let wrapper

  let mockDestroy

  beforeEach(() => {
    mockDestroy = vi.fn()
    
    // Mock the Line component
    const MockLine = {
      name: 'Line',
      template: '<div></div>',
      setup() {
        return {}
      },
      mounted() {
        // Mock the chart instance on the component itself
        this.chart = {
          destroy: mockDestroy
        }
      }
    }

    wrapper = mount(Dashboard, {
      global: {
        components: {
          Line: MockLine
        }
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.find('h1').text()).toBe('Financial Dashboard')
    expect(wrapper.find('h2').text()).toBe('Market Overview')
  })

  it('initializes with chart data', () => {
    const chartData = wrapper.vm.chartData
    expect(chartData.labels).toHaveLength(6)
    expect(chartData.datasets).toHaveLength(1)
    expect(chartData.datasets[0].label).toBe('Portfolio Value')
    expect(chartData.datasets[0].data).toHaveLength(6)
  })

  it('has proper chart options configured', () => {
    const options = wrapper.vm.chartOptions
    expect(options.responsive).toBe(true)
    expect(options.maintainAspectRatio).toBe(false)
    expect(options.plugins.title.text).toBe('Portfolio Performance')
  })
})