---
modulename: Vector3i 
prefix: OgamlMath
abstract: Operations on immutable vectors of 3 ints
---


This module defines the vector3i type and various operations on it.
{% capture listing %}
exception Vector3i_exception of string
{% endcapture %}
{% capture description %}
Raised when an error occurs (usually a division by zero)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Vector operations

{% capture listing %}
type t = {x : int; y : int; z : int}
{% endcapture %}
{% capture description %}
Type of immutable vectors of 3 ints
{% endcapture %}
{% include add_value.html value="x : int" %}
{% include add_value.html value="y : int" %}
{% include add_value.html value="z : int" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val zero : t
{% endcapture %}
{% capture description %}
Zero vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val unit_x : t
{% endcapture %}
{% capture description %}
Unit x vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val unit_y : t
{% endcapture %}
{% capture description %}
Unit y vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val unit_z : t
{% endcapture %}
{% capture description %}
Unit z vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val add : t -> t -> t
{% endcapture %}
{% capture description %}
Adds two vectors together
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val sub : t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="sub u v" %} computes the vector {% include inline-ocaml.html code="u - v" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val prop : int -> t -> t
{% endcapture %}
{% capture description %}
Multiplies a vector by a scalar
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val div : int -> t -> t
{% endcapture %}
{% capture description %}
Divides a vector by a scalar. Raises Vector3i_exception if the scalar is zero.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val project : t -> Vector2i.t
{% endcapture %}
{% capture description %}
Projects a vector on the plane {% include inline-ocaml.html code="z = 0" %}
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2i" %}

{% capture listing %}
val lift : Vector2i.t -> t
{% endcapture %}
{% capture description %}
Lifts a 2D vector in the 3D space by setting {% include inline-ocaml.html code="z = 0" %}
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2i" %}

{% capture listing %}
val dot : t -> t -> int
{% endcapture %}
{% capture description %}
Computes the dot product of two vectors
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val cross : t -> t -> t
{% endcapture %}
{% capture description %}
Computes the cross product of two vectors
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val angle : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the angle (in radians) between two vectors
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val squared_norm : t -> int
{% endcapture %}
{% capture description %}
Computes the squared norm of a vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val norm : t -> float
{% endcapture %}
{% capture description %}
Computes the norm of a vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val clamp : t -> t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="clamp v a b" %} returns the vector whose coordinates are the coordinates of {% include inline-ocaml.html code="v" %}
 clamped between the coordinates of {% include inline-ocaml.html code="a" %} and {% include inline-ocaml.html code="b" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map : t -> (int -> int) -> t
{% endcapture %}
{% capture description %}
Maps each coordinate of a vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map2 : t -> t -> (int -> int -> int) -> t
{% endcapture %}
{% capture description %}
Maps each pair of coordinates of two vectors
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val max : t -> int
{% endcapture %}
{% capture description %}
Returns the maximal coordinate of a vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val min : t -> int
{% endcapture %}
{% capture description %}
Returns the minimal coordinate of a vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Returns a pretty-printed string (not for serialization)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

