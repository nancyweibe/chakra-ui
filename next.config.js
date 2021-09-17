module.exports = {
  reactStrictMode: false,
  // @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
  async rewrites() {
    return [
      {
        // /blog -> /blog/index.html etc.
        // this mimicks a 'regular' web server index.html behavior
        source: '/jobs',
        destination: '/jobs/index.html',
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        // /blog -> /blog.html etc.
        // this mimicks Jekyll's "clean URL" feature, i.e.
        source: '/:path*',
        destination: '/:path*.html',
      },
    ]
  },
}