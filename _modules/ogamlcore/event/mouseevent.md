---
modulename: MouseEvent
prefix: OgamlCore.Event
abstract: Mouse movement event information
---

This module simply defines a structure to get information about the mouse
location when it has been moved by the user.

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
A {% include inline-ocaml.html code="struct" %} containing mouse movement event
information.
{% endcapture %}
{% include values_reset.html %}
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
{% include docelem.html listing=listing description=description struct_values=values open='' %}
