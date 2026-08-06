import { ResolveOptions } from "webpack"
import { BuildOptions } from "./types/config"
export function buildResolvers(options: BuildOptions): ResolveOptions{
  return {
    /** Указываем расширения которых мы не будем указывать при импорте */
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias:{}
  }
}