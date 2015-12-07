---
modulename: Keyboard 
prefix: OgamlCore.LL
abstract: Getting real-time keyboard information
---


This module provides a low-level access to the keyboard
 in real-time. You should probably use the OgamlGraphics.Keyboard
 wrapper instead.
{% capture listing %}
val is_pressed : Keycode.t -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the given key is pressed
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlCore.Keycode" %}

{% capture listing %}
val is_shift_down : unit -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the shift modifier is currently active
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val is_ctrl_down : unit -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the ctrl modifier (or cmd under OSX) is currently active
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val is_alt_down : unit -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the alt modifier is currently active
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

