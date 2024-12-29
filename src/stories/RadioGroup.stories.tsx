import { Badge } from "@/components/Badge";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof RadioGroup>;

const meta: Meta<StoryProps> = {
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <RadioGroup defaultValue="individual" className="flex gap-4" {...args}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="individual" id="individual" />
          <Label htmlFor="individual">
            <Badge type="individual" />
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="couple" id="couple" />
          <Label htmlFor="couple">
            <Badge type="couple" />
          </Label>
        </div>
      </RadioGroup>
    );
  },
};
