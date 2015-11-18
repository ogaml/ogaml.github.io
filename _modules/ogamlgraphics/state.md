---
modulename: State 
prefix: OgamlGraphics
abstract: Encapsulates data about an OpenGL internal state 
---

{% capture listing %}
exception Invalid_texture_unit of int
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val version : t -> (int * int)
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val is_version_supported : t -> (int * int) -> bool
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val glsl_version : t -> int
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val is_glsl_version_supported : t -> int -> bool
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val culling_mode : t -> DrawParameter.CullingMode.t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val polygon_mode : t -> DrawParameter.PolygonMode.t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val depth_test : t -> bool
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val clear_color : t -> Color.t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

