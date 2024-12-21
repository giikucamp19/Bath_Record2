import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // フロントエンドのポート
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // バックエンドのURL
        changeOrigin: true, // 必須オプション
        rewrite: (path) => path.replace(/^\/api/, ''), // `/api` をバックエンドのルートに置き換え
      },
    },
  },
});
