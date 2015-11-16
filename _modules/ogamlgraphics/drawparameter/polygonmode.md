---
modulename: PolygonMode
prefix: OgamlGraphics.DrawParameter
abstract: Polygon modes enumeration
---

This module consists of only one type enumerating polygon modes.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="DrawVertices" %}
{% include add_value.html value="DrawLines" %}
{% include add_value.html value="DrawFill" %}
{% include docelem.html listing=listing values=values open='' %}
