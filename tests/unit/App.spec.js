/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = shallow(<IndexPage />);
      expect(wrap.find('div').first().text()).toBe('Hello Next.js!');
    });
  });
});
