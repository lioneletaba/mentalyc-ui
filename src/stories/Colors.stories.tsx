import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj;

export const Primary_500: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-primary-500"></div>;
  },
};

export const Primary_300: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-primary-300"></div>;
  },
};

export const Primary_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-primary-100"></div>;
  },
};

export const Danger_500: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-danger-500"></div>;
  },
};

export const KenyanCopper_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-kenyan-copper-100"></div>;
  },
};

export const Success_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-success-100"></div>;
  },
};

export const Secondary_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-secondary-100"></div>;
  },
};

export const Info_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-info-100"></div>;
  },
};

export const Valhalla_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-valhalla-100"></div>;
  },
};

export const Warning_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-warning-100"></div>;
  },
};

export const Gray_50: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-gray-50"></div>;
  },
};

export const Gray_100: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-gray-100"></div>;
  },
};

export const Gray_200: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-gray-200"></div>;
  },
};

export const Gray_300: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-gray-300"></div>;
  },
};

export const Gray_400: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-gray-400"></div>;
  },
};

export const Gray_500: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-gray-500"></div>;
  },
};

export const Black: Story = {
  args: {},
  render: () => {
    return <div className="w-10 h-10 bg-black"></div>;
  },
};
