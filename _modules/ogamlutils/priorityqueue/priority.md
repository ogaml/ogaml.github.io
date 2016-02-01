---
modulename: Priority 
prefix: OgamlUtils.PriorityQueue
abstract: Priorities used by a queue
---


This module encapsulates the priorities used by a queue
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a priority
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val compare : t -> t -> int
{% endcapture %}
{% capture description %}
Comparison of priorities
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

