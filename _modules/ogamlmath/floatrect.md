---
modulename: FloatRect 
prefix: OgamlMath
abstract: Operations on float rectangles
---


This module defines the FloatRect type and various operations on it.
{% capture listing %}
type t = {x : float; y : float; width : float; height : float}
{% endcapture %}
{% capture description %}
Type of immutable rectangles of floats
{% endcapture %}
{% include add_value.html value="x : float" %}
{% include add_value.html value="y : float" %}
{% include add_value.html value="width : float" %}
{% include add_value.html value="height : float" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val create : Vector2f.t -> Vector2f.t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="create position size" %} creates a rectangle at position {% include inline-ocaml.html code="position" %} and
 of size {% include inline-ocaml.html code="size" %}<br/>
 The rectangle is created such that {% include inline-ocaml.html code="width" %} and {% include inline-ocaml.html code="height" %} are {% include inline-ocaml.html code=">= 0" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_from_points : Vector2f.t -> Vector2f.t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="create_from_points p1 p2" %} creates a rectangle going from {% include inline-ocaml.html code="p1" %} to {% include inline-ocaml.html code="p2" %} 
 such that {% include inline-ocaml.html code="width" %} and {% include inline-ocaml.html code="height" %} are {% include inline-ocaml.html code=">= 0" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val one : t
{% endcapture %}
{% capture description %}
Unit rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val position : t -> Vector2f.t
{% endcapture %}
{% capture description %}
Returns the position of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val corner : t -> Vector2f.t
{% endcapture %}
{% capture description %}
Returns the top corner (aka position + size) of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val size : t -> Vector2f.t
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
val normalize : t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="normalize rect" %} returns a rectangle equivalent to {% include inline-ocaml.html code="rect" %} but with
positive {% include inline-ocaml.html code="width" %} and {% include inline-ocaml.html code="height" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val area : t -> float
{% endcapture %}
{% capture description %}
Returns the area of a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val scale : t -> Vector2f.t -> t
{% endcapture %}
{% capture description %}
Scales a rectangle (the result is normalized)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translate : t -> Vector2f.t -> t
{% endcapture %}
{% capture description %}
Translates a rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val from_int : IntRect.t -> t
{% endcapture %}
{% capture description %}
Converts an integer rectangle to a float rectangle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val floor : t -> IntRect.t
{% endcapture %}
{% capture description %}
Converts a float rectangle to an integer rectangle
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
val contains : t -> Vector2f.t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="contains t p" %} returns {% include inline-ocaml.html code="true" %} iff the rectangle {% include inline-ocaml.html code="t" %} contains {% include inline-ocaml.html code="p" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

