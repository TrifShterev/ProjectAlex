import { defineConfig } from 'cypress';
import { initPlugin as initVisualRegressionPlugin } from '@pixsame/cypress-plugin-visual-regression-diff/plugins';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config.js';

export default defineConfig({
  expose: {
    UPDATE_VISUAL_SNAPSHOTS: process.env.UPDATE_VISUAL_SNAPSHOTS === 'true',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: mergeConfig(viteConfig, {}),
    },
    setupNodeEvents(on, config) {
      initVisualRegressionPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx}',
    supportFile: 'cypress/support/component.js',
    video: false,
  },
});
