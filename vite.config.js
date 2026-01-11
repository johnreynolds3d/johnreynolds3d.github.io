import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '3worldsVR': resolve(__dirname, '3worldsVR.html'),
        CSS3D: resolve(__dirname, 'CSS3D.html'),
        CubeBlaster: resolve(__dirname, 'CubeBlaster.html'),
        aframe_text: resolve(__dirname, 'aframe_text.html'),
        blog: resolve(__dirname, 'blog.html'),
        blog010118: resolve(__dirname, 'blog010118.html'),
        blog031217: resolve(__dirname, 'blog031217.html'),
        blog171117: resolve(__dirname, 'blog171117.html'),
        blog181117: resolve(__dirname, 'blog181117.html'),
        blog201117: resolve(__dirname, 'blog201117.html'),
        blog211117: resolve(__dirname, 'blog211117.html'),
        blog311217: resolve(__dirname, 'blog311217.html'),
        breakr: resolve(__dirname, 'breakr.html'),
        crypto_plotly: resolve(__dirname, 'crypto_plotly.html'),
        drivr: resolve(__dirname, 'drivr.html'),
        spidr: resolve(__dirname, 'spidr.html'),
        walkr: resolve(__dirname, 'walkr.html'),
        webaudio_timing: resolve(__dirname, 'webaudio_timing.html'),
        worker: resolve(__dirname, 'worker.html'),
      },
    },
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,typeface.json,woff,woff2}'],
      },
      includeAssets: ['favicon.ico', 'images/icons/*.png'],
      manifest: {
        name: 'JohnReynolds3D',
        short_name: 'JR3D',
        description: 'John Reynolds 3D - Portfolio',
        theme_color: '#303030',
        icons: [
          {
            src: 'images/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
