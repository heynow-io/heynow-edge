import jsdom from 'jsdom-global';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

jsdom();

describe('App', () => {
    it('renders the title', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.contains(<h1>heynow-edge</h1>)).to.equal(true);
    });
});
