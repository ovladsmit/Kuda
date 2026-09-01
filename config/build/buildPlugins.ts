import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";
export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    /**Cоздаёт index.html по шаблону в dist, вставляя туда тег <script> */
    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    /**Добавляет полоску загрузки во время сборки */
    new webpack.ProgressPlugin(),

    /**выносит CSS в отдельные .css-файлы*/
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
    /**Плагин для чтения переменных окружения*/
    new Dotenv(),
  ];
}
