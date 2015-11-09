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
{% assign values = "" %}
{% assign values = values | append: "£Closed§The user asked for the window to close." %}
{% assign values = values | append: "£KeyPressed     of KeyEvent.t§A key was pressed." %}
{% assign values = values | append: "£KeyReleased    of KeyEvent.t§A key was released." %}
{% assign values = values | append: "£ButtonPressed  of ButtonEvent.t§A mouse button was pressed." %}
{% assign values = values | append: "£ButtonReleased of ButtonEvent.t§A mouse button was released." %}
{% assign values = values | append: "£MouseMoved     of MouseEvent.t§The mouse was moved." %}
{% include docelem.html listing=listing description=description values=values %}
