---
modulename: Model 
prefix: OgamlGraphics
abstract: Creation, loading and manipulation of 3D models 
---


This module provides helpers to manipulate and load
 3D models in the RAM.<br/>
 Models stored in that form are not RAM-friendly, and
 should not be stored in large numbers. Use vertex arrays
 instead. 
{% capture listing %}
exception Invalid_model of string
{% endcapture %}
{% capture description %}
Raised when trying to put a model in a vertex source
 and the model is missing an attribute required by the source 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Bad_format of string
{% endcapture %}
{% capture description %}
Raised when trying to parse an invalid obj file 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type vertex
{% endcapture %}
{% capture description %}
Type of a vertex location in a model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type normal
{% endcapture %}
{% capture description %}
Type of a normal location in a model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type uv
{% endcapture %}
{% capture description %}
Type of an uv location in a model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type point
{% endcapture %}
{% capture description %}
Type of a point location in a model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type color
{% endcapture %}
{% capture description %}
Type of a color location in a model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val empty : unit -> t
{% endcapture %}
{% capture description %}
Creates an empty model 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val from_obj : [`File of string | `String of string] -> t
{% endcapture %}
{% capture description %}
Creates a model from an OBJ file or string 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val scale : t -> float -> unit
{% endcapture %}
{% capture description %}
Scales a model (in place) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val translate : t -> OgamlMath.Vector3f.t -> unit
{% endcapture %}
{% capture description %}
Translates a model f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val add_vertex : t -> OgamlMath.Vector3f.t -> vertex
{% endcapture %}
{% capture description %}
Adds a vertex to a model f
 and returns its location 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val add_normal : t -> OgamlMath.Vector3f.t -> normal
{% endcapture %}
{% capture description %}
Adds a normal to a model f 
 and returns its location 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val add_uv : t -> OgamlMath.Vector2f.t -> uv
{% endcapture %}
{% capture description %}
Adds some UV coordinates to a model f 
 and returns its location 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val add_color : t -> Color.t -> color
{% endcapture %}
{% capture description %}
Adds a color to a model     * and returns its location 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color" %}

{% capture listing %}
val make_point : t -> vertex -> normal option -> uv option -> color option -> point
{% endcapture %}
{% capture description %}
Adds a point formed by a position location and optional parameters
 to a model and returns its location 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val add_point : t -> vertex:OgamlMath.Vector3f.t -> ?normal:OgamlMath.Vector3f.t -> ?uv:OgamlMath.Vector2f.t -> ?color:Color.t -> unit -> point
{% endcapture %}
{% capture description %}
Similar to make_point but also adds the corresponding
 parameters to the model, and returns the point location
 f
 f
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" related="OgamlMath.Vector" related="OgamlGraphics.Color" %}

{% capture listing %}
val make_face : t -> (point * point * point) -> unit
{% endcapture %}
{% capture description %}
Constructs a face from three point locations 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val compute_normals : ?smooth:bool -> t -> unit
{% endcapture %}
{% capture description %}
(Re-)computes the normals of a model. If {% include inline-ocaml.html code="smooth" %} is {% include inline-ocaml.html code="true" %},
 then the normals are computed per-vertex instead of per-face 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val source : t -> ?index_source:IndexArray.Source.t -> vertex_source:VertexArray.Source.t -> unit -> unit
{% endcapture %}
{% capture description %}
Appends a model to a vertex source. Uses indexing if an index source is provided.
 Use Triangles as DrawMode with this source. 
     * 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.IndexArray.Source" related="OgamlGraphics.VertexArray.Source" %}

