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
the number of pixels from the left of the screen to the cursor in
{% include inline-ocaml.html code="x" %} and the number of pixels from the top
in {% include inline-ocaml.html code="y" %}.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val relative_position : Window.t -> (int * int)
{% endcapture %}
{% capture description %}
`relative_position window` returns the position of the cursor in window
coordinates.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlCore.LL.Window" %}

### Setting Position

{% capture listing %}
val set_position : (int * int) -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor in screen coordinates.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val set_relative_position : Window.t -> (int * int) -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor in window coordinates.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlCore.LL.Window" %}

### Accessing Button Information

{% capture listing %}
val is_pressed : Button.t -> bool
{% endcapture %}
{% capture description %}
Tells whether a given mouse button is currently held down by the user.
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlCore.Button" %}
