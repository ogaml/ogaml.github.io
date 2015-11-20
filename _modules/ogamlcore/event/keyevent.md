---
modulename: KeyEvent 
prefix: OgamlCore.Event
abstract: Key event information 
---


This module defines a public structure encapsulating information
 about a key event 
{% capture listing %}
type t = {key : Keycode.t; shift : bool; control : bool; alt : bool}
{% endcapture %}
{% capture description %}
A record containing information about a key event 
{% endcapture %}
{% include add_value.html value="key : Keycode.t" desc=" Key coresponding to the event " %}
{% include add_value.html value="shift : bool" desc=" $true$ iff the shift modifier was active during the event " %}
{% include add_value.html value="control : bool" desc=" $true$ iff the ctrl modifier (or cmd under OSX) was active during the event " %}
{% include add_value.html value="alt : bool" desc=" $true$ iff the alt modifier was active during the event " %}

{% include docelem.html listing=listing description=description struct_values=values related="OgamlCore.KeyCode" %}

