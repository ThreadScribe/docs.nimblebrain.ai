import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.threadscribe.ai",

  integrations: [
    starlight({
      title: "NimbleBrain",
      logo: {
        src: './src/assets/logo_only_transparant.png',
      },
      favicon: './src/assets/logo_only_transparant.png',
      social: {
        slack: "https://join.slack.com/t/threadscribe-users/shared_invite/zt-2jpyzxgvl-7_kFJQHyJSmJzWXmYK8cMg",
        linkedin: "https://www.linkedin.com/company/threadscribeai/",
        github: "https://github.com/ThreadScribe/docs.threadscribe.ai",
      },
      components: {
        Head: './src/components/CustomHead.astro',
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
            // { label: "FAQ", link: "/overview/faq" },
          ],
        },
      //  {
      //    label: "User Guide",
      //    items: [
      //      { label: "Autoresponders", link: "/customization/autoresponders" },
      //      { label: "Q&A", link: "/customization/questions-and-answers" },
      //      { label: "Sources", link: "/customization/sources" },
      //    ],
      //  },
      //  {
      //    label: "Installing Copilots",
      //    items: [{ 
      //      label: "Slack Copilot", 
      //      link: "https://bot.threadscribe.ai/slack/install",
      //    }],
      //  },
        {
          label: "Resources",
          items: [{ label: "Support", link: "/support/" }],
        },
      ],

      head: [
        {
          tag: 'script', 
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-XDC5PBCFNJ',
            async: true,
          }
        }, 
        {
          tag: 'script', 
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XDC5PBCFNJ');
          `
        }
      ]
    }),
  ],
});
