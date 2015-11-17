---
modulename: MinifyFilter
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of minifying filters
---

This module consists of only one type enumerating texture minify filter values.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Nearest" %}
{% include add_value.html value="Linear" %}
{% include add_value.html value="NearestMipmap" %}
{% include add_value.html value="LinearMipmap" %}
{% include docelem.html listing=listing values=values open='' %}
