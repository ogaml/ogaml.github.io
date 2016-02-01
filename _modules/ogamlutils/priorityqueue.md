---
modulename: PriorityQueue 
prefix: OgamlUtils
abstract: Priority queue data structure
---


This module provides a functor for creating priority queues
{% capture listing %}
module Make : functor (P : Priority) -> Q with type priority = P.t
{% endcapture %}
{% capture description %}
Priority queue functor
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

