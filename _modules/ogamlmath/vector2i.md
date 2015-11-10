---
modulename: Vector2i
prefix: OgamlMath
abstract: Operation on vectors of 2 integers 
---

This module defines the vector2i type and various operations on it.

### Vector Operations

{% capture listing %}
type t = {x : int; y : int}
{% endcapture %}
{% capture description %}
Type of immutable vectors of 2 integers
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val unit_x : t
{% endcapture %}
{% capture description %}
Unit x vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val unit_y : t
{% endcapture %}
{% capture description %}
Unit y vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val add : t -> t -> t
{% endcapture %}
{% capture description %}
Adds two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val sub : t -> t -> t
{% endcapture %}
{% capture description %}
sub u v computes the vector u-v.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val prop : int -> t -> t
{% endcapture %}
{% capture description %}
Multiplies a vector by an integer scalar.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val div : int -> t -> t
{% endcapture %}
{% capture description %}
Divides a vector by a scalar. The result is rounded down.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val dot : t -> t -> int
{% endcapture %}
{% capture description %}
Computes the dot product of two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val det : t -> t -> int
{% endcapture %}
{% capture description %}
Computes the determinant of two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val angle : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the directed angle between two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val squared_norm : t -> int
{% endcapture %}
{% capture description %}
Computes the squared norm of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Compute the norm of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val clamp : t -> t -> t -> t
{% endcapture %}
{% capture description %}
clamp v a b returns the vector u whose coordinates 
are the coordinates of v clamped between the coordinates of a and b.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val max : t -> int
{% endcapture %}
{% capture description %}
Returns the maximal coordinate of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val min : t -> int
{% endcapture %}
{% capture description %}
Returns the minimal coordinate of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Returns a pretty-printed string.
{% endcapture %}
{% include docelem.html listing=listing description=description %}


