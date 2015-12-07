---
modulename: Factor 
prefix: OgamlGraphics.DrawParameter.BlendMode
abstract: Blending factors enumeration
---


This module consists of only one type enumerating openGL blending factors
{% capture listing %}
type t = ...
{% endcapture %}
{% capture description %}
Blending factors
{% endcapture %}
{% include add_value.html value="Zero" %}
{% include add_value.html value="One" %}
{% include add_value.html value="SrcColor" %}
{% include add_value.html value="OneMinusSrcColor" %}
{% include add_value.html value="DestColor" %}
{% include add_value.html value="OneMinusDestColor" %}
{% include add_value.html value="SrcAlpha" %}
{% include add_value.html value="SrcAlphaSaturate" %}
{% include add_value.html value="OneMinusSrcAlpha" %}
{% include add_value.html value="DestAlpha" %}
{% include add_value.html value="OneMinusDestAlpha" %}
{% include add_value.html value="ConstColor" %}
{% include add_value.html value="OneMinusConstColor" %}
{% include add_value.html value="ConstAlpha" %}
{% include add_value.html value="OneMinusConstAlpha" %}

{% include docelem.html listing=listing description=description values=values  %}

