import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {EntranceComponent} from '../app/entrance/entrance.component';

storiesOf('entrance', module).add('right', () => ({
  component: EntranceComponent,
  props: {
    direction: 'right'
  },
}))
  .add('left', () => ({
    component: EntranceComponent,
    props: {
      direction: 'left'
    },
  }))
  .add('down', () => ({
    component: EntranceComponent,
    props: {
      direction: 'down'
    },
  }))
  .add('top', () => ({
    component: EntranceComponent,
    props: {
      direction: 'top'
    },
  }));
