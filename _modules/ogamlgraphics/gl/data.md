---
modulename: Data
prefix: OgamlGraphics.GL
abstract: Low-level wrapper around arrays of GL data
---

This module has the internal representations of openGL data.

### Data Types

{% capture listing %}
type float_32
{% endcapture %}
{% include docelem.html listing=listing description='Type of floats stored in data' %}

{% capture listing %}
type int_32
{% endcapture %}
{% include docelem.html listing=listing description='Type of ints stored in data' %}

{% capture listing %}
type ('a,'b) t
{% endcapture %}
{% capture description %}
Type of data using caml type {% include inline-ocaml code="'a" %} and storing
type {% include inline-ocaml code="'b" %}.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Creating Data

{% capture listing %}
val create_int : int -> (int32, int_32) t
{% endcapture %}
{% capture description %}
Creates some data, the integer must be the expected size.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val create_float : int -> (float, float_32) t
{% endcapture %}
{% capture description %}
Creates some data, the integer must be the expected size.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Modifying Data

{% capture listing %}
val add_3f : (float, float_32) t -> OgamlMath.Vector3f.t -> unit
{% endcapture %}
{% capture description %}
Adds a {% include inline-ocaml code="vector3f" %} to the data.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector3f" %}

{% capture listing %}
val add_color : (float, float_32) t -> Color.t -> unit
{% endcapture %}
{% capture description %}
Adds a color to the data.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlGraphics.Color" %}

{% capture listing %}
val add_2f : (float, float_32) t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Adds two floats to the data.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector2f" %}

{% capture listing %}
val add_int : (int32, int_32) t -> int -> unit
{% endcapture %}
{% capture description %}
Adds an int to the data.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val add_int32 : (int32, int_32) t -> int32 -> unit
{% endcapture %}
{% capture description %}
Adds an int32 to the data.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Reading Data

{% capture listing %}
val of_matrix : OgamlMath.Matrix3D.t -> (float, float_32) t
{% endcapture %}
{% capture description %}
Returns the data associated to a matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Matrix3D" %}

{% capture listing %}
val length : ('a, 'b) t -> int
{% endcapture %}
{% capture description %}
Returns the length of some data.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val get : ('a, 'b) t -> int -> 'a
{% endcapture %}
{% capture description %}
Returns the data at position i (debug only).
{% endcapture %}
{% include docelem.html listing=listing description=description %}
