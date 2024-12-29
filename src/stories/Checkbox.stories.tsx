import { Checkbox } from "@/components/ui/Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onCheckedChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return <Checkbox {...args} />;
  },
};
