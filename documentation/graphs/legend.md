# Building the Legend Component in Oliver

> Last updated May 7th, 2020


The legend component will primarily be used in the histogram and line graphs, but can possibly be extended in future iterations of Oliver.

___

## Functions

There are two functions within the `Legend` component that are needed to assist d3 in creating the legend. 

|Function Name|Purpose|
|---|---|
|`createLegendItems()`|This function uses the values passed into the component via props and creates an array of strings that are used to create the legend text. |
|`color`|Actually an expression. It uses the `legendItems` local state value and a color theme to add color to the legend text|

## Component Architecture

The legend is created with three elements:

- A title
- Dots or rectangles as icons for legend text
- Text for the legend

The below elements are made with D3 rather than React. This leaves rendering logic to React and graph generating logic to D3.

### Title

The title is what the graph is called. Does not have to match the title of the button on the dashboard that selected the graph.

### Icons

The icons are circles or rectangles which should be same color as the line that the text corresponds to.

### Text

The text is what a line represents. 


