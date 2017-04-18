import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

function loadStories() {
  require('../stories/');
}

setOptions({
  name: 'react-social-bar',
  url: 'https://github.com/azamatsmith/react-social-bar'
});

configure(loadStories, module);
