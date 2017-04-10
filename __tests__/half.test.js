// @flow

import checkHexColor from '../src/index';

test('hexColor', () => {
  expect(checkHexColor('#fff')).toBe('#fff');
});
