const path = require('path');

module.exports = {
  "stories": [
    "../src/fields/**/*.stories.mdx",
    "../src/fields/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
}