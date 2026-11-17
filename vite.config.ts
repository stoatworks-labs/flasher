import { readFileSync } from "node:fs";
import { defineConfig } from "vitest/config";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));

export default defineConfig({
  // "v0.x.y", the form every Stoatworks tool shows in its footer and About box.
  define: { __APP_VERSION__: JSON.stringify(`v${pkg.version}`) },
  build: { target: "es2022" },
  test: { environment: "node" },
});
