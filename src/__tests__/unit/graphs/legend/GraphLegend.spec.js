import React from 'react';
import Legend from '../../../../components/graphs/line_graph/Legend';
import renderer from 'react-test-renderer';

describe('Graph Legend', () => {
  describe('when receiving one data source', () => {
    fit('returns an array with one entry', () => {
      console.log(Legend.createLegendItems())
    });
  });
});