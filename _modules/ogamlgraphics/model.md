---
modulename: Model 
prefix: OgamlGraphics
abstract: Creation, loading and manipulation of 3D models 
---

{% capture listing %}
exception Invalid_model of string
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Bad_format of string
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
type vertex
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type normal
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type uv
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type point
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type color
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val empty : unit -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val from_obj : [`File of string | `String of string] -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val scale : t -> float -> unit
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val translate : t -> OgamlMath.Vector3f.t -> unit
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add_vertex : t -> OgamlMath.Vector3f.t -> vertex
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add_normal : t -> OgamlMath.Vector3f.t -> normal
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add_uv : t -> OgamlMath.Vector2f.t -> uv
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add_color : t -> Color.t -> color
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val make_point : t -> vertex -> normal option -> uv option -> color option -> point
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add_point : t -> vertex:OgamlMath.Vector3f.t -> ?normal:OgamlMath.Vector3f.t -> ?uv:OgamlMath.Vector2f.t -> ?color:Color.t -> unit -> point
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val make_face : t -> (point * point * point) -> unit
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val compute_normals : ?smooth:bool -> t -> unit
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val source : t -> ?index_source:IndexArray.Source.t -> vertex_source:VertexArray.Source.t -> unit -> unit
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

