import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  /**Даёт webpack понять png, jpg, gif*/
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  /**Даёт webpack понять svg*/
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  /** превращает .ts файлы в обычный .js */
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  /** Лоадер препроцессора sass */
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Транслирует CSS в CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            namedExport: false,
          },
        },
      },
      // Компилирует Sass в CSS
      "sass-loader",
    ],
  };

  return [typescriptLoader, sassLoader, svgLoader, fileLoader];
}
