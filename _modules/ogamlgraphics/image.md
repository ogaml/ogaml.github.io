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

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : [`File of string | `Empty of (int * int * Color.t)] -> t
{% endcapture %}
{% capture description %}
Creates an image from a file, or an empty image with a given size filled with a default color
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color" %}

{% capture listing %}
val size : t -> (int * int)
{% endcapture %}
{% capture description %}
Return the size of an image 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set : t -> int -> int -> Color.t -> unit
{% endcapture %}
{% capture description %}
Sets a pixel of an image
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color" %}

{% capture listing %}
val get : t -> int -> int -> Color.RGB.t
{% endcapture %}
{% capture description %}
Gets the color of a pixel of an image
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color.RGB" %}

