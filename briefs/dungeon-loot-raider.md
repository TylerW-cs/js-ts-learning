# Dungeon Loot Raider (Node Console App)

**THE IDEA:** A small console app where your hero raids a few dungeons, waits for the loot to come back, then sorts through the haul to find the best gear.

## Requirements

Create an array of at least eight loot objects. Each item should have a name, a type (weapon, armour, potion or ring), a power level from 1 to 100, a gold value and the dungeon it came from.

Write an async function for each dungeon that waits a random 1–3 seconds before returning its loot, to simulate your hero exploring. Use `setTimeout` wrapped in a promise, and `await` the result.

When the app starts, print "Your hero sets off..." and then raid every dungeon. Print a line such as "Returned from the Goblin Caves!" as each dungeon's loot arrives.

Once every raid is finished, print the full haul as a tidy list, showing the gold value with commas, for example 1,250 gold.

Ask the user, in the console, what type of item they're looking for. Show only the loot that matches, using `filter`.

Sort the matching items from most to least powerful and print them. Then announce the strongest one on its own line, for example "⚔️ Best find: Flaming Sword (power 87)".

If nothing matches the type the user typed, print a friendly message such as "No rings this time, adventurer."

## Stretch goals

- [ ] Use `Promise.all` to send heroes into every dungeon at the same time instead of one after another, and compare how long each approach takes.
- [ ] Give one dungeon a random chance of a trap that makes the raid fail. Handle it with `try`/`catch` so the rest of the loot still shows.
- [ ] Add up the total gold value of the whole haul using `reduce`.
- [ ] Keep this version so you can convert it to TypeScript in Phase 2. A `LootItem` interface makes a good first one.
