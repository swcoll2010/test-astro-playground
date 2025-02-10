// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/swcoll2010/test-astro-playground",
  integrations: [sitemap()],
});
