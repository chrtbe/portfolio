const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "" : "",
  assetPrefix: isProd ? "" : "",
};

export default nextConfig;
