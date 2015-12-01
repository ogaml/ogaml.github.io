---
modulename: Source 
prefix: OgamlGraphics.VertexArray
abstract: Represents a source of vertices 
---


This module provides a way to store vertices in a source
 before creating a vertex array.<br/>
 Note that a source is a mutable structure, therefore
 add and (<<) will directly modify the source.<br/>
 Sources are redimensionned as needed when adding vertices. 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a source 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val empty : ?position:string -> ?normal:string -> ?texcoord:string -> ?color:string -> size:int -> unit -> t
{% endcapture %}
{% capture description %}
Creates an empty source of a given initial size. The source will
 be redimensionned as needed.<br/>
 The optional arguments specify whether a source should expect vertices
 having the corrsponding attributes, and the name of the attribute
 in the GLSL program that will be used 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val requires_position : t -> bool
{% endcapture %}
{% capture description %}
Returns true iff the source contains (and requests) vertices with
 a position attribute 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val requires_normal : t -> bool
{% endcapture %}
{% capture description %}
See requires_position 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val requires_uv : t -> bool
{% endcapture %}
{% capture description %}
See requires_position 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val requires_color : t -> bool
{% endcapture %}
{% capture description %}
See requires_position 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add : t -> Vertex.t -> unit
{% endcapture %}
{% capture description %}
Adds a vertex to a source. Resizes the source if needed.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Vertex" %}

{% capture listing %}
val (<<) : t -> Vertex.t -> t
{% endcapture %}
{% capture description %}
Syntaxic sugar for sequences of additions.       *
 {% include inline-ocaml.html code="source << vertex1 << vertex2 << vertex3" %} 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Vertex" %}

{% capture listing %}
val length : t -> int
{% endcapture %}
{% capture description %}
Returns the length of a source 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val append : t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="append s1 s2" %} appends the source {% include inline-ocaml.html code="s2" %} at the end of the source {% include inline-ocaml.html code="s1" %} (in place), 
 and returns {% include inline-ocaml.html code="s1" %}.
 If the attribute names are different, the names in the source {% include inline-ocaml.html code="s1" %} are used.
 Raises Invalid_source if types are incompatible. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

