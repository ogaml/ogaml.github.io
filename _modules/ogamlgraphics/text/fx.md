---
modulename: Fx 
prefix: OgamlGraphics.Text
abstract: Advanced text rendering
---


This module provides a more customisable way to render text through the
 use of iterators. This might prove more costly and also harder to use than
 the simple Text.t but it is much more powerful.
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
The type of pre-rendered customised texts.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Iterators

{% capture listing %}
type ('a, 'b) it = 'a -> 'b -> ('b -> 'b) -> 'b
{% endcapture %}
{% capture description %}
The type of an iterator.
 The idea behind it is that {% include inline-ocaml.html code="'a" %} is the type of objects that we
 manipulate (eg. {% include inline-ocaml.html code="Font.code" %}) while {% include inline-ocaml.html code="'b" %} is the type of the value
 computed by the iterator.
 We rely here on continuation passing style to deal with this vaue at
 each step.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type ('a, 'b, 'c) full_it = (('a, 'b) it * 'b * 'b -> 'c)
{% endcapture %}
{% capture description %}
The type of a full iterator also containing its initial value and a
 post-treatment function, typically to forget information that was useful
 to the computation but is irrelevant as a value.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val forall : 'c -> ('a, 'c list, 'c list) full_it
{% endcapture %}
{% capture description %}
This creates a simple iterator that will return a constant for each
 value in the iterated list.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val foreach : ('a -> 'b) -> ('a, 'b list, 'b list) full_it
{% endcapture %}
{% capture description %}
Lifts a function as map would do.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val foreachi : ('a -> int -> 'b) -> ('a, ('b list * int), 'b list) full_it
{% endcapture %}
{% capture description %}
Lifts a function as mapi would do: it adds a parameter counting the
 number of times it has been called starting at 0.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val foreachword : (Font.code list -> 'a) -> 'a -> (Font.code, ('a list * Font.code list), 'a list) full_it
{% endcapture %}
{% capture description %}
This iterator is specific to Font.code and allows the user to lift a
 function taking words instead of characters.
 It splits strings on blank spaces, hence the requirement for their value
 as second argument.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create : text:string -> position:OgamlMath.Vector2f.t -> font:Font.t -> colors:(Font.code, 'b, Color.t list) full_it -> size:int -> unit -> t
{% endcapture %}
{% capture description %}
Creates a drawable text with strongly customisable parameters.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val draw : ?parameters:DrawParameter.t -> text:t -> window:Window.t -> unit -> unit
{% endcapture %}
{% capture description %}
Draws a Fx.t.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val advance : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
The global advance of the text.
 Basically it is a vector such that if you add it to the position of
 text object, you get the position of the next character you would
 draw.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val boundaries : t -> OgamlMath.FloatRect.t
{% endcapture %}
{% capture description %}
Returns a rectangle containing all the text.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

