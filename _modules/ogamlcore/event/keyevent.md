---
modulename: KeyEvent
prefix: OgamlCore.Event
abstract: Key event information
---

This module simply defines a structure to get information about a key that has
been pressed or released by the user.

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
A {% include inline-ocaml.html code="struct" %} containing key event
information.
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="key : Keycode.t" desc="The key corresponding to the event." %}
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
{% include docelem.html listing=listing description=description struct_values=values related="OgamlCore.Keycode" open='' %}
