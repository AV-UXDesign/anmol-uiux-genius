import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Load environment variables from .env or .env.production
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_URL || "./", // fallback to ./ if not defined
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
