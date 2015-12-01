---
modulename: BlendMode 
prefix: OgamlGraphics.DrawParameter
abstract: Blending modes manipulation 
---

{% capture listing %}
type t = {color : Equation.t; alpha : Equation.t}
{% endcapture %}
{% capture description %}
Blending mode structure. This encapsulates a color blending equation and an
 alpha blending equation. 
{% endcapture %}
{% include add_value.html value="color : Equation.t" %}
{% include add_value.html value="alpha : Equation.t" %}

{% include docelem.html listing=listing description=description struct_values=values related="OgamlGraphics.DrawParameter.BlendMode.Equation" %}

{% capture listing %}
val default : t
{% endcapture %}
{% capture description %}
Default blending mode, replaces the old color by the new one 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val alpha : t
{% endcapture %}
{% capture description %}
Common alpha blending mode 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val additive : t
{% endcapture %}
{% capture description %}
Additive blending mode 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val soft_additive : t
{% endcapture %}
{% capture description %}
Soft additive blending mode 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

