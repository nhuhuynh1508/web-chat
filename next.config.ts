import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://grand-pug-52.clerk.accounts.dev",
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
