---
modulename: Quaternion
prefix: OgamlMath
abstract: Operations on quaternions
---

This module defines the quaternion type and various operations on it.

### Quaternions

{% capture listing %}
type t = {r: float; i: float; j: float; k:float}
{% endcapture %}
{% capture description %}
Type of immutable quaternions.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero quaternion (r = i = j = k = 0.0).
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val one : t
{% endcapture %}
{% capture description %}
Unit quaternion (r = 1.0, i = j = k = 0.0).
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val real : float -> t
{% endcapture %}
{% capture description %}
Returns a real number as a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val add : t -> t -> t
{% endcapture %}
{% capture description %}
Adds two quaternions.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val times : t -> t -> t
{% endcapture %}
{% capture description %}
Computes the product of two quaternions.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val prop : float -> t -> t
{% endcapture %}
{% capture description %}
Multiplies a quaternion by a real.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val sub : t -> t -> t
{% endcapture %}
{% capture description %}
sub q1 q2 computes the quaternion q1 - q2.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val rotation : Vector3f.t -> float -> t
{% endcapture %}
{% capture description %}
Returns a quaternion representing a rotation given by an axis and an angle.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlMath.Vector3f" %}

{% capture listing %}
val conj : t -> t
{% endcapture %}
{% capture description %}
Returns the conjugate of a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val inverse : t -> t
{% endcapture %}
{% capture description %}
Returns the inverse of a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val squared_norm : t -> float
{% endcapture %}
{% capture description %}
Returns the squared norm of a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Returns the norm of a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val normalize : t -> t
{% endcapture %}
{% capture description %}
Normalizes a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}


