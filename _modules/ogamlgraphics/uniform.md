---
modulename: Uniform 
prefix: OgamlGraphics
abstract: Encapsulates a group of uniforms for rendering 
---


This module encapsulates a set of uniforms that
 can be passed to GLSL programs 
{% capture listing %}
exception Unknown_uniform of string
{% endcapture %}
{% capture description %}
Raised when trying to draw using a program 
 that requires a uniform not provided in the set 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Invalid_uniform of string
{% endcapture %}
{% capture description %}
Raised when the type of a uniform is not matching
 the type required by the GLSL program 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a set of uniforms 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val empty : t
{% endcapture %}
{% capture description %}
Empty set of uniforms 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val vector3f : string -> OgamlMath.Vector3f.t -> t -> t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="vector3f name vec set" %} adds the uniform {% include inline-ocaml.html code="vec" %} to {% include inline-ocaml.html code="set" %}.
 The uniform should be refered to as {% include inline-ocaml.html code="name" %} in a GLSL program.
 f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val vector2f : string -> OgamlMath.Vector2f.t -> t -> t
{% endcapture %}
{% capture description %}
See vector3f f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val vector3i : string -> OgamlMath.Vector3i.t -> t -> t
{% endcapture %}
{% capture description %}
See vector3f i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val vector2i : string -> OgamlMath.Vector2i.t -> t -> t
{% endcapture %}
{% capture description %}
See vector3f i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val int : string -> int -> t -> t
{% endcapture %}
{% capture description %}
See vector3f 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val float : string -> float -> t -> t
{% endcapture %}
{% capture description %}
See vector3f 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val matrix3D : string -> OgamlMath.Matrix3D.t -> t -> t
{% endcapture %}
{% capture description %}
See vector3f D 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Matrix" %}

{% capture listing %}
val color : string -> Color.t -> t -> t
{% endcapture %}
{% capture description %}
See vector3f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color" %}

{% capture listing %}
val texture2D : string -> Texture.Texture2D.t -> t -> t
{% endcapture %}
{% capture description %}
See vector3f D 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Texture.Texture" %}

