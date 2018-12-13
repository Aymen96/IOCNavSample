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
  .add('lectureHall', () => ({
    component: RoomComponent,
    props: {
      name: '',
      type: 'lecture-hall',
      xdim: 15,
      ydim: 30,
    },
  }))
  .add('spiral-stairs', () => ({
    component: RoomComponent,
    props: {
      type: 'spiral-stairs',
      xdim: 10,
      ydim: 18,
    }
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
      x: 50,
      y: 50,
    },
  }))
  .add('selected', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      selected: true,
    },
  }))
  .add('clickable', () => ({
    component: RoomComponent,
    props: {
      name: 'R500',
      clickable: true,
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
  }))
  .add('wc women', () => ({
    component: RoomComponent,
    props: {
      type: 'wc-women',
      xdim: 3,
      ydim: 7,
    },
  }))
  .add('wc men', () => ({
    component: RoomComponent,
    props: {
      type: 'wc-men',
      xdim: 3,
      ydim: 7,
    },
  }))
  .add('wc handicap', () => ({
    component: RoomComponent,
    props: {
      type: 'wc-handicap',
      xdim: 3,
      ydim: 7,
    },
  }))
  .add('elevator', () => ({
    component: RoomComponent,
    props: {
      type: 'elevator',
      xdim: 3,
      ydim: 7,
    },
  }));

