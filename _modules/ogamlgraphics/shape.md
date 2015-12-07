---
modulename: Shape 
prefix: OgamlGraphics
abstract: Creation and manipulation of 2D shapes
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of shapes
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_polygon : points:OgamlMath.Vector2i.t list -> color:Color.t -> ?origin:OgamlMath.Vector2f.t -> ?position:OgamlMath.Vector2i.t -> ?scale:OgamlMath.Vector2f.t -> ?rotation:float -> ?thickness:float -> ?border_color:Color.t -> unit -> t
{% endcapture %}
{% capture description %}
Creates a convex polygon given a list of points.
 points is this list of points,
 origin is the origin of the polygon.
 All coordinates are taken with respect to the top-left corner of the
 shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_rectangle : position:OgamlMath.Vector2i.t -> size:OgamlMath.Vector2i.t -> color:Color.t -> ?origin:OgamlMath.Vector2f.t -> ?scale:OgamlMath.Vector2f.t -> ?rotation:float -> ?thickness:float -> ?border_color:Color.t -> unit -> t
{% endcapture %}
{% capture description %}
Creates a rectangle.
 Its origin is positioned with respect to the top-left corner.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_regular : position:OgamlMath.Vector2i.t -> radius:float -> amount:int -> color:Color.t -> ?origin:OgamlMath.Vector2f.t -> ?scale:OgamlMath.Vector2f.t -> ?rotation:float -> ?thickness:float -> ?border_color:Color.t -> unit -> t
{% endcapture %}
{% capture description %}
Creates a regular polygon with a given number of vertices.
 When this number is high, one can expect a circle.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_line : thickness:float -> color:Color.t -> ?top:OgamlMath.Vector2i.t -> tip:OgamlMath.Vector2i.t -> ?position:OgamlMath.Vector2i.t -> ?origin:OgamlMath.Vector2f.t -> ?rotation:float -> unit -> t
{% endcapture %}
{% capture description %}
Creates a line from {% include inline-ocaml.html code="top" %} (zero by default) to {% include inline-ocaml.html code="tip" %}.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val draw : ?parameters:DrawParameter.t -> window:Window.t -> shape:t -> unit -> unit
{% endcapture %}
{% capture description %}
Draws a shape on a window using the given parameters.<br/>
 {% include inline-ocaml.html code="parameters" %} defaults to {% include inline-ocaml.html code="DrawParameter.make ~depth_test:false ~blend_mode:DrawParameter.BlendMode.alpha" %}
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.DrawParameter,OgamlGraphics.Window" %}

{% capture listing %}
val set_position : t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the origin in the window.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set_origin : t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the origin with respect to the top-left corner of the
 shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set_rotation : t -> float -> unit
{% endcapture %}
{% capture description %}
Sets the angle of rotation of the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set_scale : t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Sets the scale of the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set_thickness : t -> float -> unit
{% endcapture %}
{% capture description %}
Sets the thickness of the outline.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set_color : t -> Color.t -> unit
{% endcapture %}
{% capture description %}
Sets the filling color of the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val translate : t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Translates the shape by the given vector.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val rotate : t -> float -> unit
{% endcapture %}
{% capture description %}
Rotates the shape by the given angle.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val scale : t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Scales the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val position : t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the position of the origin in window coordinates.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val origin : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
Returns the position of the origin with respect to the first point of the
 shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val rotation : t -> float
{% endcapture %}
{% capture description %}
Returns the angle of rotation of the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val get_scale : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
Returns the scale of the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val thickness : t -> float
{% endcapture %}
{% capture description %}
Returns the thickness of the outline.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val color : t -> Color.t
{% endcapture %}
{% capture description %}
Returns the filling color of the shape.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

