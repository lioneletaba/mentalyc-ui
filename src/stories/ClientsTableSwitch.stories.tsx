import { ClientStateSwitch } from "@/components/clients/ClientsSwitch";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof ClientStateSwitch>;

const meta: Meta<StoryProps> = {
  component: ClientStateSwitch,
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
      <div className="bg-gray-100 p-8">
        <ClientStateSwitch {...args} />
      </div>
    );
  },
};
