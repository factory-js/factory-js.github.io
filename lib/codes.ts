import { transformerNotationHighlight } from "@shikijs/transformers";
import type { ShikiTransformer } from "shiki";
import { createHighlighter } from "shiki";

const codes = {
  hero: {
    factory: `import { factory } from "@factory-js/factory";

const userFactory = factory
  .define({
    props: {
      firstName: () => "John",
      lastName: () => "Doe",
      fullName: later<string>(),
    },
    vars: {},
  })
  .props({
    fullName: async ({ props }) =>
      \`\${await props.firstName} \${await props.lastName}\`
  });

console.log(await userFactory.buildList(2));`,
    output: `[
  {
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe"
  },
  {
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe"
  }
]`,
  },
  usecases: {
    userFactory: `import { factory } from "@factory-js/factory";
import { faker } from "@faker-js/faker";
import { db } from "./db";

export const userFactory = factory
  .define({
    props: {
      id: () => faker.string.uuid(),
      firstName: () => faker.person.firstName(),
      lastName: () => faker.person.lastName(),
      role: () => "guest",
    },
    vars: {}
  },
  // Save the created object to the database
  async (props) => db.user.create({ data: props })
);`,
    taskFactory: `import { factory } from "@factory-js/factory";
import { faker } from "@faker-js/faker";
import { db } from "./db";
import { userFactory } from "./user-factory";

export const taskFactory = factory.define(
  {
    props: {
      userId: later<string>(),
      description: () => faker.string.alphanumeric(20),
    },
    vars: {
      user: async () => await userFactory.create(),
    },
  },
  // Save the created object to the database
  async (props) => db.tasks.create({ data: props }),
).props({
  userId: async ({ vars }) => (await vars.user).id
});`,
    testing: `import { userFactory } from "./user-factory.ts";

// Function to be tested
const isAdmin = (user: User) => {
  return user.role === "admin"
}

describe("when a user is admin", () => {
  it("returns true", async () => {
    const user = await userFactory(db) // [!code highlight]
      .props({ role: () => "admin" }) // [!code highlight]
      .build(); // [!code highlight]

    expect(isAdmin(user)).toBe(true);
  });
});

describe("when a user is guest", () => {
  it("returns false", async () => {
    const user = await userFactory(db) // [!code highlight]
      .props({ role: () => "guest" }) // [!code highlight]
      .build(); // [!code highlight]

    expect(isAdmin(user)).toBe(false);
  });
});`,
    handlers: `import { http, HttpResponse } from 'msw'
import { userFactory } from "./user-factory.ts";

export const handlers = [
  http.get('https://example.com/users', async () => {
    return HttpResponse.json(
      await userFactory.buildList(10) // [!code highlight]
    )
  }),
]`,
    e2e: `import { userFactory } from "./user-factory.ts";
import { taskFactory } from "./task-factory.ts";
import { test, expect } from "@playwright/test";

test("deletes a task", async ({ browser }) => {
  const user = await userFactory.create(); // [!code highlight]

  // Pre-create the task to be deleted
  await taskFactory // [!code highlight]
    .props({ description: () => "example task" }) // [!code highlight]
    .vars({ user: () => user }) // [!code highlight]
    .create(); // [!code highlight]

  await signIn(user);
  const page = await context.newPage();
  await page.goto("/app");

  await expect(
    page.getByRole('link', { name: 'example task' })
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete Task" })
    .click();
  await expect(
    page.getByRole('link', { name: 'example task' })
  ).not.toBeVisible();
});`,
    seed: `import { userFactory } from "./user-factory.ts";
import { taskFactory } from "./task-factory.ts";

async function main() {
  const admin = await userFactory.create() // [!code highlight]

  const user = await userFactory.create() // [!code highlight]
  await taskFactory // [!code highlight]
    .vars({ user: () => user }) // [!code highlight]
    .createList(10) // [!code highlight]

  console.log({ admin, user })
}

main()`,
  },
} as const;

const transformerBackgroundRemover: ShikiTransformer = {
  pre(node) {
    delete node.properties["style"];
  },
};

export const getCodes = async () => {
  const highlighter = await createHighlighter({
    langs: ["typescript", "json"],
    themes: ["github-dark-default", "min-light"],
  });
  return {
    hero: {
      factory: highlighter.codeToHtml(codes.hero.factory, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [transformerBackgroundRemover],
      }),
      output: highlighter.codeToHtml(codes.hero.output, {
        lang: "json",
        themes: {
          dark: "github-dark-default",
          light: "min-light",
        },
        transformers: [transformerBackgroundRemover],
      }),
    },
    usecases: {
      userFactory: highlighter.codeToHtml(codes.usecases.userFactory, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [transformerBackgroundRemover],
      }),
      taskFactory: highlighter.codeToHtml(codes.usecases.taskFactory, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [transformerBackgroundRemover],
      }),
      testing: highlighter.codeToHtml(codes.usecases.testing, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [
          transformerNotationHighlight(),
          transformerBackgroundRemover,
        ],
      }),
      handlers: highlighter.codeToHtml(codes.usecases.handlers, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [
          transformerNotationHighlight(),
          transformerBackgroundRemover,
        ],
      }),
      e2e: highlighter.codeToHtml(codes.usecases.e2e, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [
          transformerNotationHighlight(),
          transformerBackgroundRemover,
        ],
      }),
      seed: highlighter.codeToHtml(codes.usecases.seed, {
        lang: "typescript",
        themes: {
          dark: "github-dark-default",
          light: "github-dark-default",
        },
        transformers: [
          transformerNotationHighlight(),
          transformerBackgroundRemover,
        ],
      }),
    },
  };
};
