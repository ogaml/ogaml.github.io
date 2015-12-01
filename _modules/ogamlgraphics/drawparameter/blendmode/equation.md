---
modulename: Equation 
prefix: OgamlGraphics.DrawParameter.BlendMode
abstract: Blending equations enumeration 
---


This module consists of only one type enumerating openGL blending equations 
{% capture listing %}
type t = 
| None
| Add of (Factor.t * Factor.t)
| Sub of (Factor.t * Factor.t)
{% endcapture %}
{% capture description %}
Blending equations 
{% endcapture %}
{% include add_value.html value="None" desc=" Default equation, replaces the old color by the new one " %}
{% include add_value.html value="Add of (Factor.t * Factor.t)" %}
{% include add_value.html value="Sub of (Factor.t * Factor.t)" %}

{% include docelem.html listing=listing description=description values=values related="OgamlGraphics.DrawParameter.BlendMode.Factor" %}

