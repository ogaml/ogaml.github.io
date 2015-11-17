---
modulename: GlslType
prefix: OgamlGraphics.GL.Types
abstract: Enumeration of GLSL data types
---

This module consists of only one type enumerating GSL data types.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Int" %}
{% include add_value.html value="Int2" %}
{% include add_value.html value="Int3" %}
{% include add_value.html value="Int4" %}
{% include add_value.html value="Float" %}
{% include add_value.html value="Float2" %}
{% include add_value.html value="Float3" %}
{% include add_value.html value="Float4" %}
{% include add_value.html value="Float2x2" %}
{% include add_value.html value="Float2x3" %}
{% include add_value.html value="Float2x4" %}
{% include add_value.html value="Float3x2" %}
{% include add_value.html value="Float3x3" %}
{% include add_value.html value="Float3x4" %}
{% include add_value.html value="Float4x2" %}
{% include add_value.html value="Float4x3" %}
{% include add_value.html value="Float4x4" %}
{% include add_value.html value="Sampler1D" %}
{% include add_value.html value="Sampler2D" %}
{% include add_value.html value="Sampler3D" %}
{% include docelem.html listing=listing values=values open='' %}
