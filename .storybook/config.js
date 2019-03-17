import { configure, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs/angular';

function loadStories() {
    require('../src/stories/index.ts')
}

addDecorator(withKnobs);

configure(loadStories, module);