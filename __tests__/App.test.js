import React from 'react';
import renderer from 'react-test-renderer';

import App from '../client/components/App';

describe('App', () => {
  it('Renders the app correctly', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
