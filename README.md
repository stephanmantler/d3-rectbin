# d3-rectbin

Rectangular binning for 2d histogram.
 

## API Reference

The **d3.rectbin** plugin implements **rectangular binning**, which is useful for aggregating data into a more coarse representation suitable for display. Rather than displaying a scatterplot with tens of thousands of points, you can bin points into gridded hexagons, and then display the distribution using color or area. This plugin was inspired by and adapted from [earlier work by Fabio Nelli on 2d histograms](http://www.meccanismocomplesso.org/en/d3-histogram-2d-rectangular-binning/).

<a name="rectbin" href="#rectbin">#</a> d3.<b>rectbin</b>()

Constructs a new default rectbin layout.

<a name="rectbin" href="#_rectbin">#</a> <b>rectbin</b>(<i>points</i>)

Evaluates the rectbin layout on the specified array of *points*, returning an array of rectangular *bins*. Each bin is an array containing the bin’s points, as well as some additional properties:

* x - the x-coordinate of the left side of the associated bin’s rectangle
* y - the y-coordinate of the top side of the associated bin’s rectangle

Bins that are empty are not omitted. The origin bin at ⟨0,0⟩ is in the top-left.



<a name="x" href="#x">#</a> rectbin.<b>x</b>([<i>accessor</i>])

Sets or gets the *x*-accessor function for the rectbin layout. If *accessor* is specified, sets the *x*-accessor function and returns the rectbin layout; if *accessor* is not specified, returns the current *x*-accessor function, which defaults to `function(d) { return d[0]; }`.

<a name="y" href="#y">#</a> rectbin.<b>y</b>([<i>accessor</i>])

Sets or gets the *y*-accessor function for the rectbin layout. If *accessor* is specified, sets the *y*-accessor function and returns the rectbin layout; if *accessor* is not specified, returns the current *y*-accessor function, which defaults to `function(d) { return d[1]; }`.

<a href="dx" href="#dx">#</a> rectbin.<b>dx</b>([<i>dx</i>])

If *dx* is specified, sets the horizontal bin size to the specified value. If *dx* is not specified, returns the current value, which defaults to 0.1.

<a href="dy" href="#dy">#</a> rectbin.<b>dy</b>([<i>dy</i>])

If *dy* is specified, sets the vertical bin size to the specified value. If *dy* is not specified, returns the current value, which defaults to 0.1.
