import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../../App.vue'
import Dashboard from '../Dashboard.vue'

describe('App.vue', () => {
  // Create a mock router with a test route
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  })

  it('renders RouterView component', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Verify that RouterView is present
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })

  it('has proper component structure', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Check the basic structure of the component
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.findComponent({ name: 'RouterView' })).toBeTruthy()
  })
})