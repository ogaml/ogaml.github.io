---
modulename: Keyboard 
prefix: OgamlGraphics
abstract: Getting real-time keyboard information
---


This module allows real-time access to the keyboard,
 to check if a key is currently pressed for example.
### Polling keyboard

{% capture listing %}
val is_pressed : OgamlCore.Keycode.t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="is_pressed key" %} will return {% include inline-ocaml.html code="true" %} iff {% include inline-ocaml.html code="key" %} is currently pressed
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlCore.Keycode" %}

### Accessing modifiers information

{% capture listing %}
val is_shift_down : unit -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="true" %} iff the shift modifier is active
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val is_ctrl_down : unit -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="true" %} iff the control modifier (or cmd on OSX) is active
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val is_alt_down : unit -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="true" %} iff the alt modifier is active
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

