---
modulename: Texture2D 
prefix: OgamlGraphics.Texture
abstract: Represents a simple 2D texture 
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : State.t -> [< `File of string | `Image of Image.t] -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val size : t -> (int * int)
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

