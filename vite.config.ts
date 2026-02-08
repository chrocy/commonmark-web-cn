import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // 将 React 相关库打包在一起
                    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                    // 将 Markdown 解析相关库打包在一起，因为它们很大
                    'vendor-utils': ['markdown-it', 'highlight.js', 'canvas-confetti'],
                },
            },
        },
    },
    server: {
        host: true
    }
})