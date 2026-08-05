import webpack from 'webpack'
export function buildLoaders(): webpack.RuleSetRule[] {

  /** превращает .ts файлы в обычный .js */
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const sassLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    // Создаёт `style`-теги из строк JS
    "style-loader",
    // Транслирует CSS в CommonJS
    "css-loader",
    // Компилирует Sass в CSS
    "sass-loader",
  ],
};
  
  return [
    typescriptLoader,
    sassLoader
  ];
}