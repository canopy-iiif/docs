import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";
import React from "react";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/canopy-iiif/canopy-iiif",
  },
  docsRepositoryBase: "https://github.com/canopy-iiif/docs/blob/main",
  footer: {
    text: "a IIIF Collection sourced site generator in Next.js for digital collections, humanities, and exhibitions",
  },
  darkMode: false,
  gitTimestamp: null,
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: 225,
  primarySaturation: 76,
  sidebar: {
    defaultMenuCollapseLevel: 0,
    autoCollapse: true,
  },
};

export default config;
