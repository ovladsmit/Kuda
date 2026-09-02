import type { Decorator } from '@storybook/react-webpack5';
import { Theme } from '../../src/app/providers/ThemeProvider';
export const ThemeDecorator = (theme: Theme): Decorator =>
  (Story) => (
      <div className={`app ${theme}`} style={{ minHeight: "auto" }}>
        <Story />
      </div>
  );