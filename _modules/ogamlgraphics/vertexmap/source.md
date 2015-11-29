---
modulename: Source 
prefix: OgamlGraphics.VertexMap
abstract: Represents a source of vertices 
---


This module provides a way to store vertices in a source
 before creating a vertex map.<br/>
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
val empty : unit -> t
{% endcapture %}
{% capture description %}
Creates an empty source of a given initial size. The source will
 be redimensionned as needed.<br/>
 The type of the vertices stored by the source will be defined
 by the first stored vertex. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add : t -> Vertex.t -> unit
{% endcapture %}
{% capture description %}
Adds a vertex to a source. Resizes the source if needed.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexMap.Vertex" %}

{% capture listing %}
val (<<) : t -> Vertex.t -> t
{% endcapture %}
{% capture description %}
Syntaxic sugar for sequences of additions.       *
 {% include inline-ocaml.html code="source << vertex1 << vertex2 << vertex3" %} 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexMap.Vertex" %}

{% capture listing %}
val length : t -> int
{% endcapture %}
{% capture description %}
Returns the length of a source 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

