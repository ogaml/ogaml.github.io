---
modulename: Vertex 
prefix: OgamlUtils.Graph
abstract: Vertex representation
---


This module encapsulates the representation of a vertex
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a vertex
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val compare : t -> t -> int
{% endcapture %}
{% capture description %}
Comparison of vertices (mainly used for equality checks)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

