---
modulename: DrawParameter
prefix: OgamlGraphics
abstract: Encapsulates draw parameters used for rendering
---

This module provides a way to construct a set of draw parameters that can then
be passed as argument when drawing.

### Creating Draw Parameters

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="TriangleStrip" %}
{% include add_value.html value="TriangleFan" %}
{% include add_value.html value="Triangles" %}
{% include add_value.html value="Lines" %}
{% include docelem.html listing=listing values=values description='Type of a set of draw parameters.' open='' %}

{% capture listing %}
val make : ?culling:CullingMode.t ->
           ?polygon:PolygonMode.t ->
           ?depth_test:bool ->
           unit -> t
{% endcapture %}
{% capture description %}
Creates a set of draw parameters.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlGraphics.DrawParameter.CullingMode,OgamlGraphics.DrawParameter.PolygonMode" %}

### Accessing Draw Parameters

{% capture listing %}
val culling : t -> CullingMode.t
{% endcapture %}
{% capture description %}
Returns the value of the culling parameter.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlGraphics.DrawParameter.CullingMode" %}

{% capture listing %}
val polygon : t -> PolygonMode.t
{% endcapture %}
{% capture description %}
Returns the value of the polygon parameter.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlGraphics.DrawParameter.PolygonMode" %}

{% capture listing %}
val depth_test : t -> bool
{% endcapture %}
{% capture description %}
Returns the value of the depth test parameter.
{% endcapture %}
{% include docelem.html listing=listing description=description %}
