const { setBuildGetters } = require('../../node_modules/.pnpm/vite-plugin-ssr@0.4.32_vite@3.1.0/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/plugins/importBuild/loadBuild.js');
setBuildGetters({
  pageFiles: () => import('./pageFiles.mjs'),
  clientManifest: () => require('../client/manifest.json'),
  pluginManifest: () => require('../client/vite-plugin-ssr.json'),
});
