import { addDecorator } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';

import "../src/filters";
import "../src/styles/main.sass";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(centered)
