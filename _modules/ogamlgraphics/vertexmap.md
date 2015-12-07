---
modulename: VertexMap 
prefix: OgamlGraphics
abstract: Customisable, high-level vertex arrays
---


This modules provides a high-level and safe access to
 openGL vertex arrays.
 Vertex maps are less safe and optimized than vertex arrays,
 but can store any kind of data (especially integers).
 You should use the module VertexArray when possible.
{% capture listing %}
exception Invalid_source of string
{% endcapture %}
{% capture description %}
Raised when trying to rebuild a vertex map from an invalid source
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Invalid_vertex of string
{% endcapture %}
{% capture description %}
Raised if a vertex passed to a source has a wrong type
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Invalid_attribute of string
{% endcapture %}
{% capture description %}
Raised if an attribute defined in a GLSL program does not
 have a type matching the vertex's
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Missing_attribute of string
{% endcapture %}
{% capture description %}
Raised when trying to draw with a vertex map containing an
 attribute that has not been declared in the GLSL program
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type static
{% endcapture %}
{% capture description %}
Phantom type for static maps
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type dynamic
{% endcapture %}
{% capture description %}
Phantom type for dynamic maps
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type 'a t
{% endcapture %}
{% capture description %}
Type of a vertex map (static or dynamic)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val static : Source.t -> static t
{% endcapture %}
{% capture description %}
Creates a static map from a source. A static map is faster
but cannot be modified later.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.VertexMap.Source" %}

{% capture listing %}
val dynamic : Source.t -> dynamic t
{% endcapture %}
{% capture description %}
Creates a dynamic vertex map that can be modified later.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.VertexMap.Source" %}

{% capture listing %}
val rebuild : dynamic t -> Source.t -> int -> unit
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="rebuild map src offset" %} rebuilds {% include inline-ocaml.html code="map" %} starting from
 the vertex at position {% include inline-ocaml.html code="offset" %} using {% include inline-ocaml.html code="src" %}.<br/>
 The vertex map is modified in-place and is resized as needed.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.VertexMap.Source" %}

{% capture listing %}
val length : 'a t -> int
{% endcapture %}
{% capture description %}
Returns the length of a vertex map
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val draw : vertices:'a t -> window:Window.t -> ?indices:'b IndexArray.t -> program:Program.t -> ?uniform:Uniform.t -> ?parameters:DrawParameter.t -> mode:DrawMode.t -> unit -> unit
{% endcapture %}
{% capture description %}
Draws a vertex map on a window using the given parameters.
 
 {% include inline-ocaml.html code="uniform" %} should provide the uniforms required by {% include inline-ocaml.html code="program" %} (defaults to empty)<br/>
 {% include inline-ocaml.html code="parameters" %} defaults to {% include inline-ocaml.html code="DrawParameter.make ()" %}
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.IndexArray,OgamlGraphics.Window,OgamlGraphics.Program,OgamlGraphics.Uniform,OgamlGraphics.DrawParameter,OgamlGraphics.DrawMode" %}

