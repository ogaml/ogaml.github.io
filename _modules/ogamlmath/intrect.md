---
modulename: IntRect 
prefix: OgamlMath
abstract: Operations on integer rectangles
---


This module defines the IntRect type and various operations on it.
{% capture listing %}
type t = {x : int; y : int; width : int; height : int}
{% endcapture %}
{% capture description %}
Type of immutable rectangles of integers
{% endcapture %}
{% include add_value.html value="x : int" %}
{% include add_value.html value="y : int" %}
{% include add_value.html value="width : int" %}
{% include add_value.html value="height : int" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val create : Vector2i.t -> Vector2i.t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="create position size" %} creates a rectangle at position {% include inline-ocaml.html code="position" %} and
 of size {% include inline-ocaml.html code="size" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val corner : t -> Vector2i.t
{% endcapture %}
{% capture description %}
Returns the position of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val position : t -> Vector2i.t
{% endcapture %}
{% capture description %}
Alias for corner
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val size : t -> Vector2i.t
{% endcapture %}
{% capture description %}
Returns the size of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val center : t -> Vector2f.t
{% endcapture %}
{% capture description %}
Returns the center of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val area : t -> int
{% endcapture %}
{% capture description %}
Returns the area of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val scale : t -> Vector2i.t -> t
{% endcapture %}
{% capture description %}
Scales a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translate : t -> Vector2i.t -> t
{% endcapture %}
{% capture description %}
Translates a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val intersect : t -> t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="intersect t1 t2" %} returns {% include inline-ocaml.html code="true" %} iff {% include inline-ocaml.html code="t1" %} and {% include inline-ocaml.html code="t2" %} overlap
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val contains : t -> Vector2i.t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="contains t p" %} returns {% include inline-ocaml.html code="true" %} iff the rectangle {% include inline-ocaml.html code="t" %} contains {% include inline-ocaml.html code="p" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

