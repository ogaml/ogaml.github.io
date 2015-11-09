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
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Accessing Modifiers Information

{% capture listing %}
val is_shift_down : unit -> bool
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_ctrl_down : unit -> bool
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_alt_down : unit -> bool
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}
