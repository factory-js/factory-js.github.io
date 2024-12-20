import { ESLint } from "eslint";

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(" ");
};

const config = {
  "**/*.{ts,tsx,js,mjs,jsx}": [
    async (files) => {
      const filesToLint = await removeIgnoredFiles(files);
      return [`eslint --max-warnings=0 ${filesToLint}`];
    },
    "prettier -w -u",
  ],
  "*.{md,html,css,scss,json,yml,yaml,md,mdx}": ["prettier -w -u"],
  "**/*": ["secretlint --maskSecrets"],
};

export default config;
