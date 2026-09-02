import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  }
 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Я кнопка'
  }
};

export const Secondary: Story = {
  args: {
    theme: ThemeButton.SECONDARY,
    children: 'Я кнопка'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Я кнопка'
  },
};