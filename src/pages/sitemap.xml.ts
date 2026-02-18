import type { APIRoute } from "astro";
import blogPosts from "../data/blog-posts.json";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (site?.href ?? "https://hanif.one").replace(/\/$/, "");
  const currentDate = new Date().toISOString();
  
  // Static pages
  const staticPages: Array<{ url: string; changefreq: string; priority: string; lastmod?: string }> = [
    { url: "", changefreq: "weekly", priority: "1.0" },
    { url: "/blog", changefreq: "weekly", priority: "0.9" },
    { url: "/projects", changefreq: "monthly", priority: "0.8" },
    { url: "/cv", changefreq: "monthly", priority: "0.7" },
    { url: "/publications", changefreq: "monthly", priority: "0.7" },
    { url: "/certifications", changefreq: "monthly", priority: "0.6" },
  ];

  // Blog posts
  const blogPages = blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: new Date(post.date).toISOString(),
  }));

  // Combine all pages
  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    const fullUrl = `${siteUrl}${page.url}`;
    const lastmod = page.lastmod || currentDate;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

