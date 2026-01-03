module.exports = {
  rewrites: [
    {
      source: "/api/:path*",
      destination: `${process.env.BACKEND_URL}/:path*`
    },
    {
      source: "/(.*)",
      destination: "/index.html"
    }
  ]
};