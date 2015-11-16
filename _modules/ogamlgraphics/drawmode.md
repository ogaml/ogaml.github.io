---
modulename: DrawMode
prefix: OgamlGraphics
abstract: Draw modes enumeration
---

This module consists of only one type enumerating openGL draw modes.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="TriangleStrip" %}
{% include add_value.html value="TriangleFan" %}
{% include add_value.html value="Triangles" %}
{% include add_value.html value="Lines" %}
{% include docelem.html listing=listing values=values open='' %}
