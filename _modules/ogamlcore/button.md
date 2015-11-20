---
modulename: Button 
prefix: OgamlCore
abstract: Mouse buttons 
---


This module consists of only one type enumerating the mouse buttons 
{% capture listing %}
type t = 
| Unknown
| Left
| Right
| Middle
{% endcapture %}
{% capture description %}
Mouse buttons enumeration 
{% endcapture %}
{% include add_value.html value="Unknown" desc=" Used when an unrecognized mouse button is triggered. 
               * You usually don't need to listen on it. " %}
{% include add_value.html value="Left" %}
{% include add_value.html value="Right" %}
{% include add_value.html value="Middle" %}

{% include docelem.html listing=listing description=description values=values %}

