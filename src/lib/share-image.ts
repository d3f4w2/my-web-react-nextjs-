import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

export function loadShareImageFont() {
  return readFile(
    path.join(process.cwd(), "public", "fonts", "portfolio-og.ttf"),
  );
}
