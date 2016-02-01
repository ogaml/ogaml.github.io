---
modulename: Image 
prefix: OgamlGraphics
abstract: Image manipulation and creation
---


This module provides a safe way to load and access images stored in the RAM.
 Images stored this way are uncompressed arrays of bytes and are therefore
 not meant to be stored in large quantities.
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of an image stored in the RAM
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create : [`File of string | `Empty of (int * int * Color.t) | `Data of (int * int * Bytes.t)] -> t
{% endcapture %}
{% capture description %}
Creates an image from a file, some RGBA-formatted data, or an empty one
 filled with a default color
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.Color" %}

{% capture listing %}
val size : t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Return the size of an image
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set : t -> int -> int -> Color.t -> unit
{% endcapture %}
{% capture description %}
Sets a pixel of an image
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.Color" %}

{% capture listing %}
val get : t -> int -> int -> Color.RGB.t
{% endcapture %}
{% capture description %}
Gets the color of a pixel of an image
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.Color.RGB" %}

{% capture listing %}
val blit : t -> ?rect:OgamlMath.IntRect.t -> t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="blit src ~rect dest offset" %} blits the subimage of {% include inline-ocaml.html code="src" %} defined by {% include inline-ocaml.html code="rect" %}
 on the image {% include inline-ocaml.html code="dest" %} at position {% include inline-ocaml.html code="offset" %} (relative to the top-left pixel).<br/>
 If {% include inline-ocaml.html code="rect" %} is not provided then the whole image {% include inline-ocaml.html code="src" %} is used.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.IntRect,OgamlMath.Vector2i" %}

