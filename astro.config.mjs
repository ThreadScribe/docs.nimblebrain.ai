import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.threadscribe.ai",

  integrations: [
    starlight({
      title: "ThreadScribe.ai",
      logo: {
        src: './src/assets/threadscribe_head_square_64.png',
      },
      favicon: './src/assets/threadscribe_head_square_64.png',
      social: {
        github: "https://github.com/ThreadScribe/docs.threadscribe.ai",
      },
      customCss: [
        './src/styles/custom.css',
        '@fontsource/poppins/400.css',
        '@fontsource/poppins/600.css',
      ],
      sidebar: [
        {
          label: "Overview",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/" },
            { label: "Quickstart", link: "/overview/quickstart" },
            { label: "FAQ", link: "/overview/faq" },
          ],
        },
        {
          label: "Resources",
          items: [{ label: "Support", link: "/support/" }],
        },
      ],
    }),
  ],
});
