---
modulename: VBOKind
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of VBO modes
---

This module consists of only one type enumerating VBO kinds.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="StaticDraw" %}
{% include add_value.html value="DynamicDraw" %}
{% include docelem.html listing=listing values=values open='' %}
