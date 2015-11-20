---
modulename: ButtonEvent 
prefix: OgamlCore.Event
abstract: Mouse button event information 
---


This module defines a public structure encapsulating information
 about a mouse button event 
{% capture listing %}
type t = {button : Button.t; x : int; y : int; shift : bool; control : bool; alt : bool}
{% endcapture %}
{% capture description %}
A record containing information about a mouse event 
{% endcapture %}
{% include add_value.html value="button : Button.t" desc=" Button corresponding to the event " %}
{% include add_value.html value="x : int" desc=" X position of the mouse when the event was triggered " %}
{% include add_value.html value="y : int" desc=" Y position of the mouse when the event was triggered " %}
{% include add_value.html value="shift : bool" desc=" $true$ iff the shift modifier was active during the event " %}
{% include add_value.html value="control : bool" desc=" $true$ iff the ctrl modifier (or cmd under OSX) was active during the event " %}
{% include add_value.html value="alt : bool" desc=" $true$ iff the alt modifier was active during the event " %}

{% include docelem.html listing=listing description=description struct_values=values related="OgamlCore.Button" %}

