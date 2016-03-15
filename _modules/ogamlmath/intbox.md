---
modulename: IntBox 
prefix: OgamlMath
abstract: Operations on integer boxes
---


This module defines the IntBox type and various operations on it.
{% capture listing %}
type t = {x : int; y : int; z : int; width : int; height : int; depth : int}
{% endcapture %}
{% capture description %}
Type of immutable boxes of integers
{% endcapture %}
{% include add_value.html value="x : int" %}
{% include add_value.html value="y : int" %}
{% include add_value.html value="z : int" %}
{% include add_value.html value="width : int" %}
{% include add_value.html value="height : int" %}
{% include add_value.html value="depth : int" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val create : Vector3i.t -> Vector3i.t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="create position size" %} creates a box at position {% include inline-ocaml.html code="position" %} and
 of size {% include inline-ocaml.html code="size" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_from_points : Vector3i.t -> Vector3i.t -> t
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
val position : t -> Vector3i.t
{% endcapture %}
{% capture description %}
Returns the position of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val abs_position : t -> Vector3i.t
{% endcapture %}
{% capture description %}
Returns the absolute position of a box, that is the point of minimal
 coordinates
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val corner : t -> Vector3i.t
{% endcapture %}
{% capture description %}
Returns the top corner (aka position + size) of a box
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
val size : t -> Vector3i.t
{% endcapture %}
{% capture description %}
Returns the size of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val abs_size : t -> Vector3i.t
{% endcapture %}
{% capture description %}
Returns the absolute size of a box
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
val volume : t -> int
{% endcapture %}
{% capture description %}
Returns the volume of a box
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val scale : t -> Vector3i.t -> t
{% endcapture %}
{% capture description %}
Scales a box (the result is normalized)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translate : t -> Vector3i.t -> t
{% endcapture %}
{% capture description %}
Translates a box
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
val contains : ?strict:bool -> t -> Vector3i.t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="contains t p" %} returns {% include inline-ocaml.html code="true" %} iff the box {% include inline-ocaml.html code="t" %} contains {% include inline-ocaml.html code="p" %} <br/>
 if {% include inline-ocaml.html code="strict" %} is set to {% include inline-ocaml.html code="true" %} then upper bounds are not included ({% include inline-ocaml.html code="false" %} by default)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val iter : ?strict:bool -> t -> (Vector3i.t -> unit) -> unit
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="iter t f" %} iterates through all points of the box {% include inline-ocaml.html code="t" %}
 
 if {% include inline-ocaml.html code="strict" %} is set to {% include inline-ocaml.html code="false" %} then upper bounds are included ({% include inline-ocaml.html code="true" %} by default)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val fold : ?strict:bool -> t -> (Vector3i.t -> 'a -> 'a) -> 'a -> 'a
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="fold t f u" %} folds through all points of the box {% include inline-ocaml.html code="t" %} 
 
 if {% include inline-ocaml.html code="strict" %} is set to {% include inline-ocaml.html code="false" %} then upper bounds are included ({% include inline-ocaml.html code="true" %} by default)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

