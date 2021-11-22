import { mount, shallowMount } from '@vue/test-utils'
import Attribute from '@/components/StringAttribute'

describe('Attribute', () => {
  const wrapperFactory = (shallow = true, {propsData, slots} = {}) => {
    const data = {
      label: 'name',
      value: 'some value'      
    }

    const options = {
      props: {
        ...data,
        ...propsData
      },
      shallow: shallow,
      slots: slots,
      stubs: {
        transition: false
      }
    }

    return mount(Attribute, options)
  }

  it('renders attribute', async () => {
    const wrapper = shallowMount(Attribute)

    const element = wrapper.find('.c-attribute')

    expect(element.classes()).toContain('--string')

    wrapper.unmount()
  })

  it('renders attribute label', async () => {
    const wrapper = mount(Attribute, {
      props: {
        label: 'label'
      }
    })

    const label = wrapper.find('.c-attribute').find('label')

    expect(label.html()).toContain('label')

    wrapper.unmount()
  })

  it('renders attribute value', async () => {
    const value = 'random string'

    const wrapper = mount(Attribute, {
      props: {
        modelValue: value 
      }
    })

    const label = wrapper.find('.c-attribute').find('span.value')

    expect(label.html()).toContain(value)

    wrapper.unmount()
  })
})
