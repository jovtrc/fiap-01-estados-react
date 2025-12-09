import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://thispersondoesnotexist.com/**"),
      new URL("https://avatars.githubusercontent.com/**"),
      {
        protocol: "https",
        hostname: "githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com/u/**",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
