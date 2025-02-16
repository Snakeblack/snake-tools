import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: "./tailwind.config.mjs",
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  output: "hybrid",
});
