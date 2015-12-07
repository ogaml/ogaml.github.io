---
modulename: Event 
prefix: OgamlCore
abstract: Contains all events 
---

{% capture listing %}
type t = ...
{% endcapture %}
{% capture description %}
A variant type describing the possible events 
{% endcapture %}
{% include add_value.html value="Closed" desc=" The window sending the event has been closed " %}
{% include add_value.html value="Resized" desc=" The window has been resized by the user " %}
{% include add_value.html value="KeyPressed of KeyEvent.t" desc=" A key has been pressed " %}
{% include add_value.html value="KeyReleased of KeyEvent.t" desc=" A key has been released " %}
{% include add_value.html value="ButtonPressed of ButtonEvent.t" desc=" A mouse button has been pressed " %}
{% include add_value.html value="ButtonReleased of ButtonEvent.t" desc=" A mouse button has been released " %}
{% include add_value.html value="MouseMoved of MouseEvent.t" desc=" The mouse has been moved " %}

{% include docelem.html listing=listing description=description values=values related="OgamlCore.Event.KeyEvent" related="OgamlCore.Event.ButtonEvent" related="OgamlCore.Event.MouseEvent" %}

