---
modulename: Mouse 
prefix: OgamlGraphics
abstract: Getting real-time mouse information 
---


This module allows real-time access to the mouse,
 to check if a button is currently pressed for example. 
### Accessing position 

{% capture listing %}
val position : unit -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the position of the cursor relatively to the screen.
 i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val relative_position : Window.t -> OgamlMath.Vector2i.t
{% endcapture %}
{% capture description %}
Returns the position of the cursor relatively to a window.
     * i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Window" related="OgamlMath.Vector" %}

### Setting position 

{% capture listing %}
val set_position : OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor relatively to the screen
 i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlMath.Vector" %}

{% capture listing %}
val set_relative_position : Window.t -> OgamlMath.Vector2i.t -> unit
{% endcapture %}
{% capture description %}
Sets the position of the cursor relatively to a window
     * i 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Window" related="OgamlMath.Vector" %}

### Accessing button information 

{% capture listing %}
val is_pressed : OgamlCore.Button.t -> bool
{% endcapture %}
{% capture description %}
Check whether a given mouse button is currently held down
 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlCore.Button" %}

