---
modulename: Graph 
prefix: OgamlUtils
abstract: Graph manipulation
---


This module provides a functor to create graphs with arbitrary vertices
{% capture listing %}
module Make : functor (V : Vertex) -> G with type vertex = V.t
{% endcapture %}
{% capture description %}
Graph functor
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

