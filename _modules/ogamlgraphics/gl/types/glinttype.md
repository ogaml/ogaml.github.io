---
modulename: GlIntType
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of GL integer data types
---

This module consists of only one type enumerating openGL integer types.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Byte" %}
{% include add_value.html value="UByte" %}
{% include add_value.html value="Short" %}
{% include add_value.html value="UShort" %}
{% include add_value.html value="Int" %}
{% include add_value.html value="UInt" %}
{% include docelem.html listing=listing values=values open='' %}
