---
modulename: Mouse
prefix: OgamlGraphics
abstract: Getting real-time mouse information
---

### Accessing Position

{% capture listing %}
val position : unit -> (int * int)
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val relative_position : Window.t -> (int * int)
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Setting Position

{% capture listing %}
val set_position : (int * int) -> unit
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val set_relative_position : Window.t -> (int * int) -> unit
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Accessing Button Information

{% capture listing %}
val is_pressed : Button.t -> bool
{% endcapture %}
{% capture description %}
...
{% endcapture %}
{% include docelem.html listing=listing description=description %}
