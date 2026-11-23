import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch to a friend who has never coded:
// describe the idea like over coffee, watch the agent build it.
const pitch =
  "Tell an AI agent your app idea the way you'd tell a friend over coffee, and watch it build a working first version while you finish your cup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
// No jargon, no code, no risk — just the idea, said out loud, and an app comes back.
