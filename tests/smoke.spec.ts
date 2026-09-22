import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from '../src/app.vue'

describe('app', () => {
  it('renders the page heading', () => {
    const wrapper = mount(App)

    expect(wrapper.find('h1').text()).toBe('Vendors')
  })
})
