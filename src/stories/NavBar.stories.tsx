import { NavigationBar } from "@/components/navigation/NavigationBar";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof NavigationBar> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: NavigationBar,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    return (
      <section
        onClick={(e) => e.stopPropagation()}
      >
        <NavigationBar />
      </section>
    );
  },
};
