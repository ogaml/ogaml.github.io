---
modulename: Window 
prefix: OgamlCore.LL
abstract: Window management 
---


This module provides a low-level interface to create and
 manage windows. You should probably use the OgamlGraphics.Window
 wrapper. 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a window 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : width:int -> height:int -> title:string -> settings:ContextSettings.t -> t
{% endcapture %}
{% capture description %}
Creates a window of a given size 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set_title : t -> string -> unit
{% endcapture %}
{% capture description %}
Sets the tite of the window. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val close : t -> unit
{% endcapture %}
{% capture description %}
Closes a window, but does not free the memory.
 This prevents segfaults when calling functions on this window. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val destroy : t -> unit
{% endcapture %}
{% capture description %}
Destroys and frees the window from the memory 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val rect : t -> OgamlMath.IntRect.t
{% endcapture %}
{% capture description %}
Returns the rectangle associated to a window, in screen coordinates 
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.IntRect" %}

{% capture listing %}
val size : t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the size of a window
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector2i" %}

{% capture listing %}
val resize : t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Resize a window
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector2i" %}

{% capture listing %}
val is_open : t -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the window is open 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val has_focus : t -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the window has the focus 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val poll_event : t -> Event.t option
{% endcapture %}
{% capture description %}
Returns the next event on the stack for this window
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlCore.Event" %}

{% capture listing %}
val display : t -> unit
{% endcapture %}
{% capture description %}
Displays the window after all the GL calls 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

