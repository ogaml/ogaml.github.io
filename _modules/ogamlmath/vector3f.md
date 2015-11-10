---
modulename: Vector3f
prefix: OgamlMath
abstract: Operation on vectors of 3 floats
---

This module defines the vector3f type and various operations on it.

### 3-floats vectors

{% capture listing %}
type t = {x : float; y : float; z : float}
{% endcapture %}
{% capture description %}
Type of immutable vectors of 3 floats.
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
val unit_z : t
{% endcapture %}
{% capture description %}
Unit z vector.
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
sub t1 t2 computes the vector t1 - t2.
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
val floor : t -> Vector3i.t
{% endcapture %}
{% capture description %}
Converts a floating-point vector to an integer vector.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector3i" %}

{% capture listing %}
val from_int : Vector3i.t -> t
{% endcapture %}
{% capture description %}
Converts an integer vector to a floating-point vector.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector3i" %}

{% capture listing %}
val dot : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the dot product of two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val cross : t -> t -> t
{% endcapture %}
{% capture description %}
Computes the cross product of two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val angle : t -> t -> float
{% endcapture %}
{% capture description %}
Returns the oriented angle between two vectors.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val squared_norm : t -> float
{% endcapture %}
{% capture description %}
Returns the squared (L2-)norm of a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Returns the (L2-)norm of a vector.
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
direction p1 p2 returns the normalized direction vector going from p1 to p2.
Equivalent to normalize (sub v2 v1).
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val endpoint : t -> t -> float -> t
{% endcapture %}
{% capture description %}
endpoint p v t returns the point p+tv.
{% endcapture %}
{% include docelem.html listing=listing description=description %}


