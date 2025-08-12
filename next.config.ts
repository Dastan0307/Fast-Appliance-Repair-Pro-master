import { resolve } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["38.244.178.216", "http://38.244.178.216/media/", "grubworm-calm-vaguely.ngrok-free.app"],
  },
  sassOptions: {
    includePaths: [resolve(__dirname, "src/ui/styles")],
    additionalData: `@use "@styles/variables.scss" as *;`,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": resolve(__dirname, "src/ui/styles"),
      "@components": resolve(__dirname, "src/components"),
      "@utils": resolve(__dirname, "src/utils"),
      "@fonts": resolve(__dirname, "public/fonts"),
      "@modules": resolve(__dirname, "src/modules"),
      "@typography": resolve(__dirname, "src/ui/typography"),
      "@lib": resolve(__dirname, "src/lib"),
      "@hooks": resolve(__dirname, "src/utils/hooks"),
      "@constants": resolve(__dirname, "src/utils/constants"),
      "@assets": resolve(__dirname, "src/assets"),
    };

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "fonts/[name][ext][query]",
      },
    });

    return config;
  },
};

export default nextConfig;
