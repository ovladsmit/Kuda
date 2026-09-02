import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: "@storybook/react-webpack5",

  typescript: {
    reactDocgen: false,
  },

  webpackFinal: async (config) => {
    // Исключаем .svg из дефолтного правила Storybook для ассетов,
    // чтобы не было конфликта с нашим собственным svgLoader ниже
    const assetRule = config.module?.rules?.find((rule) => {
      if (rule && typeof rule === "object" && "test" in rule && rule.test instanceof RegExp) {
        return rule.test.test(".svg");
      }
      return false;
    });

    if (assetRule && typeof assetRule === "object") {
      (assetRule as any).exclude = /\.svg$/;
    }

    config.module?.rules?.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
              }
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    );

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        app: path.resolve(__dirname, "../src/app"),
        entities: path.resolve(__dirname, "../src/entities"),
        features: path.resolve(__dirname, "../src/features"),
        pages: path.resolve(__dirname, "../src/pages"),
        shared: path.resolve(__dirname, "../src/shared"),
        widgets: path.resolve(__dirname, "../src/widgets"),
      },
    };

    return config;
  },
};

export default config;