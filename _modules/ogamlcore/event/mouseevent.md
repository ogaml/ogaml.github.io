---
modulename: MouseEvent 
prefix: OgamlCore.Event
abstract: Mouse movement event information 
---


This module defines a public structure encapsulating information
 about a mouse movement event 
{% capture listing %}
type t = {x : int; y : int}
{% endcapture %}
{% capture description %}
Record containing the new mouse position 
{% endcapture %}
{% include add_value.html value="x : int" %}
{% include add_value.html value="y : int" %}

{% include docelem.html listing=listing description=description struct_values=values %}

