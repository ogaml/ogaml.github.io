---
modulename: Vertex 
prefix: OgamlGraphics.VertexMap
abstract: Represents a vertex 
---


This module encapsulates vertices that can be passed to
 a source. A vertex is an immutable collection of
 attributes. 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a vertex 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val empty : t
{% endcapture %}
{% capture description %}
Empty vertex 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val vector3f : string -> OgamlMath.Vector3f.t -> t -> t
{% endcapture %}
{% capture description %}
Adds a vector3f to a vertex. The given name must match
 the name of the vec3 attribute in the GLSL program
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector3f" %}

{% capture listing %}
val vector2f : string -> OgamlMath.Vector2f.t -> t -> t
{% endcapture %}
{% capture description %}
Adds a vector2f to a vertex. The given name must match
 the name of the vec2 attribute in the GLSL program
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector2f" %}

{% capture listing %}
val vector3i : string -> OgamlMath.Vector3i.t -> t -> t
{% endcapture %}
{% capture description %}
Adds a vector3i to a vertex. The given name must match
 the name of the ivec3 attribute in the GLSL program
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector3i" %}

{% capture listing %}
val vector2i : string -> OgamlMath.Vector2i.t -> t -> t
{% endcapture %}
{% capture description %}
Adds a vector2i to a vertex. The given name must match
 the name of the ivec2 attribute in the GLSL program
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector2i" %}

{% capture listing %}
val int : string -> int -> t -> t
{% endcapture %}
{% capture description %}
Adds an integer to a vertex. The given name must match
 the name of the int attribute in the GLSL program 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val float : string -> float -> t -> t
{% endcapture %}
{% capture description %}
Adds a float to a vertex. The given name must match
 the name of the float attribute in the GLSL program 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val color : string -> Color.t -> t -> t
{% endcapture %}
{% capture description %}
Adds a color to a vertex. The given name must match
 the name of the vec4 attribute in the GLSL program
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color" %}

