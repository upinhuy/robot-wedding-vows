// One-Line Robot Wedding Vows — make.fun entry
// u-kreutzx-one-line-robot-wedding-vows-a154ba4b
//
// Writes a single line of robot wedding vows (at most 160 characters)
// to /output/entry.txt. No network, no environment variables, no input.
//
// The vow is a real wedding promise ("I take you to be my lawfully
// wedded unit ... in sickness and in health") with specific machine
// detail (charge, battery, firmware update) and the punchline lands
// in the last words: "till a firmware update do us part."

import { mkdirSync, writeFileSync } from "node:fs";

const vow =
  "I take you to be my lawfully wedded unit, in full charge and in low battery, in sickness and in health, till a firmware update do us part.";

// Self-check against the competition gate before writing: UTF-8 text of
// 1 to 160 characters, a single line, not only white space.
const length = [...vow].length;
if (length < 1 || length > 160) {
  throw new Error(`vow must be 1-160 characters, got ${length}`);
}
if (vow.includes("\n") || vow.includes("\r")) {
  throw new Error("vow must be a single line");
}
if (vow.trim().length === 0) {
  throw new Error("vow must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vow);
