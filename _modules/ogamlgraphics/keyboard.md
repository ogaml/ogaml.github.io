---
modulename: Keyboard
prefix: OgamlGraphics
abstract: Getting real-time keyboard information
---

### Polling Keyboard

{% capture listing %}
val is_pressed : Keycode.t -> bool
{% endcapture %}
{% capture description %}
`is_pressed key` will return `true` iff `key` is currently down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlCore.Keycode" %}

### Accessing Modifiers Information

{% capture listing %}
val is_shift_down : unit -> bool
{% endcapture %}
{% capture description %}
`true` iff the shift modifier is currently down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_ctrl_down : unit -> bool
{% endcapture %}
{% capture description %}
`true` iff the control (or command on OSX) modifier is currently down on the
keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_alt_down : unit -> bool
{% endcapture %}
{% capture description %}
`true` iff the alt modifier is currently down on the keyboard.
{% endcapture %}
{% include docelem.html listing=listing description=description %}
