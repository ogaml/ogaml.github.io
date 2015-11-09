---
modulename: Event
prefix: OgamlCore
abstract: contains all kinds of events
---

### Type of Events

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
A variant type describing the possible events.
{% endcapture %}
{% include values_reset.html %}
{% include add_value.html value="Closed" desc="The user asked for the window to close." %}
{% include add_value.html value="KeyPressed     of KeyEvent.t" desc="A key was pressed." %}
{% include add_value.html value="KeyReleased    of KeyEvent.t" desc="A key was released." %}
{% include add_value.html value="ButtonPressed  of ButtonEvent.t" desc="A mouse button was pressed." %}
{% include add_value.html value="ButtonReleased of ButtonEvent.t" desc="A mouse button was released." %}
{% include add_value.html value="MouseMoved     of MouseEvent.t" desc="The mouse was moved." %}
{% include docelem.html listing=listing description=description values=values %}
