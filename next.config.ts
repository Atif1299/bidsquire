import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep file tracing inside this app (avoids wrong roots when another lockfile exists on the machine).
  outputFileTracingRoot: path.join(appDir),
};

export default nextConfig;
