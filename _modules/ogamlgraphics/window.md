---
modulename: Window 
prefix: OgamlGraphics
abstract: High-level window wrapper for rendering and event management 
---


This module provides a high-level wrapper around the low-level
 window interface of OgamlCore and also provides drawing functions.<br/>
 Windows encapsulate a copy of the GL state that can be retrieved
 to obtain information about the GL context. 
### Error Handling 

{% capture listing %}
exception Missing_uniform of string
{% endcapture %}
{% capture description %}
Raised if a uniform variable is missing when calling draw 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Invalid_uniform of string
{% endcapture %}
{% capture description %}
Raised when calling draw if a uniform variable has an incorrect type 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

### Window creation 

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
The type of a window 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : width:int -> height:int -> settings:ContextSettings.t -> t
{% endcapture %}
{% capture description %}
Creates a window of size {% include inline-ocaml.html code="width" %} x {% include inline-ocaml.html code="height" %}.
 This window will create its openGL context following the specified settings.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.ContextSettings" %}

{% capture listing %}
val close : t -> unit
{% endcapture %}
{% capture description %}
Closes a window, but does not free the memory.
 This should prevent segfaults when calling functions on this window. 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val destroy : t -> unit
{% endcapture %}
{% capture description %}
Frees the window and the memory 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

### Information About Windows 

{% capture listing %}
val size : t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns in pixel the width and height of the window
 (it only takes into account the size of the content where you can draw, *ie* the useful information).
 i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val is_open : t -> bool
{% endcapture %}
{% capture description %}
Tells whether the window is currently open 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val has_focus : t -> bool
{% endcapture %}
{% capture description %}
Return true iff the window has the focus 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

### Event Handling 

{% capture listing %}
val poll_event : t -> OgamlCore.Event.t option
{% endcapture %}
{% capture description %}
Returns the next event on the event stack, or None if the stack is empty.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlCore.Event" %}

### Displaying and Drawing 

{% capture listing %}
val display : t -> unit
{% endcapture %}
{% capture description %}
Displays the window after the GL calls 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val clear : t -> unit
{% endcapture %}
{% capture description %}
Clears the window 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val state : t -> State.t
{% endcapture %}
{% capture description %}
Returns the internal GL state of the window
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.State" %}

