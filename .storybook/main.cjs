module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
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
