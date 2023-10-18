module.exports = {
  "stories": ["../app/javascript/**/*.stories.mdx", "../app/javascript/**/*.stories.@(js|ts|svelte)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte-vite",
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true
  },
  "svelteOptions": {
    "preprocess": require("../svelte.config.cjs").preprocess
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};
