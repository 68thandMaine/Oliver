# Creating Line Graphs and Histograms with d3

**Disclaimer:** This document's primary purpose is to assemble knowledge, but not present it in a public way.

___

## Initial Thoughts

There are several similarities between the line graph and the histogram which present opportunities to reuse components. For example, both graphs use an x and y axis to plot points - so I shouldn't have to write axis components for both graphs.

___

[Jump to Line Graph](#line-graph)
[Jump to Histogram](#histogram)

# Shared Componnets

## Axes

## Axis

___

# Line Graph

The parent component for the line graph contains the following constants:

- svg dimensions and sizing properties.
- the x scale and y scale values
- the values sent to the legend

Oliver relies on React to render `<svg>` and `<g>` elements in the function return to control the size of the graph.  THe scales are created with D3 functions.

The following components are wrapped with in the `<g>`:

### Axes

Shared component. See above.

### Line

Given the **scales, svg dimensions, data, line color, and the maximum value** as props. When the Line component mounts, the colors of the lines are set using the D3 `scaleOrdinal()` method to iterate over a map of the line color values. These values match the values given to the legend so that the colors will be associated correctly. The range of the color is an array of color codes. 

Once the colors are established, the data that is passed into the Line is iterated over, and the values that should be plotted are exposed and passed to the `renderLine()` function. This is then followed by applying styels to the lines.

The Line component uses D3 to do the math to draw the lines, and React to render the elements for D3 to work on.

### Legend

The Legend component is given an array of keys which are used in the `componentDidMount()` life cycle method by D3 to render dots, text, and labels for the graph.

___

# Histogram

## Bars