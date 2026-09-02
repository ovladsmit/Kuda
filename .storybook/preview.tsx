// .storybook/preview.ts

import type { Preview } from "@storybook/react";
import { StyleDecorator } from "./decorators/StyleDecorator";
import { ThemeDecorator } from "./decorators/ThemeDecorator";
import { Theme } from "../src/app/providers/ThemeProvider";
import { RouterDecorator } from "./decorators/RouterDecorator";
import { CenteredDecorator } from "./decorators/CentredDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      options: {
        dark: { name: "dark", value: "#2B1B2E" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "dark" },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.DARK), RouterDecorator, CenteredDecorator],
};

export default preview;