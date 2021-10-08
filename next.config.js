const isProd = process.env.NODE_ENV === "production";

module.exports = {
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  trailingSlash: isProd,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};
