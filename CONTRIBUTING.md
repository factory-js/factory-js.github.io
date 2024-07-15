# Contributing Guide

Thank you for your interest in contributing to FactoryJS documentation.

## How to Contribute

1. Fork this repository from [GitHub link](https://github.com/factory-js/factory-js.github.io/fork) and clone it. [First Contributions](https://github.com/firstcontributions/first-contributions) would be helpful.

   ```sh
   git clone git@github.com:<your-username>/factory-js.github.io.git
   cd factory-js.github.io
   ```

1. Install the pnpm with [Corepack](https://nodejs.org/api/corepack.html). Run the following in the project root:

   ```sh
   corepack enable pnpm
   ```

1. Install packages.

   ```sh
   pnpm install
   ```

1. Create a branch and checkout.

   ```sh
   git switch -c your-new-branch-name
   ```

1. Code and commit your changes.

   ```sh
   git commit -m 'add a new feature'
   ```

1. Run linters in the project root before pushing the PR.

   ```sh
   pnpm run secretlint
   pnpm run type-check
   pnpm run lint
   pnpm run format
   ```

1. Push your changes and open the PR.

   ```sh
   git push -u origin your-branch-name
   ```

1. Rename your PR title to comply with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). CI will automatically verify this.  
   You don't need to change commit messages because we use squash merge.  
   Generally, you can use the `docs:` when you intend to improve or fix documentation, and it is rare that you will need to use other types.

1. Please ensure all CI checks have passed. That's all! 🎉
