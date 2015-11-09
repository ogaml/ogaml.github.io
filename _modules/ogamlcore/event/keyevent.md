---
modulename: KeyEvent
prefix: OgamlCore.Event
abstract: key event information
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
A `struct` containing key event information.
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="key : Keycode.t" desc="The key corresponding to the event." %}
{% include add_value.html value="shift : bool" desc="`true` iff the shift modifier was down." %}
{% include add_value.html value="control : bool" desc="`true` iff the control (command on OS X) modifier was down." %}
{% include add_value.html value="alt : bool" desc="`true` iff the alt modifier was down." %}
{% include docelem.html listing=listing description=description struct_values=values related="OgamlCore.Keycode" %}
