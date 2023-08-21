import Task from './Task.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

const meta = {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  args: {
    modelValue: false
  },
  // 👇 Our events will be mapped in Storybook UI
  argTypes: {
    color: {
      control: 'select', options: ['green', 'yellow', 'blue', 'accent']
    },
    'onUpdate:model-value': {}
  },
  // 👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const actionsData = {
  'onUpdate:model-value': action('update:model-value')
}

export const Default: Story = {
  args: {
    modelValue: false,
    label: 'Test Task',
    dark: false,
    color: 'accent'
  }
}

export const Pinned: Story = {
  args: {
    modelValue: true,
    label: 'Test Task',
    dark: false,
    color: 'accent'
  }
}
