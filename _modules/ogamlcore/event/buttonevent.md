---
modulename: ButtonEvent
prefix: OgamlCore.Event
abstract: Button event information
---

This module simply defines a structure to get information about a button that
has been pressed or released by the user on the mouse.

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
A {% include inline-ocaml.html code="struct" %} containing mouse button event
information.
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="button : Button.t" desc="The mouse button corresponding to the event." %}
{% capture desc %}
The {% include inline-ocaml.html code="x" %}-coordinate of the mouse during the
event.
{% endcapture %}
{% include add_value.html value="x : int" desc=desc %}
{% capture desc %}
The {% include inline-ocaml.html code="y" %}-coordinate of the mouse during the
event.
{% endcapture %}
{% include add_value.html value="y : int" desc=desc %}
{% capture desc %}
{% include inline-ocaml.html code="true" %} iff the shift modifier was down.
{% endcapture %}
{% include add_value.html value="shift : bool" desc=desc %}
{% capture desc %}
{% include inline-ocaml.html code="true" %} iff the control (command on OS X)
modifier was down.
{% endcapture %}
{% include add_value.html value="control : bool" desc=desc %}
{% capture desc %}
{% include inline-ocaml.html code="true" %} iff the alt modifier was down.
{% endcapture %}
{% include add_value.html value="alt : bool" desc=desc %}
{% include docelem.html listing=listing description=description struct_values=values related="OgamlCore.Button" open='' %}
