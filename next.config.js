module.exports = {
  env: [],
  poweredByHeader: false,
  compress: true,
  target: 'serverless',
  devIndicators: {
    buildActivity: false,
    autoPrerender: false,
  },
  extension: /\.(md|mdx)$/,
  experimental: {
    jsconfigPaths: true,
  },
}
