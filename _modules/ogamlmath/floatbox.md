---
modulename: FloatBox 
prefix: OgamlMath
abstract: Operations on float boxes
---


This module defines the FloatBox type and various operations on it.
{% capture listing %}
type t = {x : float; y : float; z : float; width : float; height : float; depth : float}
{% endcapture %}
{% capture description %}
Type of immutable boxes of floats
{% endcapture %}
{% include add_value.html value="x : float" %}
{% include add_value.html value="y : float" %}
{% include add_value.html value="z : float" %}
{% include add_value.html value="width : float" %}
{% include add_value.html value="height : float" %}
{% include add_value.html value="depth : float" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val create : Vector3f.t -> Vector3f.t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="create position size" %} creates a box at position {% include inline-ocaml.html code="position" %} and
 of size {% include inline-ocaml.html code="size" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_from_points : Vector3f.t -> Vector3f.t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="create_from_points p1 p2" %} creates a box going from {% include inline-ocaml.html code="p1" %} to {% include inline-ocaml.html code="p2" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val one : t
{% endcapture %}
{% capture description %}
Unit box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val position : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Returns the position of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val abs_position : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Returns the absolute position of a box, that is the point of minimal
 coordinates
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val corner : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Returns the top corner (aka position + size) of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val size : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Returns the size of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val abs_size : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Returnrs the absolute size of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val center : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Returns the center of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val normalize : t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="normalize box" %} returns a box equivalent to {% include inline-ocaml.html code="box" %} but with
positive size
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val volume : t -> float
{% endcapture %}
{% capture description %}
Returns the volume of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val scale : t -> Vector3f.t -> t
{% endcapture %}
{% capture description %}
Scales a box (the result is normalized)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translate : t -> Vector3f.t -> t
{% endcapture %}
{% capture description %}
Translates a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val from_int : IntBox.t -> t
{% endcapture %}
{% capture description %}
Converts an integer box to a float box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val floor : t -> IntBox.t
{% endcapture %}
{% capture description %}
Converts a float box to an integer box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val intersects : t -> t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="intersects t1 t2" %} returns {% include inline-ocaml.html code="true" %} iff the boxes {% include inline-ocaml.html code="t1" %} and {% include inline-ocaml.html code="t2" %} overlap
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val contains : t -> Vector3f.t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="contains t p" %} returns {% include inline-ocaml.html code="true" %} iff the box {% include inline-ocaml.html code="t" %} contains {% include inline-ocaml.html code="p" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

