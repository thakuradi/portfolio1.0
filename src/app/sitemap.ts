import { MetadataRoute } from "next";
import glob from "fast-glob";
import * as path from "path";
import { products } from "@/constants/products";

const base = "https://www.adityakumar.co";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Read blog folders by name instead of importing the MDX, which pulls in client components.
  const blogDirs = await glob("*/content.mdx", {
    cwd: path.join(process.cwd(), "src/app/blog"),
  });
  const routes = [
    "",
    "/about",
    "/projects",
    "/blog",
    "/resume",
    "/contact",
    ...products.filter((p) => p.slug).map((p) => `/projects/${p.slug}`),
    ...blogDirs.map((f) => `/blog/${f.replace("/content.mdx", "")}`),
  ];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
