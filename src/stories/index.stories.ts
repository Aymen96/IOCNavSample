import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { BoardComponent } from '../app/board/board.component';
import { Welcome } from '@storybook/angular/demo';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Board', module).add('board', () => ({
  component: BoardComponent,
  props: {},
}));
