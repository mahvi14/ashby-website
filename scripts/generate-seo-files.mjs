import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = process.env.VITE_SITE_URL?.trim()?.replace(/\/$/, "");
const distDir = path.resolve("dist");

const routes = [
  "/",
  "/about",
  "/services",
  "/destinations",
  "/testimonials",
  "/contact",
];

await mkdir(distDir, { recursive: true });

const robotsLines = ["User-agent: *", "Allow: /"];

if (siteUrl) {
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const url = route === "/" ? siteUrl : `${siteUrl}${route}`;
    return `  <url><loc>${url}</loc></url>`;
  })
  .join("\n")}
</urlset>
`;

  await writeFile(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
  robotsLines.push("", `Sitemap: ${sitemapUrl}`);
}

await writeFile(path.join(distDir, "robots.txt"), `${robotsLines.join("\n")}\n`, "utf8");
