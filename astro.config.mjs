import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vellinga.dev',
  integrations: [tailwind()],
  build: {
    assets: "static",
  },
});
