---
modulename: Vector3fs 
prefix: OgamlMath
abstract: Operations on immutable vectors of 3 floats represented in spherical coordinates 
---


This module defines the vector3fs type and various operations on it. 
{% capture listing %}
exception Vector3fs_exception of string
{% endcapture %}
{% capture description %}
Raised when an error occurs (usually a division by zero) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

### Vector operations 

{% capture listing %}
type t = {r : float; t : float; p : float}
{% endcapture %}
{% capture description %}
Type of immutable vectors of 3 floats represented in spherical coordinates 
{% endcapture %}
{% include add_value.html value="r : float" desc=" Signed radius " %}
{% include add_value.html value="t : float" desc=" Longitude (theta). A longitude of 0 corresponds to a vector pointing towards positive Z. " %}
{% include add_value.html value="p : float" desc=" Latitude (phi). A latitude of 0 corresponds to a vector pointing towards the equator, and a latitude of pi/2 corresponds to a vector pointing towards the north pole (positive Y). " %}

{% include docelem.html listing=listing description=description struct_values=values %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val unit_x : t
{% endcapture %}
{% capture description %}
Unit x vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val unit_y : t
{% endcapture %}
{% capture description %}
Unit y vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val unit_z : t
{% endcapture %}
{% capture description %}
Unit z vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val prop : float -> t -> t
{% endcapture %}
{% capture description %}
Multiplies a vector by a scalar 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val div : float -> t -> t
{% endcapture %}
{% capture description %}
Divides a vector by a scalar. Raises Vector3fs_exception if the scalar is zero. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val to_cartesian : t -> Vector3f.t
{% endcapture %}
{% capture description %}
Converts a vector represented in spherical coordinates to a vector represented in cartesian coordinates 
 f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val from_cartesian : Vector3f.t -> t
{% endcapture %}
{% capture description %}
Converts a vector represented in cartesian coordinates to a vector represented in spherical coordinates 
 f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Computes the norm of a vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val normalize : t -> t
{% endcapture %}
{% capture description %}
Normalizes a vector. Raises Vector3fs_exception if the vector is zero. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Returns a pretty-printed string (not for serialization) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

