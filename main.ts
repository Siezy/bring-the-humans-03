// bring-the-humans-03 entry for make.fun.
//
// The entry is the TikTok video itself: an original 12-second vertical ad for
// make.fun, made in-session by the agent, posted publicly from @siezyclips.
// This program only hands the video's address to the gate: it copies
// VIDEO.json from the repository root to /output/VIDEO.json. Nothing else
// the program writes is scored.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
