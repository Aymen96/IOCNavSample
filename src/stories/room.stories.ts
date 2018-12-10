import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {RoomComponent} from '../app/room/room.component';

storiesOf('Room', module).add('normal', () => ({
  component: RoomComponent,
  props: {
    name: 'R500',
  },
}))
  .add('with dimentions', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      xdim: 40,
      ydim: 30,
    },
  }))
  .add('WC', () => ({
    component: RoomComponent,
    props: {
      name: 'WC',
      type: 'wc',
      xdim: 10,
      ydim: 20,
    },
  }))
  .add('positioned', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      type: 'wc',
      x: 50,
      y: 50,
    },
  }))
  .add('horizontal down door', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      type: 'wc',
    },
  }))
  .add('horizontal top door', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      type: 'wc',
      pos: 'top',
    },
  }))
  .add('vertical left door', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      type: 'wc',
      isHorizontal: false,
      pos: 'left',
    },
  }))
  .add('vertical right door', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      type: 'wc',
      isHorizontal: false,
      pos: 'right',
    },
  }));
