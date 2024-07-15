import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <h1 className="flex items-center gap-2 font-medium">FactoryJS</h1>,
  docsRepositoryBase:
    "https://github.com/factory-js/factory-js.github.io/tree/main",
  project: {
    link: "https://github.com/factory-js/factory-js",
  },
  footer: {
    text: (
      <span className="text-sm">© {new Date().getFullYear()} FactoryJS</span>
    ),
  },
  head: () => {
    const description =
      "FactoryJS is a lightweight, type-safe object generation library for testing. It is independent of any specific framework, making it versatile for everything from unit testing to E2E testing and seed data generation.";
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta
          property="og:image"
          content="https://factory-js.github.io/og-image.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </>
    );
  },
  useNextSeoProps() {
    return { titleTemplate: "%s | FactoryJS" };
  },
};

export default config;
