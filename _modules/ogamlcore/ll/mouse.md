---
modulename: Mouse
prefix: OgamlCore.LL
abstract: Getting real-time mouse information
---

### Accessing Position

{% capture listing %}
val position : unit -> (int * int)
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="let (x,y) = position ()" %} assigns
the number of pixels from the left of the screen in
{% include inline-ocaml.html code="x" %} and the number of pixels from the top
in {% include inline-ocaml.html code="y" %}.
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
