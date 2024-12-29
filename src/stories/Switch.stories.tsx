import { Switch } from "@/components/ui/Switch";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Switch>;

const meta: Meta<StoryProps> = {
  component: Switch,
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
    return (
      <div className="bg-white p-8">
        <Switch className="bg-gray-400 text-white" {...args} />
      </div>
    );
  },
};
