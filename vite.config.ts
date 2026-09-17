// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages has no server runtime, so this build skips Nitro (nitro: false)
// and uses TanStack Start's SPA mode (static shell + client-side rendering)
// instead of the Cloudflare Worker SSR entry used by the Lovable preview.
// This site is a single route, so a plain client-rendered shell is enough —
// no per-route prerendering needed.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
  },
  vite: {
    base: "/Portfolio/",
  },
});
