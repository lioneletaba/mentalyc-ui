import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj;

export const Body_bold: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-body-bold">Body bold</p>;
  },
};

export const Body_regular: Story = {
  args: {},

  render: () => {
    return <p className="h-10 text-body-regular">Body regular</p>;
  },
};

export const Label_bold: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-label-regular">Label bold</p>;
  },
};

export const Label_medium: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-label-medium">Label medium</p>;
  },
};

export const Label_regular: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-label-regular">Label regular</p>;
  },
};

export const Small_medium: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-small-medium">Small medium</p>;
  },
};

export const Small_regular: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-small-regular">Small regular</p>;
  },
};

export const Heading_4: Story = {
  args: {},
  render: () => {
    return <p className="h-10 text-heading-4">Heading 4</p>;
  },
};
