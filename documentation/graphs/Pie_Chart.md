# Pie Chart and Donut Charts with d3

**Disclaimer:** This document's primay purpose is to assemble knowledge, but not present it in a public way.

Most of this document was copied from here:

https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arcs

___

From the tutorials that I've found it seems like I will need to understand the following to make donut or pie charts:

- `d3.scaleOrdinal()` This can be used to create colors
- `d3.pie()` 
- `d3.arc()`

___

## d3 Functions

### `d3.scaleOrdinal()`

This method constructs a new **ordinal scale** with the given domain and range. It takes a domain and a range, which can be passed into the parentheses, or chained off as such:

```javascript
d3.ordinalScale().domain(data).range(data)
```

Chaining will provide more control over the options being provided to the ordinal scale, so I will use this format in Oliver.

#### What is an Ordinal Scale

Ordinal Scales are those with which the order of the values are important, but the differences between the values is not known. To make it more simple, they attempt to quantify feelings. What's the difference between happy and very happy? In this regard - ordinal scales are typically measures of non-numeric concepts*.

> *https://www.mymarketresearchmethods.com/types-of-data-nominal-ordinal-interval-ratio/

The d3 documentation states that ordinal scales have discrete domains and ranges - so they have uniuqe values. **Ordinal scales are often used to map categories to colors or determine the horizontal positions of colums in a histogram***

> https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleOrdinal

___

### `d3.pie()`

This function returns a new pie generator, nut can be given settings via chains. Chaining values to the `pie()` function, will return the arc components of the chart.

Each value in the array of data that is given to the `pie()` function is returned in the same order with the following properties:

- data
- value
- index
- startAngle
- endAngle
- padAngle

#### `pie()` methods of interest

- `.value()`: If this is specified, set the value accessor to the pie generator to determine the arcs each data will represent. 

### `d3.arc()`

The arc function produces a circular or annular sector. Basically a slice of a pie or donut chart. This function has several methods that can be used to override defaults:

- `innerRadius`
- `outerRadius`
- `startAngle`
- `endAngle`

### `d3.centroid()`

Centroids comnpute the midpoint of the center line of the arc. It is defined as `(startAngle + endAngle) / 2 and (innerRadius + outerRadius) / 2`

___

## Tutorial Implemenation Flow:

1. Create max values for size 
    - width 
    - height
    - margin
    - radius
2. Create colors with scale ordinal. The domain is the data object. <- it's an  obejct!!
3. Create the pie chart and use the `value()` function to give it the values for the data object.


`- useEffect()`

4. Dynamically create the svg with the width and hegith from **step 1**.
5. Crete the sections fo the graph with the data, and specifying the color options.

___