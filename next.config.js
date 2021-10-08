const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    loader: "imgix",
    path: "/",
  },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  trailingSlash: isProd,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};
