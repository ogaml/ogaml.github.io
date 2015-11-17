---
modulename: PixelFormat
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of pixel formats
---

This module consists of only one type enumerating pixel formats.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="R" %}
{% include add_value.html value="RG" %}
{% include add_value.html value="RGB" %}
{% include add_value.html value="BGR" %}
{% include add_value.html value="RGBA" %}
{% include add_value.html value="BGRA" %}
{% include add_value.html value="Depth" %}
{% include add_value.html value="DepthStencil" %}
{% include docelem.html listing=listing values=values open='' %}
