import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

(async () => {
  const stream = new SitemapStream({
    hostname: "https://krishna-portfolio-navy.vercel.app",
  }); // Replace with your actual site URL
  stream.write({ url: "/", changefreq: "daily", priority: 1.0 });
  stream.end();

  const sitemap = await streamToPromise(stream);
  fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
  console.log("Sitemap created successfully!");
})();
