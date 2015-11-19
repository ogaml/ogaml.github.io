---
modulename: VertexArray 
prefix: OgamlGraphics
abstract: High-level wrapper around OpenGL vertex arrays 
---


This modules provides a high-level and safe access to
 openGL vertex arrays. Vertex arrays are used to store
 vertices on the GPU and can be used to render 3D models. 
{% capture listing %}
exception Invalid_buffer of string
{% endcapture %}
{% capture description %}
Raised when trying to access a destroyed array 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Invalid_vertex of string
{% endcapture %}
{% capture description %}
Raised if a vertex passed to a source has a wrong type 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Invalid_attribute of string
{% endcapture %}
{% capture description %}
Raised if an attribute defined in a GLSL program does not 
 have a type matching the vertex's 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Missing_attribute of string
{% endcapture %}
{% capture description %}
Raised when trying to draw with a vertex array containing an
 attribute that has not been declared in the GLSL program 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type static
{% endcapture %}
{% capture description %}
Phantom type for static arrays 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type dynamic
{% endcapture %}
{% capture description %}
Phantom type for dynamic arrays 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type 'a t
{% endcapture %}
{% capture description %}
Type of a vertex array (static or dynamic) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val static : Source.t -> static t
{% endcapture %}
{% capture description %}
Creates a static array from a source. A static array is faster
 but cannot be modified later. 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Source" %}

{% capture listing %}
val dynamic : Source.t -> dynamic t
{% endcapture %}
{% capture description %}
Creates a dynamic vertex array that can be modified later.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Source" %}

{% capture listing %}
val rebuild : dynamic t -> Source.t -> dynamic t
{% endcapture %}
{% capture description %}
Rebuils a dynamic vertex array from a source 
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Source" %}

{% capture listing %}
val length : 'a t -> int
{% endcapture %}
{% capture description %}
Returns the length of a vertex array 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val destroy : 'a t -> unit
{% endcapture %}
{% capture description %}
Destroys and frees a vertex array from the VRAM 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

