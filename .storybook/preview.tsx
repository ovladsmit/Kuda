// .storybook/preview.ts


import type { Preview } from "@storybook/react";
import { StyleDecorator } from "./decorators/StyleDecorator";
import { ThemeDecorator } from "./decorators/ThemeDecorator";
import { Theme } from "../src/app/providers/ThemeProvider";
import { RouterDecorator } from "./decorators/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.DARK), RouterDecorator]
};

export default preview;