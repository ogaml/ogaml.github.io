---
modulename: Button
prefix: OgamlCore
abstract: mouse buttons
---

This module consists of only one type.

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
| Values         | Description                                                                                  |
|:---------------|:---------------------------------------------------------------------------------------------|
| `Unknown`      | Used when an unrecognized mouse button is triggered. You don't usually need to listen on it. |
| `Left`         |                                                                                              |
| `Right`        |                                                                                              |
| `Middle`       |                                                                                              |
{% endcapture %}
{% include docelem.html listing=listing description=description %}
