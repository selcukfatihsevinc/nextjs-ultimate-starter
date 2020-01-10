import { addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

const loaderFn = () => [require('../src/_shared/Pure/Button/_.stories')];

configure(loaderFn, module);
