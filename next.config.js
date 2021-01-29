const withMDX = require('@next/mdx')

module.exports = withMDX({
  env: [],
  poweredByHeader: true,
  compress: true,
  devIndicators: {
    buildActivity: false,
    autoPrerender: false,
  },
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      require('remark-images'),
      require('remark-emoji'),
      require('remark-oembed'),
    ],
    rehypePlugins: [],
  },
  experimental: {
    jsconfigPaths: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    return {
      '/': {page: './'},
    }
  },
  target: 'serverless',
})
