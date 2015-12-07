---
modulename: Quaternion 
prefix: OgamlMath
abstract: Operations on immutable quaternions
---


This module defines the quaternion type and various operations on it
{% capture listing %}
exception Quaternion_exception of string
{% endcapture %}
{% capture description %}
Raised when an error occurs (usually a division by zero)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type t = {r : float; i : float; j : float; k : float}
{% endcapture %}
{% capture description %}
Type of quaternions
{% endcapture %}
{% include add_value.html value="r : float" %}
{% include add_value.html value="i : float" %}
{% include add_value.html value="j : float" %}
{% include add_value.html value="k : float" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero quaternion
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val one : t
{% endcapture %}
{% capture description %}
Unit (real) quaternion
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val real : float -> t
{% endcapture %}
{% capture description %}
Returns a real number as a quaternion
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val add : t -> t -> t
{% endcapture %}
{% capture description %}
Adds two quaternions
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val times : t -> t -> t
{% endcapture %}
{% capture description %}
Multiplies two quaternions
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val prop : float -> t -> t
{% endcapture %}
{% capture description %}
Multiplies a quaternion by a scalar
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val sub : t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="sub q1 q2" %} returns the quaternion {% include inline-ocaml.html code="q1 - q2" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val rotation : Vector3f.t -> float -> t
{% endcapture %}
{% capture description %}
Returns the quaternion representing a rotation given by an axis and an angle.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector3f" %}

{% capture listing %}
val conj : t -> t
{% endcapture %}
{% capture description %}
Returns the conjugate of a quaternion
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val inverse : t -> t
{% endcapture %}
{% capture description %}
Returns the inverse of a quaternion. Raises Quaternion_exception if the quaternion is zero
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val squared_norm : t -> float
{% endcapture %}
{% capture description %}
Returns the squared norm of a quaternion
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Returns the norm of a quaternion
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val normalize : t -> t
{% endcapture %}
{% capture description %}
Normalizes a quaternion. Raises Quaternion_exception if the quaternion is zero
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

