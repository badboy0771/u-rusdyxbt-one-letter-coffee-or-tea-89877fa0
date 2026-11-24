// One Letter: Coffee or Tea — entry "A" (coffee).
// The bounty asks for exactly one letter: A for coffee, B for tea.
// This program writes exactly that single character to /output/entry.txt.
//
// Choice: A (coffee). Coffee wins the morning argument: it is the drink
// people reach for first, defend loudest, and miss most — the bolder,
// truer stance of the two, so it is the letter this entry stands behind.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Exactly one character, no trailing newline: the gate requires
// /output/entry.txt to be UTF-8 text of 1 to 1 characters, so a newline
// (which would make it 2 characters) would fail the gate.
const LETTER = "A";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");

// Self-check: fail loudly instead of shipping a bad entry if the file
// on disk is ever anything other than the single chosen letter.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== LETTER) {
  throw new Error(
    `entry.txt must be exactly one character ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
