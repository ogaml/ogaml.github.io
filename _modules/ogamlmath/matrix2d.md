---
modulename: Matrix2D 
prefix: OgamlMath
abstract: Provides easy creation and manipulation of 2D rendering matrices
---


Optimized operations on 2D (3x3) float matrices
{% capture listing %}
exception Matrix2D_exception of string
{% endcapture %}
{% capture description %}
Raised when an error occurs (usually a division by zero)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Simple Matrices

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of 3x3 matrices stored in a flat, column-major array
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val zero : unit -> t
{% endcapture %}
{% capture description %}
Zero matrix
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val identity : unit -> t
{% endcapture %}
{% capture description %}
Identity matrix
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translation : Vector2f.t -> t
{% endcapture %}
{% capture description %}
Builds a translation matrix from a vector
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2f" %}

{% capture listing %}
val scaling : Vector2f.t -> t
{% endcapture %}
{% capture description %}
Builds a scaling matrix from a vector
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2f" %}

{% capture listing %}
val rotation : float -> t
{% endcapture %}
{% capture description %}
Builds a rotation matrix from an angle
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Matrix Operations

{% capture listing %}
val product : t -> t -> t
{% endcapture %}
{% capture description %}
Computes the product of two matrices
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val transpose : t -> t
{% endcapture %}
{% capture description %}
Transposes a matrix. The original is not modified.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translate : Vector2f.t -> t -> t
{% endcapture %}
{% capture description %}
Translates a matrix by a vector. The original matrix is not modified.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2f" %}

{% capture listing %}
val scale : Vector2f.t -> t -> t
{% endcapture %}
{% capture description %}
Scales a matrix by a vector. The original matrix is not modified.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2f" %}

{% capture listing %}
val rotate : float -> t -> t
{% endcapture %}
{% capture description %}
Rotates a matrix by an angle. The original matrix is not modified.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val times : t -> Vector2f.t -> Vector2f.t
{% endcapture %}
{% capture description %}
Computes the (right-)product of a matrix with a column vector
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Returns a pretty-printed string (not for serialization)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Rendering Matrices Creation

{% capture listing %}
val projection : size:Vector2f.t -> t
{% endcapture %}
{% capture description %}
Builds an orthographic projection matrix englobing a screen
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val iprojection : size:Vector2f.t -> t
{% endcapture %}
{% capture description %}
Builds the inverse of an orthographic projection matrix
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Other functions

{% capture listing %}
val to_bigarray : t -> (float, Bigarray.float32_elt, Bigarray.c_layout) Bigarray.Array1.t
{% endcapture %}
{% capture description %}
Returns a matrix as a flat bigarray. Used internally by OGAML, it should not be necessary for your programs.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

