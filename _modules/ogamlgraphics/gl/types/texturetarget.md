---
modulename: TextureTarget
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of texture types
---

This module consists of only one type enumerating texture targets.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Texture1D" %}
{% include add_value.html value="Texture2D" %}
{% include add_value.html value="Texture3D" %}
{% include docelem.html listing=listing values=values open='' %}
