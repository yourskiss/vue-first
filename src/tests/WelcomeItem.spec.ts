import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomeItem from '@/components/home/CounterAction1.vue'

describe('WelcomeItem', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeItem, { props: { msg: 'check vitest message' } })
    expect(wrapper.text()).toContain('Hi Vitest')

    const wrapper2 = mount(WelcomeItem, { props: { msg: 'check pinia message' } })
    expect(wrapper2.text()).toContain('Hi Pinia');
  })
})
