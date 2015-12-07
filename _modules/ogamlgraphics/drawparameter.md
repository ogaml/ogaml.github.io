---
modulename: DrawParameter 
prefix: OgamlGraphics
abstract: Encapsulates draw parameters used for rendering 
---


This module encapsulates the data passed to the GPU when rendering.
 State changes are optimized such that calling a rendering primitive
 with the same parameters twice does not induce a state change. 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a set of draw parameters 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val make : ?culling:CullingMode.t -> ?polygon:PolygonMode.t -> ?depth_test:bool -> ?blend_mode:BlendMode.t -> ?viewport:Viewport.t -> unit -> t
{% endcapture %}
{% capture description %}
Creates a set of draw parameters
     *     *     * 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.DrawParameter.CullingMode" related="OgamlGraphics.DrawParameter.PolygonMode" related="OgamlGraphics.DrawParameter.Viewport" related="OgamlGraphics.DrawParameter.BlendMode" %}

