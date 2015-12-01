---
modulename: Sprite 
prefix: OgamlGraphics
abstract: Creation and manipulation of 2D sprites 
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of sprites 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : texture:Texture.Texture2D.t -> ?origin:OgamlMath.Vector2f.t -> ?position:OgamlMath.Vector2i.t -> ?scale:OgamlMath.Vector2f.t -> ?rotation:float -> unit -> t
{% endcapture %}
{% capture description %}
Creates a sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val draw : window:Window.t -> sprite:t -> unit
{% endcapture %}
{% capture description %}
Draws a sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set_position : t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the origin of the sprite in the window. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set_origin : t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the origin with respect to the top-left corner of the
 sprite. The origin is the center of all transformations. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set_rotation : t -> float -> unit
{% endcapture %}
{% capture description %}
Sets the angle of rotation of the sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set_scale : t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Sets the scale of the sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val translate : t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Translates the sprite by the given vector. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val rotate : t -> float -> unit
{% endcapture %}
{% capture description %}
Rotates the sprite by the given angle. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val scale : t -> OgamlMath.Vector2f.t -> unit
{% endcapture %}
{% capture description %}
Scales the sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val position : t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the position of the origin in window coordinates. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val origin : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
Returns the position of the origin with respect to the first point of the
 sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val rotation : t -> float
{% endcapture %}
{% capture description %}
Returns the angle of rotation of the sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val get_scale : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
Returns the scale of the sprite. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

