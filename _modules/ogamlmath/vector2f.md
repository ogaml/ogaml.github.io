---
modulename: Vector2f
prefix: OgamlMath
abstract: Operation on vectors of 2 floats
---

This module defines the vector2f type and various operations on it.

### Vector Operations

{% capture listing %}
type t = {x : float; y : float}
{% endcapture %}
{% capture description %}
Type of immutable vectors of 2 floats.
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
val prop : float -> t -> t
{% endcapture %}
{% capture description %}
Multiplies a vector by a scalar.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val div : float -> t -> t
{% endcapture %}
{% capture description %}
Divides a vector by a scalar.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val floor : t -> Vector2i.t
{% endcapture %}
{% capture description %}
Converts a floating-point vector to an integer vector.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector2i" %}

{% capture listing %}
val from_int : Vector2i.t -> t
{% endcapture %}
{% capture description %}
Converts an integer vector to a floating-point vector.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector2i" %}

{% capture listing %}
val dot : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the dot product of two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val det : t -> t -> float
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
val squared_norm : t -> float
{% endcapture %}
{% capture description %}
Computes the squared norm of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Computes the norm of a vector.
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
val max : t -> float
{% endcapture %}
{% capture description %}
Returns the maximal coordinate of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val min : t -> float
{% endcapture %}
{% capture description %}
Returns the minimal coordinate of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val normalize : t -> t
{% endcapture %}
{% capture description %}
Normalizes a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Returns a pretty-printed string.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val direction : t -> t -> t
{% endcapture %}
{% capture description %}
direction a b returns a normalized vector going from a to b.
Equivalent to normalize (sub b a).
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val endpoint : t -> t -> float -> t
{% endcapture %}
{% capture description %}
endpoint p u t computes the point p+tu.
{% endcapture %}
{% include docelem.html listing=listing description=description %}


