---
modulename: PolygonMode 
prefix: OgamlGraphics.DrawParameter
abstract: Polygon modes enumeration 
---

{% capture listing %}
type t = 
| DrawVertices
| DrawLines
| DrawFill
{% endcapture %}
{% capture description %}
This module consists of only one type enumerating OpenGL polygon modes 
{% endcapture %}
{% include add_value.html value="DrawVertices" desc=" Draws only vertices " %}
{% include add_value.html value="DrawLines" desc=" Draws only lines " %}
{% include add_value.html value="DrawFill" desc=" Draws full polygons " %}

{% include docelem.html listing=listing description=description values=values %}

