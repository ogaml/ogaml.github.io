---
modulename: Keyboard
prefix: OgamlCore.LL
abstract: Getting real-time keyboard information
---

### Polling Keyboard

{% capture listing %}
val is_pressed : Keycode.t -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code='is_pressed key' %} will return
{% include inline-ocaml.html code='true' %} iff
{% include inline-ocaml.html code='key' %} is currently down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlCore.Keycode" %}

### Accessing Modifiers Information

{% capture listing %}
val is_shift_down : unit -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code='true' %} iff the shift modifier is currently
down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_ctrl_down : unit -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code='true' %} iff the control (or command on OSX)
modifier is currently down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_alt_down : unit -> bool
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code='true' %} iff the alt modifier is currently
down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description %}
