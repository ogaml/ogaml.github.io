---
modulename: HSV 
prefix: OgamlGraphics.Color
abstract: Manipulation of HSVA colors
---

{% capture listing %}
type t = {h : float; s : float; v : float; a : float}
{% endcapture %}
{% capture description %}
Type of a color in HSVA format
{% endcapture %}
{% include add_value.html value="h : float" %}
{% include add_value.html value="s : float" %}
{% include add_value.html value="v : float" %}
{% include add_value.html value="a : float" %}

{% include docelem.html listing=listing description=description struct_values=values  %}

{% capture listing %}
val black : t
{% endcapture %}
{% capture description %}
Opaque black
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val white : t
{% endcapture %}
{% capture description %}
Opaque white
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val red : t
{% endcapture %}
{% capture description %}
Opaque red
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val green : t
{% endcapture %}
{% capture description %}
Opaque green
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val blue : t
{% endcapture %}
{% capture description %}
Opaque blue
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val yellow : t
{% endcapture %}
{% capture description %}
Opaque yellow
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val magenta : t
{% endcapture %}
{% capture description %}
Opaque magenta
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val cyan : t
{% endcapture %}
{% capture description %}
Opaque cyan
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val transparent : t
{% endcapture %}
{% capture description %}
Transparent black
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val clamp : t -> t
{% endcapture %}
{% capture description %}
Clamps the s,v,a values of a color between 0 and 1,
 and h between 0 and 2*pi
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map : t -> (float -> float) -> t
{% endcapture %}
{% capture description %}
Maps each value of a color
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

