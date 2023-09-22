import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: <span>Canopy IIIF</span>,
  project: {
    link: "https://github.com/canopy-iiif/canopy-iiif",
  },
  docsRepositoryBase: "https://github.com/canopy-iiif/docs",
  footer: {
    text: "a IIIF Collection sourced site generator in Next.js for digital collections, humanities, and exhibitions",
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
    autoCollapse: true,
  },
};

export default config;
