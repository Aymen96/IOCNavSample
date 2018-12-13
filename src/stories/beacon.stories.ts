import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {BeaconComponent} from '../app/beacon/beacon.component';

storiesOf('Beacon', module).add('normal', () => ({
  component: BeaconComponent,
  props: {
    x: 0,
    y: 0,
  },
}))
  .add('detected', () => ({
    component: BeaconComponent,
    props: {
      x: 0,
      y: 0,
      status: 'detected'
    },
  }));
