import webpack from 'webpack'
export function buildLoaders(): webpack.RuleSetRule[] {

  /** превращает .ts файлы в обычный .js */
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }
  
  return [
    typescriptLoader
  ];
}