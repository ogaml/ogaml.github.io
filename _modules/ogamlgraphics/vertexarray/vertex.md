---
modulename: Vertex 
prefix: OgamlGraphics.VertexArray
abstract: Represents a vertex 
---


This module encapsulates vertices that can be passed to
 a source 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a vertex 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : ?position:OgamlMath.Vector3f.t -> ?texcoord:OgamlMath.Vector2f.t -> ?normal:OgamlMath.Vector3f.t -> ?color:Color.t -> unit -> t
{% endcapture %}
{% capture description %}
Creates a vertex containing various optional attributes 
 f
 f
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" related="OgamlMath.Vector" related="OgamlGraphics.Color" %}

