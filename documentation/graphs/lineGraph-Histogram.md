# Creating Line Graphs with d3

**Disclaimer:** This document's primay purpose is to assemble knowledge, but not present it in a public way.

___

## Initial Thoughts

There are several similarities between the line graph and the histgram which present opportunities to reuse components. For example, both graphs use an x and y axis to plot points - so I shouldn't have to write axis components for both graphs.

___

## Components

- [`LineGraph.jsx`](#linegraph.jsx)
- [`Axes.jsx`](#axes.jsx)

### `LineGraph.jsx`

The LineGraph component will render a svg element with the following properties:

- width
- height

This is consistent with the Histogram.

While the tutorial I am following uses the `timeScale()` to build the x axis, I am going to attempt to use the `scaleBand()` method that was written for the histogram's xaxis.

### `Axes.jsx`