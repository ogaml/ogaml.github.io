---
modulename: Mouse 
prefix: OgamlGraphics
abstract: Getting real-time mouse information 
---

### Accessing position 


This module allows real-time access to the mouse,
 to check if a button is currently pressed for example. 
{% capture listing %}
val position : unit -> (int * int)
{% endcapture %}
{% capture description %}
Returns the position of the cursor relatively to the screen.<br/>
 {% include inline-ocaml.html code="let (x,y) = position ()" %} assigns the number of pixels from the left of 
 the screen to the cursor in {% include inline-ocaml.html code="x" %} and the number of pixels from the top in {% include inline-ocaml.html code="y" %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val relative_position : Window.t -> (int * int)
{% endcapture %}
{% capture description %}
Returns the position of the cursor relatively to a window.
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Window" %}

### Setting position 

{% capture listing %}
val set_position : (int * int) -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor relatively to the screen 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val set_relative_position : Window.t -> (int * int) -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor relatively to a window 
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Window" %}

### Accessing button information 

{% capture listing %}
val is_pressed : OgamlCore.Button.t -> bool
{% endcapture %}
{% capture description %}
Check whether a given mouse button is currently held down
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlCore.Button" %}

