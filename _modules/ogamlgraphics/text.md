---
modulename: Text 
prefix: OgamlGraphics
abstract: Text rendering
---


This module provides an efficient way to render
 text using openGL primitives.
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
The type of pre-rendered texts.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create : text:string -> position:OgamlMath.Vector2i.t -> font:Font.t -> ?color:Color.t -> size:int -> bold:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates a drawable text from the given string.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val draw : ?parameters:DrawParameter.t -> text:t -> window:Window.t -> unit -> unit
{% endcapture %}
{% capture description %}
Draws text on the screen.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val advance : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
The global advance of the text.
 Basically it is a vector such that if you add it to the position of
 text object, you get the position of the next character you would draw.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val boundaries : t -> OgamlMath.FloatRect.t
{% endcapture %}
{% capture description %}
Returns a rectangle containing all the text.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

