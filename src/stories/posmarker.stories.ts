import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {PositionMarkerComponent} from '../app/position-marker/position-marker.component';

storiesOf('Position Marker', module).add('my position', () => ({
  component: PositionMarkerComponent,
  props: {},
}))
  .add('moving', () => ({
    component: PositionMarkerComponent,
    props: {},
  }))
  .add('zoom-0', () => ({
    component: PositionMarkerComponent,
    props: {},
  }))
  .add('zoom-1', () => ({
    component: PositionMarkerComponent,
    props: {},
  }))
  .add('zoom-2', () => ({
    component: PositionMarkerComponent,
    props: {},
  }));
