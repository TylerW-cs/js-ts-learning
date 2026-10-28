# JavaScript & TypeScript Learning

A 12-week plan to get good at JavaScript and TypeScript, working up to writing real Playwright tests. About 4–7 hours a week.

---

## Phase 1: JavaScript foundations (weeks 1–4)

**Course:** Boot.dev *Learn JavaScript*

### Focus areas
- [ ] Functions and arrow functions (`const add = (a, b) => a + b`)
- [ ] Objects and arrays
- [ ] Array methods: `map`, `filter`, `find`, `forEach`
- [ ] Promises and `async`/`await` (the most important topic for Playwright, so don't rush it)

### Practice scripts (run with `node script.js`)
- [ ] A script that filters and sorts an array of objects
- [ ] A script that uses `async`/`await` with `setTimeout` to simulate waiting for something to load

### End-of-phase project
- [ ] Build [Dungeon Loot Raider](briefs/dungeon-loot-raider.md)

**Ready to move on when:** I can write a small `async` function that loops over an array of objects without looking up the syntax.

---

## Phase 2: TypeScript (weeks 5–7)

**Course:** Boot.dev *Learn TypeScript*

### Focus areas
- [ ] Basic types and typed functions
- [ ] Interfaces (similar to C#)
- [ ] Unions and type narrowing (new compared with C#)
- [ ] Generics

### Practice
- [ ] Convert Phase 1 scripts to `.ts` and run them with `npx tsx script.ts`
- [ ] Convert Dungeon Loot Raider to TypeScript, with a `LootItem` interface
- [ ] Set up a `tsconfig.json` myself

**Ready to move on when:** I can define an interface, type a function's parameters and return value, and fix the red squiggles in VS Code.

---

## Phase 3: Playwright (weeks 8–12)

- [ ] Read through James's repo: test structure, config, how the tests are run. Write down questions.
- [ ] Write practice tests against a public demo site (clicking, filling forms, `expect` assertions, waiting for elements)
- [ ] Learn locators
- [ ] Learn fixtures
- [ ] Learn the page object model (check whether James's repo uses it)
- [ ] Write one real test for a quoting workflow I already test manually
- [ ] Open it as a pull request and get it reviewed by James

---

## Habits throughout

- [ ] Keep `notes/syntax-reference.md` and `notes/terminology.md` up to date
- [ ] Commit practice code every session
- [ ] Give TS/JS most of my learning hours for these 12 weeks
