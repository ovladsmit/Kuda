import type { Meta, StoryObj } from "@storybook/react";
import { OptionCard } from "./OptionCard";

const meta: Meta<typeof OptionCard> = {
  title: "entities/invite/OptionCard",
  component: OptionCard,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "auto", height: "auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OptionCard>

export const Default: Story = {
  args: {
    option: {
      id: "1",
      name: "Итальянский ужин у канала",
      time: "Пт, 19:30",
      weatherIcon: "🌤️",
      weatherTemp: 21,
    },
    onRemove: (id) => console.log("удалить:", id),
  },
};