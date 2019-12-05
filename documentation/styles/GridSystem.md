# Creating Oliver's Grid System

> Created following [this tutorial](https://www.toptal.com/sass/css3-flexbox-sass-grid-tutorial).

To create the grid system I will use [Flexbox](https://jonibologna.com/blog/flexbox-cheatsheet) and follow the [BEM naming conventions](http://getbem.com/naming/) for class names.

BEM conventions add information about an element and it's context:

- **Block**: encapsulates a standalone entity.. `.block`.

- **Elements**: parts of a block and have no standalone meaning. `.block__elem`.

-**Modifiers**: like flags on blocks or elements. `.block--mod`.

___

## Table of Contents

[Creating Containers](#creating-containers)

[Creating Rows](#creating-rows)

[Creating Columns](#creating-columns)

[Creating Screen Widht-Dependent Columns](#creating-screen-width-dependent-columns)

___

### Creating Containers

Containes are the outermost element in the grid. There will be two types of containers:

1. `.container`

2. `.container--fluid`
    - note the BEM practice of naming classes `.block--mod` for this element.

The behavior of the container is defined by being 100% of the width below a certain point. 

#### In this example the width is 768px and there are equal margins to the left and right

```scss
$grid__bp-md: 768;

.container {
  max-width: $grid__bp-md * 1px;
  margin: 0 auto;
}
```

The fluid container **always** has 100% width. The easiest way to take advantage of **scss** and creating a fluid container is by overriding the `.container` properties with a BEM modifier.

#### Note that the modifier is included inside the parent element as per scss rules

```scss
.container {
  max-width: $grid__bp-md *1px;
  margin: 0 auto;
  &--fluid {
    margin: 0;
    max-width: 100%;
  }
}
```

___

### Creating Rows

Rows organzie content horizontally. Elements within a row will wrap to prevent overflowwing and will have a 100% width. All will be acomplished using **flexbox**.

Since rows are within a `.container`, they need to be an scss element wrapped inside the `.container` class.

```scss
// BEM Block
.container {
  max-width: $grid__bp-md *1px;
  margin: 0 auto;
  // BEM Modifier
  &--fluid {
    margin: 0;
    max-width: 100%;
  }
  // BEM Element
  &__row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
```

Now all children within the row will take up the full space, and wrap if their sum is greater than the width.

___

### Creating Columns

Columns are where the content of the site can be found. Oliver will use a 12 column layout which means a row can be divided into one or up to twelve parts.

Designing the column system requires some considerations. For example how do we determine the width of each column.

| Number of columns in a row | Width |
| --- | --- |
| 1 | 100% |
| 2 | 50% |
| 3 | 33% |
| 4 | 25% |
| 5 | 20% |
| 6 | 16% |
| 7 | 14% |
| 8 | 12.5% |
| 9 | 11% |
| 10 | 10% |
| 11 | 0% |
| 12 | 8.33% | 

Flexbox can accomplish this with the `flex-basis` property. This property can help set the width by accepting the same values as the `width` and `height` property PLUS `content`.

To implement this functionality simply with scss we can use a loop to iterate through a number that is used to caluclate the number of cols to place in a row.

```scss
$grid__cols: 12;

@for $i from 1 through $grid__cols {
  .col-#{$i} {
    flex-basis: ( 100 / ( $grid__cols / $i ) ) * 1%;
  }
}
```

In SCSS knows to evaulate the number of columns based off the number provided in the className.

___

### Creating Screen Width-Dependent Columns

To create responsive elemnts the grid system will use breakpoints that are dependent on the width of thh window.

#### This will create a Bootstrap-like naming convention such as

**`.col-md-12`**

Image that you have an element that displays elements in a neat row on desktop and are stacked when it's a column. This can be acheived by giving a container two class names using the different breakpoints as a rule.