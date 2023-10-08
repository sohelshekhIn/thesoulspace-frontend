export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // prevent in /cart
      {
        userAgent: "*",
        disallow: "/cart",
      },
      //  prevent in /api
      {
        userAgent: "*",
        disallow: "/api",
      },
      // prevent in /checkout
      {
        userAgent: "*",
        disallow: "/checkout",
      },
      // prevent in /orders
      {
        userAgent: "*",
        disallow: "/orders",
      },
    ],
    sitemap: "https://thesoulspace.in/sitemap.xml",
    host: "https://thesoulspace.in",
  };
}
