---
modulename: Source 
prefix: OgamlGraphics.IndexArray
abstract: Represents a source of indices 
---


This module provides a way to store indices in a source
 before creating an index array. <br/>
 Note that a source is a mutable structure, therefore 
 add and (<<) will directly modify the source. <br/>
 Sources are redimensionned as needed when adding indices. 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a source of indices 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val empty : int -> t
{% endcapture %}
{% capture description %}
An empty source 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add : t -> int -> unit
{% endcapture %}
{% capture description %}
Adds an integer index to a source (redimensions the source as needed) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val (<<) : t -> int -> t
{% endcapture %}
{% capture description %}
Syntaxic sugar for sequences of additions<br/>
 {% include inline-ocaml.html code="source << index1 << index2 << index3" %} 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val length : t -> int
{% endcapture %}
{% capture description %}
Returns the length of a source 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

