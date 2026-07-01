import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

/**
 * Resolves Figma Make asset imports (`figma:asset/<hash>.<ext>`)
 * to the local `assets/` folder so the project runs outside Figma.
 */
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id === 'figma:foundry-client-api') {
        return '\0figma:foundry-client-api'
      }
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'assets', filename)
      }
    },
    load(id) {
      if (id === '\0figma:foundry-client-api') {
        // Stub — not needed outside Figma Make runtime
        return 'export default {}'
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
