/** @format */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        open: true
    },
    build: {
        assetsDir: `src`,
        outDir: `docs`
    }
})
