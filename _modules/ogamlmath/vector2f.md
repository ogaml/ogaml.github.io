---
modulename: Vector2f 
prefix: OgamlMath
abstract: Operations on immutable vectors of 2 floats 
---


This module defines the vector2f type and various operations on it. 
{% capture listing %}
exception Vector2f_exception of string
{% endcapture %}
{% capture description %}
Raised when an error occurs (usually a division by zero) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

### Vector operations 

{% capture listing %}
type t = {x : float; y : float}
{% endcapture %}
{% capture description %}
Type of immutable vectors of 2 floats 
{% endcapture %}
{% include add_value.html value="x : float" %}
{% include add_value.html value="y : float" %}

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
val add : t -> t -> t
{% endcapture %}
{% capture description %}
Adds two vectors together 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val sub : t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="sub u v" %} computes the vector {% include inline-ocaml.html code="u - v" %} 
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
Divides a vector by a scalar. Raises Vector2f_exception if the scalar is zero. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val floor : t -> Vector2i.t
{% endcapture %}
{% capture description %}
Rounds-down a vector i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val from_int : Vector2i.t -> t
{% endcapture %}
{% capture description %}
Returns a float vector from an int vector i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val dot : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the dot product of two vectors 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val det : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the determinant of two vectors 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val angle : t -> t -> float
{% endcapture %}
{% capture description %}
Computes the angle (in radians) between two vectors 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val squared_norm : t -> float
{% endcapture %}
{% capture description %}
Computes the squared norm of a vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

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
Normalizes a vector. Raises Vector2f_exception if the vector is zero. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val clamp : t -> t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="clamp v a b" %} returns the vector whose coordinates are the coordinates of {% include inline-ocaml.html code="v" %}
 clamped between the coordinates of {% include inline-ocaml.html code="a" %} and {% include inline-ocaml.html code="b" %} 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val max : t -> float
{% endcapture %}
{% capture description %}
Returns the maximal coordinate of a vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val min : t -> float
{% endcapture %}
{% capture description %}
Returns the minimal coordinate of a vector 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Returns a pretty-printed string (not for serialization) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val direction : t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="direction u v" %} returns the normalized direction vector from {% include inline-ocaml.html code="u" %} to {% include inline-ocaml.html code="v" %}.
 Raises Vector2f_exception if {% include inline-ocaml.html code="u = v" %}. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val endpoint : t -> t -> float -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="endpoint a v t" %} returns the point {% include inline-ocaml.html code="a + tv" %} 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

