---
modulename: Uniform 
prefix: OgamlGraphics
abstract: Encapsulates a group of uniforms for rendering 
---

{% capture listing %}
exception Unknown_uniform of string
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Invalid_uniform of string
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
val empty : t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val vector3f : string -> OgamlMath.Vector3f.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val vector2f : string -> OgamlMath.Vector2f.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val vector3i : string -> OgamlMath.Vector3i.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val vector2i : string -> OgamlMath.Vector2i.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val int : string -> int -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val float : string -> float -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val matrix3D : string -> OgamlMath.Matrix3D.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val color : string -> Color.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val texture2D : string -> Texture.Texture2D.t -> t -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

