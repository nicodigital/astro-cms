import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
      tailwind(),
      NetlifyCMS({
        config: {
          backend: {
            name: "git-gateway",
            branch: "master",
          },
          collections: [
            {
              label: "Slides",
              name: "slides",
              folder: "src/pages/slides",
              create: true,
              delete: true,
              fields: [
                {
                  label: "Slide",
                  name: "slide",
                  widget: "image",
                  choose_url: true,
                  media_folder: "/src/assets",
                  // required: false,
                  // media_library: {
                  //   config:{ multiple: true }
                  // }
                }
              ]
            },
            {
              label: "News",
              name: "news",
              slug: "{{extUrl}}",
              folder: "src/pages/news",
              create: true,
              delete: true,
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Description",
                  name: "description",
                  widget: "string",
                },
                {
                  label: "External URL",
                  name: "extUrl",
                  widget: "string",
                },{
                  label: "Imagen",
                  name: "thumb",
                  widget: "image",
                  choose_url: true,
                  media_folder: "/src/assets",
                  default: "/public/img/placeholder.svg",
                  required: false,
                }
              ],
            },
          ],
        },
      }),
    ],
  output: 'server',
  site: 'https://nicowebsite.com/astro',
  adapter: netlify()
});