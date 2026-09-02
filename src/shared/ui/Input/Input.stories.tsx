import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  }
 
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Введите пароль',
    autoFocus: true,
  },
};
