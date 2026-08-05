import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [

    /**Cоздаёт index.html по шаблону в dist, вставляя туда тег <script> */
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    
    /**Добавляет полоску загрузки во время сборки */
    new webpack.ProgressPlugin(),
  ];
}