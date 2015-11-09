---
modulename: Matrix3D
prefix: OgamlMath
abstract: Provides easy creation and manipulation of rendering matrices
---

Optimized operations on 3D (4x4) float matrices.

### Simple Matrices

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of 4x4 matrices (stored in a flat column-major array).
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val zero : unit -> t
{% endcapture %}
{% capture description %}
Zero matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val identity : unit -> t
{% endcapture %}
{% capture description %}
Identity matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val translation : Vector3f.t -> t
{% endcapture %}
{% capture description %}
Builds a translation matrix from a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val scaling : Vector3f.t -> t
{% endcapture %}
{% capture description %}
Builds a scaling matrix from a vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val rotation : Vector3f.t -> float -> t
{% endcapture %}
{% capture description %}
Builds a rotation matrix from a vector (axis) and an angle.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val from_quaternion : Quaternion.t -> t
{% endcapture %}
{% capture description %}
Returns the rotation matrix associated to a quaternion.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Matrix Operations

{% capture listing %}
val product : t -> t -> t
{% endcapture %}
{% capture description %}
Computes the product of two matrices.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val transpose : t -> t
{% endcapture %}
{% capture description %}
Transposes a matrix. The original matrix is not modified.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val translate : Vector3f.t -> t -> t
{% endcapture %}
{% capture description %}
Translates a matrix by a vector, returns the result. The original matrix is not modified.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val scale : Vector3f.t -> t -> t
{% endcapture %}
{% capture description %}
Scales a matrix by a vector, returns the result. The original matrix is not modified.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val rotate : Vector3f.t -> float -> t -> t
{% endcapture %}
{% capture description %}
Rotates a matrix, returns the result. The original matrix is not modified.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val times : t -> Vector3f.t -> Vector3f.t
{% endcapture %}
{% capture description %}
Computes the product of a matrix with a column vector.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val print : t -> string
{% endcapture %}
{% capture description %}
Outputs a matrix as a pretty-printed string.
{% endcapture %}
{% include docelem.html listing=listing description=description %}


### Rendering Matrices Creation

{% capture listing %}
val look_at : from:Vector3f.t -> at:Vector3f.t -> up:Vector3f.t -> t
{% endcapture %}
{% endcapture %}
{% capture description %}
Builds a "look at" view matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val look_at_eulerian : from:Vector3f.t -> theta:float -> phi:float -> t
{% endcapture %}
{% capture description %}
Builds a "look at" view matrix from eulerian angles. Theta should be in [0;2pi] and phi in [-pi/2;pi/2]. 
If phi = pi/2, the camera is looking up (towards positive Y). 
If theta = 0, the camera is looking towards negative Z.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val orthographic : right:float -> left:float -> near:float -> far:float -> top:float -> bottom:float -> t
{% endcapture %}
{% capture description %}
Builds an orthographic projection matrix englobing a volume defined by six planes.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val iorthographic : right:float -> left:float -> near:float -> far:float -> top:float -> bottom:float -> t
{% endcapture %}
{% capture description %}
Builds the inverse of an orthographic projection matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val perspective : near:float -> far:float -> width:float -> height:float -> fov:float -> t
{% endcapture %}
{% capture description %}
Builds a perspective projection matrix. 
Near and far are the positions of the clipping planes relatively to the camera position (nothing will be rendered outside those planes). 
Width and height should usually be the dimensions of the screen in pixels.
Fov corresponds to the view angle, and is given in radians.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val iperspective : near:float -> far:float -> width:float -> height:float -> fov:float -> t
{% endcapture %}
{% capture description %}
Builds the inverse of a perspective projection matrix.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Other Functions

{% capture listing %}
val to_bigarray : t -> (float, Bigarray.float32_elt, Bigarray.c_layout) Bigarray.Array1.t
{% endcapture %}
{% capture description %}
Returns the matrix as a flat bigarray. Used internally by OGAML, it should not be necessary 
for your programs.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

