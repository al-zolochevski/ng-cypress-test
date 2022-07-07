const {defineConfig} = require('cypress')
const {initPlugin} = require('cypress-plugin-snapshots/plugin')

module.exports = defineConfig({
  projectId: '4ngo8h',
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*', '**/__snapshots__/*', '**/__image_snapshots__/*'],
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      return config;
    },
    cypressPluginSnapshots: {
      serverPort: 3000
    }
  }
})
