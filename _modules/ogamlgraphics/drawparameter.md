---
modulename: DrawParameter 
prefix: OgamlGraphics
abstract: Encapsulates draw parameters used for rendering 
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a set of draw parameters 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val make : ?culling:CullingMode.t -> ?polygon:PolygonMode.t -> ?depth_test:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates a set of draw parameters 
     * 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.DrawParameter.CullingMode" related="OgamlGraphics.DrawParameter.PolygonMode" %}

