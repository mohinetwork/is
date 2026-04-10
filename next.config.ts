import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "orchids-visual-edits": path.resolve(
        __dirname,
        "src/stubs/orchids-visual-edits"
      ),
    };
    return config;
  },
};

export default nextConfig;
