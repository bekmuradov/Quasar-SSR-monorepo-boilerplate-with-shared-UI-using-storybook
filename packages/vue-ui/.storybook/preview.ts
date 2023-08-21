import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/mdi-v5/mdi-v5.css';
import '@quasar/extras/animate/fadeInUp.css';
import '@quasar/extras/animate/fadeOutDown.css';
import '@quasar/extras/animate/fadeInRight.css';
import '@quasar/extras/animate/fadeOutRight.css';
import 'quasar/src/css/index.sass';
import 'quasar/dist/quasar.css';

import type { Preview } from "@storybook/vue3";

import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';

setup((app) => {
  app.use(Quasar, {});
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
