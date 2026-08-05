import { ResolveOptions } from "webpack"
export function buildResolvers(): ResolveOptions{
  return {
    /** Указываем расширения которых мы не будем указывать при импорте */
    extensions: [".tsx", ".ts", ".js"],
  }
}