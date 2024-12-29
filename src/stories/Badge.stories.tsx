import { Badge } from "@/components/Badge";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<StoryProps> = {
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["pro", "individual", "couple", "family", "child", "group"],
      control: {
        type: "select",
      },
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Individual: Story = {
  args: {
    type: "individual",
  },
  render: ({ ...args }) => {
    return <Badge {...args} />;
  },
};

export const Couple: Story = {
  args: {
    type: "couple",
  },
  render: ({ ...args }) => {
    return <Badge {...args} />;
  },
};

export const Group: Story = {
  args: {
    type: "group",
  },
  render: ({ ...args }) => {
    return <Badge {...args} />;
  },
};

export const Family: Story = {
  args: {
    type: "family",
  },
  render: ({ ...args }) => {
    return <Badge {...args} />;
  },
};

export const Child: Story = {
  args: {
    type: "child",
  },
  render: ({ ...args }) => {
    return <Badge {...args} />;
  },
};

export const Pro: Story = {
  args: {
    type: "pro",
  },
  render: ({ ...args }) => {
    return <Badge {...args} />;
  },
};
