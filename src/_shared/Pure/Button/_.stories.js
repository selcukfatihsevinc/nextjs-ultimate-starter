import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from 'antd/lib/button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('Default', () => <Button>{text('button', 'Hello World')}</Button>)
  .add('Primary', () => <Button type="primary">{text('button', 'Hello World')}</Button>);
