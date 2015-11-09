---
modulename: Button
prefix: OgamlCore
abstract: mouse buttons
---

This module consists of only one type.

{% capture listing %}
type t
{% endcapture %}
{% include values_reset.html %}
{% capture desc %}
Used when an unrecognized mouse button is triggered. You don't usually need to listen on it.
{% endcapture %}
{% include add_value.html value="Unknown" desc=desc %}
{% include add_value.html value="Left" %}
{% include add_value.html value="Right" %}
{% include add_value.html value="Middle" %}
{% include docelem.html listing=listing values=values %}
