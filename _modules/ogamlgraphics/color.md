---
modulename: Color 
prefix: OgamlGraphics
abstract: Color manipulation and creation 
---

{% capture listing %}
type t = [`HSV of HSV.t | `RGB of RGB.t]
{% endcapture %}
{% capture description %}
Polymorphic variant representing both color formats 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val rgb_to_hsv : RGB.t -> HSV.t
{% endcapture %}
{% capture description %}
Converts a color from RGB to HSV 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val hsv_to_rgb : HSV.t -> RGB.t
{% endcapture %}
{% capture description %}
Converts a color from HSV to RGB 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val hsv : t -> HSV.t
{% endcapture %}
{% capture description %}
Converts a color to HSV 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val rgb : t -> RGB.t
{% endcapture %}
{% capture description %}
Converts a color to RGB 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val clamp : t -> t
{% endcapture %}
{% capture description %}
Clamps a color w.r.t RGB.clamp and HSV.clamp 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

