---
modulename: TextureFormat
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of internal texture formats
---

This module consists of only one type enumerating texture formats.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="RGB" %}
{% include add_value.html value="RGBA" %}
{% include add_value.html value="Depth" %}
{% include add_value.html value="DepthStencil" %}
{% include docelem.html listing=listing values=values open='' %}
