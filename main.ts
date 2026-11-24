import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I ate your sock. In my defence it was delicious, it was alone, and I have already digested the evidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
// One-liner entry: the robot vacuum's excuse, exactly 104 characters.
