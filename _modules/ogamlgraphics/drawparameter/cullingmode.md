---
modulename: CullingMode 
prefix: OgamlGraphics.DrawParameter
abstract: Culling modes enumeration
---


This module consists of only one type enumerating OpenGL culling modes
{% capture listing %}
type t = 
| CullNone
| CullClockwise
| CullCounterClockwise
{% endcapture %}
{% capture description %}
Backface culling modes
{% endcapture %}
{% include add_value.html value="CullNone" desc=" Culls no face (default) " %}
{% include add_value.html value="CullClockwise" desc=" Culls all faces displayed in CW order from the camera POV " %}
{% include add_value.html value="CullCounterClockwise" desc=" Same with CCW " %}

{% include docelem.html listing=listing description=description values=values  %}

