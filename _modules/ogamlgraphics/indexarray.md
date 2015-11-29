---
modulename: IndexArray 
prefix: OgamlGraphics
abstract: High-level wrapper around OpenGL index arrays 
---


This modules provides a high-level and safe access to
 openGL index arrays. Index arrays can be passed to 3D rendering
 primitives and are used to render 3D models more efficiently. 
{% capture listing %}
type static
{% endcapture %}
{% capture description %}
Phantom type for static index arrays 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type dynamic
{% endcapture %}
{% capture description %}
Phantom type for dynamic index arrays 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type 'a t
{% endcapture %}
{% capture description %}
Type of an index array (static or dynamic) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val static : Source.t -> static t
{% endcapture %}
{% capture description %}
Creates a static index array. A static array is faster but can not be modified after creation.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.IndexArray.Source" %}

{% capture listing %}
val dynamic : Source.t -> dynamic t
{% endcapture %}
{% capture description %}
Creates a dynamic index array that can be modified after creation.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.IndexArray.Source" %}

{% capture listing %}
val rebuild : dynamic t -> Source.t -> int -> unit
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="rebuild array src offset" %} rebuilds {% include inline-ocaml.html code="array" %} starting from
 the index at position {% include inline-ocaml.html code="offset" %} using {% include inline-ocaml.html code="src" %}.<br/>
 The index array is modified in-place and is resized as needed.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.IndexArray.Source" %}

{% capture listing %}
val length : 'a t -> int
{% endcapture %}
{% capture description %}
Returns the length of an index array 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

