import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@/components/ui/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outline",
  },
};

export const Action: Story = {
  args: {
    variant: "action",
  },
};
