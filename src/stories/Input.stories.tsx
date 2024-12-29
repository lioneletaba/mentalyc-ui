import { Input } from "@/components/ui/Input";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: fn(),
    className: "string",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <div className="max-w-60">
        <Input placeholder="Enter text here" {...args} />
      </div>
    );
  },
};
