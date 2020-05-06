import React from 'react';
import { shallow } from 'enzyme';
import Legend from '../../../../components/graphs/line_graph/Legend';

describe('Graph Legend', () => {
  describe('when receiving one data source', () => {
    fit('returns an array with one entry', () => {
      console.log(shallow(<Legend />))
    });
  });
});