const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    loader: "default",
    path: isProd ? "/portfolio/" : "",
  },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio" : "",
  reactStrictMode: true,
};

export default nextConfig;
