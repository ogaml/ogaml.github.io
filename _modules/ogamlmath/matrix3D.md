---
modulename: Matrix3D
prefix: OgamlMath
abstract: provides easy creation and manipulation of rendering matrices
---

Optimized operations on 3D (4x4) float matrices.

### Creating Matrices

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of 4x4 matrices stored in a flat column major array.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val zero : unit -> t
{% endcapture %}
{% capture description %}
Zero matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val identity : unit -> t
{% endcapture %}
{% capture description %}
Identity matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Temporary (this is a troll)

{% capture listing %}
val to_bigarray : t -> (float, Bigarray.float32_elt, Bigarray.c_layout) Bigarray.Array1.t
{% endcapture %}
{% capture description %}
Temporary?
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### To be continued...
