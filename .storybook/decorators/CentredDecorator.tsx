import type { Decorator } from "@storybook/react";

export const CenteredDecorator: Decorator = (Story) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100%",
    }}
  >
    <Story />
  </div>
);