---
modulename: Vertex 
prefix: OgamlGraphics.VertexArray
abstract: Represents a vertex 
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : ?position:OgamlMath.Vector3f.t -> ?texcoord:OgamlMath.Vector2f.t -> ?normal:OgamlMath.Vector3f.t -> ?color:Color.t -> unit -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

