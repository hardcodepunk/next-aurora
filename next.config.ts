import type { NextConfig } from "next"
import type { Configuration } from "webpack"

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader"],
    })

    return config
  },
}

export default nextConfig
