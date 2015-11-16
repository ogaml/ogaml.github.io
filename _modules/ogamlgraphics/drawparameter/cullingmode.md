---
modulename: CullingMode
prefix: OgamlGraphics.DrawParameter
abstract: Culling modes enumeration
---

This module consists of only one type enumerating culling modes.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="CullNone" %}
{% include add_value.html value="CullClockWise" %}
{% include add_value.html value="CullCounterClockWise" %}
{% include docelem.html listing=listing values=values open='' %}
