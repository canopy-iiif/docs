import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

import Logo from "./components/Logo";
import React from "react";
import TitleComponent from "@components/TitleComponent";
import { useRouter } from "next/router";

const siteTitle = "Canopy IIIF";
const siteUrl = "https://canopy-iiif.github.io/docs";
const siteDescription =
  "a IIIF Collection sourced site generator in Next.js for digital collections, humanities, and exhibitions";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    const titleTemplate =
      asPath === "/"
        ? `%s - Create a static site with a IIIF Collection`
        : `%s – ${siteTitle}`;

    return { titleTemplate };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url =
      siteUrl + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    /**
     * Add any custom meta tags you want to add to the <head> tag here
     * Nextra automatically adds description, og:description, og:title from front matter
     */
    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={
            frontMatter.image
              ? frontMatter.image
              : `${siteUrl}/assets/canopy-iiif.png`
          }
        />
      </>
    );
  },
  logo: <Logo />,
  project: {
    link: "https://github.com/canopy-iiif/canopy-iiif",
  },
  docsRepositoryBase: "https://github.com/canopy-iiif/docs/blob/main",
  footer: {
    text: siteDescription,
  },
  darkMode: false,
  gitTimestamp: null,
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: 225,
  primarySaturation: 76,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    titleComponent: (props) => <TitleComponent {...props} />,
    toggleButton: true,
  },
};

export default config;
