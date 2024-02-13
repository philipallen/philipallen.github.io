import type { Meta, StoryObj } from "@storybook/react";
import { useDesignTokens } from "@boi/react-design-tokens";
import { Typography } from "@boi/react-components";

const Component = () => {
  const { tokens } = useDesignTokens();
  const { themeColor } = tokens;

  return Object.keys(themeColor).map((themeColorName, i) => (
    <div key={i}>
      <Typography variant="bodyM">{`${themeColorName}, ${
        themeColor[themeColorName as keyof typeof themeColor]
      }`}</Typography>
      <div
        style={{
          height: "30px",
          width: "200px",
          borderRadius: "12px",
          backgroundColor:
            themeColor[themeColorName as keyof typeof themeColor],
        }}
      ></div>
    </div>
  ));
};

const meta = {
  title: "Design Tokens/Colors",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta.component>;

export const Colors: Story = {};
