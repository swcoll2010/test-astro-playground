// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://swcoll2010.github.io/test-astro-playground/",
  integrations: [sitemap()],
});
