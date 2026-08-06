import path from "node:path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: "./src/index.tsx",
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src")
}


export default (env: BuildEnv) => {

  const mode = env.mode || 'development'

  const isDev = mode === 'development'

  const PORT = env.port || 3000

  const config = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: isDev,
    port: PORT
})
  
  return config
}