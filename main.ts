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

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const videoPath = join(botDir, "VIDEO.json");

// The entry is the video's address: refuse to hand in a VIDEO.json that
// is not valid JSON or names no URL, instead of copying a broken file.
let video;
try {
  video = JSON.parse(readFileSync(videoPath, "utf8"));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof video?.url !== "string" || !video.url.startsWith("https://")) {
  console.error(`VIDEO.json in ${botDir} names no https URL`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, "VIDEO.json"));
