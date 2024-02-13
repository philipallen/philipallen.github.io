import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getThemeTokens, useDesignTokens } from "@boi/react-design-tokens";
import * as Icons from "@boi/react-icons";
import { Typography } from "@boi/react-components";
import { getIconSelectArgType, getColorSelectArgType } from "@boi/react-utils";

const {
  light: { color },
} = getThemeTokens("boi");

const iconNames = Object.keys(Icons);
const iconComponents = Object.values(Icons);

type IconHolderProps = {
  Icon: JSX.Element;
  color?: string;
  height: number;
  width: number;
};

const IconHolder = ({ Icon, ...props }: IconHolderProps) => {
  const { tokens } = useDesignTokens();
  const { themeColor } = tokens;

  return React.cloneElement(Icon, {
    ...props,
    color: props.color || themeColor.core100,
  });
};

const meta = {
  title: "DataDisplay/Icons",
  component: IconHolder,
  argTypes: {
    Icon: getIconSelectArgType(Icons),
    color: getColorSelectArgType(color),
    height: { control: { type: "number" } },
    width: { control: { type: "number" } },
  },
} satisfies Meta<typeof IconHolder>;

export default meta;
type Story = StoryObj<typeof meta.component>;

export const Editable: Story = {
  args: {
    Icon: <Icons.AppleIcon />,
    height: 48,
    width: 48,
  },
};

export const FullList: Story = {
  argTypes: {
    Icon: { control: { disable: true } },
    color: { control: { disable: true } },
    height: { control: { disable: true } },
    width: { control: { disable: true } },
  },
  render: function Render() {
    return (
      <div>
        {iconComponents.map((IconComponent, i) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "0.5rem",
            }}
            key={i}
          >
            <IconHolder
              Icon={<IconComponent style={{ paddingRight: "1rem" }} />}
              height={48}
              width={48}
            ></IconHolder>
            <Typography>{iconNames[i]}</Typography>
          </div>
        ))}
      </div>
    );
  },
};
