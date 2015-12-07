---
modulename: Viewport 
prefix: OgamlGraphics.DrawParameter
abstract: Viewports enumeration
---


This module consists of only one type enumerating different ways of
 providing a viewport
{% capture listing %}
type t = 
| Full
| Relative of OgamlMath.FloatRect.t
| Absolute of OgamlMath.IntRect.t
{% endcapture %}
{% capture description %}
Type of a viewport
{% endcapture %}
{% include add_value.html value="Full" desc=" Full window viewport (default) " %}
{% include add_value.html value="Relative of OgamlMath.FloatRect.t" desc=" Viewport given as a fraction of the window's size " %}
{% include add_value.html value="Absolute of OgamlMath.IntRect.t" desc=" Viewport given in pixels " %}

{% include docelem.html listing=listing description=description values=values  %}

