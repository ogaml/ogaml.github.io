---
modulename: Mouse 
prefix: OgamlCore.LL
abstract: Getting real-time mouse information
---


This modules provides a low-level access to the mouse
 in real-time. You should probably use the OgamlGraphics.Mouse
 wrapper instead.
{% capture listing %}
val position : unit -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the postion of the mouse in screen coordinates
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2i" %}

{% capture listing %}
val relative_position : Window.t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the position of the mouse relatively to a window
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlCore.LL.Window,OgamlMath.Vector2i" %}

{% capture listing %}
val set_position : OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor relatively to the screen
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlMath.Vector2i" %}

{% capture listing %}
val set_relative_position : Window.t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor relatively to a window
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlCore.LL.Window,OgamlMath.Vector2i" %}

{% capture listing %}
val is_pressed : Button.t -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the given button is currently held down
by the user
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlCore.Button" %}

