import * as React from 'react';
import renderer from 'react-test-renderer';
import App from '../../app';
import IndexPage from './';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <App>
        <IndexPage />
      </App>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
