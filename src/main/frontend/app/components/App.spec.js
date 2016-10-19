import jsdom from 'jsdom-global';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from './common/Header';

jsdom();

describe('App', () => {
    it('renders the header', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.contains(<Header />)).to.equal(true);
    });
});
