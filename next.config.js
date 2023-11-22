const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = () => {
  return withNextra({
    basePath: "/docs",
    images: {
      unoptimized: true,
    },
    output: "export",
  });
};
