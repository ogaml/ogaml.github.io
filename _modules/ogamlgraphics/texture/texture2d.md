---
modulename: Texture2D 
prefix: OgamlGraphics.Texture
abstract: Represents a simple 2D texture
---


This modules provides an abstraction of openGL 2D textures
 that can be used for 2D rendering (with sprites) or
 3D rendering when passed to a GLSL program.
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a 2D texture
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create : [< `File of string | `Image of Image.t] -> t
{% endcapture %}
{% capture description %}
Creates a texture from a source (a file or an image)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val size : t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the size of a texture
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

