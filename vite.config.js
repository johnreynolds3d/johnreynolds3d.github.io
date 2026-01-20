import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: './libs/three', replacement: resolve(__dirname, 'node_modules/three') },
      { find: 'libs/three', replacement: resolve(__dirname, 'node_modules/three') },
    ]
  },
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
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/three/build/three.module.js',
          dest: 'libs/three/build'
        },
        {
          src: 'node_modules/three/examples/jsm',
          dest: 'libs/three/examples'
        }
      ]
    }),
    // VitePWA({...})
  ],
});
