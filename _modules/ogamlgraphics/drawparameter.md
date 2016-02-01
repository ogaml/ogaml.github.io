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

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val make : ?culling:CullingMode.t -> ?polygon:PolygonMode.t -> ?depth_test:bool -> ?blend_mode:BlendMode.t -> ?viewport:Viewport.t -> ?antialiasing:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates a set of draw parameters with the following options :<br/>
 {% include inline-ocaml.html code="culling" %} specifies which face should be culled (defaults to {% include inline-ocaml.html code="CullNone" %})<br/>
 {% include inline-ocaml.html code="polygon" %} specifies how to render polygons (defaults to {% include inline-ocaml.html code="DrawFill" %})<br/>
 {% include inline-ocaml.html code="depth_test" %} specifies whether depth should be tested when rendering vertices (defaults to {% include inline-ocaml.html code="true" %})<br/>
 {% include inline-ocaml.html code="blend_mode" %} specifies the blending equation (defaults to {% include inline-ocaml.html code="BlendingMode.default" %})<br/>
 {% include inline-ocaml.html code="viewport" %} specifies the viewport (defaults to {% include inline-ocaml.html code="Full" %})<br/>
 {% include inline-ocaml.html code="antialiasing" %} specifies whether to activate AA or not (ignored if AA is not supported by the context, defaults to {% include inline-ocaml.html code="true" %})
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.DrawParameter.CullingMode,OgamlGraphics.DrawParameter.PolygonMode,OgamlGraphics.DrawParameter.Viewport,OgamlGraphics.DrawParameter.BlendMode" %}

