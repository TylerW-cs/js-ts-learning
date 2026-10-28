# Weekly Checks

Answer each question out loud or in writing **before** opening the answer. Use the proper terms. If you can't answer one, add it to `notes/terminology.md` and revisit it next week.

---

## Phase 1: JavaScript

### Week 1: Basics

1. What's the difference between `let`, `const` and `var`, and which should you use by default?

<details><summary>Answer</summary>

`const` can't be reassigned, `let` can. Both are **block-scoped**. `var` is the old way: it's function-scoped and has confusing behaviour, so avoid it. Default to `const`, and use `let` only when the value needs to change.
</details>

2. Name the **primitive types** in JavaScript.

<details><summary>Answer</summary>

`string`, `number`, `boolean`, `null`, `undefined`, plus `bigint` and `symbol`, which you'll rarely use.
</details>

3. What's the difference between `==` and `===`?

<details><summary>Answer</summary>

`===` is **strict equality**: it checks value and type. `==` converts types first, so `"5" == 5` is `true`. Always use `===`.
</details>

4. What is a **template literal**? Give an example.

<details><summary>Answer</summary>

A string written with backticks that lets you insert values with `${}`, for example `` `Hello ${name}` ``.
</details>

5. What is Node.js, and how is it different from JavaScript in a browser?

<details><summary>Answer</summary>

Node is a **runtime** that runs JavaScript outside the browser, on your computer. It has no `document` or web page, but it can read files, use the terminal and so on.
</details>

### Week 2: Functions

1. What's the difference between a **parameter** and an **argument**?

<details><summary>Answer</summary>

A parameter is the name in the function definition (`function greet(name)`). An argument is the actual value you pass in when calling it (`greet("Tyler")`).
</details>

2. Rewrite `function double(n) { return n * 2; }` as an **arrow function**.

<details><summary>Answer</summary>

`const double = (n) => n * 2;`. With a single expression, the `return` is **implicit**.
</details>

3. What does a function return if it has no `return` statement?

<details><summary>Answer</summary>

`undefined`.
</details>

4. What is **scope**?

<details><summary>Answer</summary>

Where in the code a variable can be accessed. A variable declared inside a function or block isn't visible outside it.
</details>

5. What is a **default parameter**?

<details><summary>Answer</summary>

A value used when no argument is passed, for example `function greet(name = "friend")`.
</details>

### Week 3: Objects and arrays

1. What's the difference between **dot notation** and **bracket notation**, and when do you need brackets?

<details><summary>Answer</summary>

`item.name` vs `item["name"]`. You need brackets when the property name is stored in a variable or contains spaces or special characters.
</details>

2. What's the difference between `map`, `filter`, `find` and `forEach`?

<details><summary>Answer</summary>

- `map` returns a **new array** with every item transformed.
- `filter` returns a **new array** with only the items that pass a test.
- `find` returns the **first item** that passes a test, or `undefined`.
- `forEach` runs code for each item and returns **nothing**.
</details>

3. What is **destructuring**? Give an example.

<details><summary>Answer</summary>

Pulling values out of an object or array into variables, for example `const { name, power } = item;`.
</details>

4. What does the **spread operator** (`...`) do?

<details><summary>Answer</summary>

Expands an array or object into its individual items, for example `[...arr1, ...arr2]` to combine arrays, or `{ ...item, power: 50 }` to copy an object with one change.
</details>

5. What is a **callback function**?

<details><summary>Answer</summary>

A function passed into another function to be called later, like the function you pass to `filter`: `items.filter(item => item.power > 50)`.
</details>

### Week 4: Async

1. What is a **promise**, and what are its three states?

<details><summary>Answer</summary>

An object representing a value that will be available later. States: **pending**, **fulfilled** (succeeded) and **rejected** (failed).
</details>

2. What does `await` do, and where can you use it?

<details><summary>Answer</summary>

It pauses the function until the promise **settles**, then gives you the result. You can only use it inside an `async` function, or at the top level of a module.
</details>

3. What does an `async` function always return?

<details><summary>Answer</summary>

A promise, even if you `return` a plain value.
</details>

4. What's the difference between awaiting things one by one and using `Promise.all`?

<details><summary>Answer</summary>

Awaiting one by one runs them **sequentially**, each waiting for the last. `Promise.all` runs them **concurrently** and waits for all of them, which is faster. If any one rejects, `Promise.all` rejects.
</details>

5. How do you handle an error from an awaited promise?

<details><summary>Answer</summary>

Wrap it in `try`/`catch`.
</details>

6. Why does this matter for Playwright?

<details><summary>Answer</summary>

Almost every Playwright action, like clicking, typing or navigating, returns a promise, so you `await` nearly every line. Forgetting an `await` is one of the most common causes of broken or flaky tests.
</details>

---

## Phase 2: TypeScript

### Week 5: TypeScript basics

1. What is TypeScript, in one sentence?

<details><summary>Answer</summary>

JavaScript with a **static type system** added, checked before the code runs.
</details>

2. What does it mean that TypeScript is **compiled** (or **transpiled**)?

<details><summary>Answer</summary>

Browsers and Node can't run TypeScript directly, so it's converted into plain JavaScript first. The types are removed in the process; they only exist to catch mistakes before running.
</details>

3. What's the difference between a **type annotation** and **type inference**?

<details><summary>Answer</summary>

An annotation is when you write the type yourself (`let age: number = 30`). Inference is when TypeScript works it out (`let age = 30` is already known to be a `number`).
</details>

4. What's the difference between `any` and `unknown`?

<details><summary>Answer</summary>

`any` switches off type checking completely. `unknown` means "could be anything", but TypeScript makes you check what it is before using it. Prefer `unknown`.
</details>

5. How is this similar to C#?

<details><summary>Answer</summary>

Both are statically typed and catch type errors before running. The difference is that C# types exist at runtime, while TypeScript types disappear after compiling.
</details>

### Week 6: Interfaces and unions

1. What is an **interface**?

<details><summary>Answer</summary>

A description of the **shape** of an object: which properties it has and what types they are.
</details>

2. How do you make a property **optional**?

<details><summary>Answer</summary>

Add `?` after its name, for example `excess?: number`.
</details>

3. What is a **union type**? Give an example.

<details><summary>Answer</summary>

A type that can be one of several types, for example `string | number`, or a set of exact values like `"weapon" | "armour" | "potion" | "ring"` (a **literal union**).
</details>

4. What is **type narrowing**?

<details><summary>Answer</summary>

Using a check, such as `typeof`, an `if` or `===`, so TypeScript knows a more specific type inside that block.
</details>

5. What's the difference between `type` and `interface`?

<details><summary>Answer</summary>

Both can describe object shapes. `type` can also describe unions and other types; `interface` can be extended and merged. Either is fine for objects, so pick one and be consistent.
</details>

### Week 7: Generics and config

1. What is a **generic**? Give an example you've seen.

<details><summary>Answer</summary>

A type that takes another type as a parameter, so code works with many types while staying type-safe. `Array<string>` and `Promise<number>` are generics.
</details>

2. Name two **utility types** and what they do.

<details><summary>Answer</summary>

For example: `Partial<T>` makes every property optional; `Pick<T, "a" | "b">` keeps only the listed properties; `Omit` removes listed properties; `Readonly` stops properties being changed.
</details>

3. What is `tsconfig.json` for?

<details><summary>Answer</summary>

It holds the TypeScript **compiler settings** for a project: how strict to be, which files to include and what JavaScript version to output.
</details>

4. What does `strict` mode do?

<details><summary>Answer</summary>

Turns on stricter checks, including making you handle possible `null`/`undefined` values. Recommended to keep on.
</details>

---

## Phase 3: Playwright

### Week 8: First tests

1. What is **end-to-end (E2E) testing**?

<details><summary>Answer</summary>

Testing the whole application the way a user would, through a real browser, from start to finish.
</details>

2. What is a **test runner**?

<details><summary>Answer</summary>

The tool that finds your tests, runs them and reports the results. Playwright Test is Playwright's test runner.
</details>

3. What does **headless** mean?

<details><summary>Answer</summary>

Running the browser without a visible window. It's faster and is how tests usually run in CI.
</details>

4. What is the `page` object?

<details><summary>Answer</summary>

A browser tab that Playwright controls. You use it to navigate, click, type and find elements.
</details>

5. Where are Playwright's settings kept, and name two things you can configure there.

<details><summary>Answer</summary>

`playwright.config.ts`. For example: which browsers to run on, the base URL, timeouts, retries and reporters.
</details>

### Week 9: Locators

1. What is a **locator**?

<details><summary>Answer</summary>

A way of finding an element on the page, such as a button or input, so you can interact with it or check it.
</details>

2. Why does Playwright recommend `getByRole` over CSS selectors or XPath?

<details><summary>Answer</summary>

It finds elements the way a user or screen reader sees them (for example "the button called Submit"), so tests break less when the page's HTML or styling changes.
</details>

3. Name three other built-in locators.

<details><summary>Answer</summary>

For example: `getByText`, `getByLabel`, `getByPlaceholder`, `getByTestId`.
</details>

4. What is **auto-waiting**?

<details><summary>Answer</summary>

Before an action like `click`, Playwright automatically waits until the element is visible, enabled and stable, so you rarely need manual waits.
</details>

### Week 10: Assertions

1. What is an **assertion**?

<details><summary>Answer</summary>

A check that something is true, such as text appearing. If it fails, the test fails.
</details>

2. What is a **web-first assertion**, and why is it useful?

<details><summary>Answer</summary>

An assertion like `await expect(locator).toBeVisible()` that **retries** until it passes or times out, so it handles pages that take a moment to update.
</details>

3. What is a **flaky test**, and name a common cause.

<details><summary>Answer</summary>

A test that sometimes passes and sometimes fails without the code changing. Common causes: a missing `await`, hard-coded waits, or depending on data that changes.
</details>

4. Why should you avoid `waitForTimeout`?

<details><summary>Answer</summary>

A fixed wait is either too short (flaky) or too long (slow). Auto-waiting and web-first assertions wait exactly as long as needed.
</details>

### Week 11: Fixtures and the page object model

1. What is a **fixture** in Playwright?

<details><summary>Answer</summary>

Something set up for a test and passed into it, like `page`. You can create your own, for example a logged-in page.
</details>

2. What are `beforeEach` and `afterEach` hooks for?

<details><summary>Answer</summary>

Running setup or clean-up code before or after every test in a file, such as going to a starting page.
</details>

3. What is the **page object model (POM)**?

<details><summary>Answer</summary>

A pattern where each page or section of the app gets a class holding its locators and actions, for example a `QuotePage` with a `fillDriverDetails()` method.
</details>

4. What problem does the page object model solve?

<details><summary>Answer</summary>

It avoids repeating locators across many tests. If the page changes, you update one place instead of every test.
</details>

### Week 12: Working on a real repo

1. What is a **branch**, and why not commit straight to `main`?

<details><summary>Answer</summary>

A separate line of work. Using one keeps `main` stable while you make changes, and lets someone review them first.
</details>

2. What is a **pull request (PR)**?

<details><summary>Answer</summary>

A request to merge your branch into another, usually `main`. It's where code review happens.
</details>

3. What is **CI (continuous integration)**?

<details><summary>Answer</summary>

Automatically running checks, such as your tests, whenever code is pushed or a PR is opened.
</details>

4. What is the Playwright **trace viewer** for?

<details><summary>Answer</summary>

Replaying a test step by step after it runs, with screenshots, network calls and console logs, to work out why it failed.
</details>

5. Explain, in your own words, what one of your tests does and why each step is there.

<details><summary>Answer</summary>

No set answer. If you can explain it clearly to James, you understand it.
</details>
