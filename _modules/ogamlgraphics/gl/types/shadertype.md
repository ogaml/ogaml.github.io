---
modulename: ShaderType
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of shader types
---

This module consists of only one type enumerating shader types.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Fragment" %}
{% include add_value.html value="Vertex" %}
{% include docelem.html listing=listing values=values open='' %}
