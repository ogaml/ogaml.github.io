---
modulename: MagnifyFilter
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of magnifying filters
---

This module consists of only one type enumerating texture magnify filter values.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Nearest" %}
{% include add_value.html value="Linear" %}
{% include docelem.html listing=listing values=values open='' %}
