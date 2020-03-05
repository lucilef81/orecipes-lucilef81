import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Home from 'src/components/Home';
import Card from 'src/components/Card';

describe('Composant Home', () => {
  const recipes = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const wrapper = shallow(<Home recipes={{ recipes }} title='lorem ipsum' />);
  it('render 5 Cards when 5 recipes given', () => {
    expect(wrapper.find(Card)).to.have.lengthOf(5);
  });
  it('contains an element with .cards class', () => {
    expect(wrapper.find('.cards')).to.have.lengthOf(1);
  });
});
