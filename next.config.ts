import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep file tracing inside this app (avoids wrong roots when another lockfile exists on the machine).
  outputFileTracingRoot: path.join(appDir),

  // Redirect non-www to www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bidsquire.com",
          },
        ],
        destination: "https://www.bidsquire.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
