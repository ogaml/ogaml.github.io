---
modulename: DrawMode 
prefix: OgamlGraphics
abstract: Draw modes enumeration 
---


This module consists of only one type enumerating OpenGL draw modes 
{% capture listing %}
type t = 
| TriangleStrip
| TriangleFan
| Triangles
| Lines
{% endcapture %}
{% capture description %}
OpenGL draw modes 
{% endcapture %}
{% include add_value.html value="TriangleStrip" %}
{% include add_value.html value="TriangleFan" %}
{% include add_value.html value="Triangles" %}
{% include add_value.html value="Lines" %}

{% include docelem.html listing=listing description=description values=values %}

