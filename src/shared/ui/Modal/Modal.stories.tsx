import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="app dark" style={{ minHeight: '100vh' }}>
        <Story />
        <div id="modal-root" />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('close'),
    children: "Lorem lorem"
  },
};
