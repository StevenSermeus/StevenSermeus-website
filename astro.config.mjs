import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://stevensermeus.be",
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      img: false,
    }),
  ],
});
