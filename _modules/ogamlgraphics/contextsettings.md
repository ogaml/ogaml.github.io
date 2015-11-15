---
modulename: ContextSettings
prefix: OgamlGraphics
abstract: Encapsulates data for context creation
---


{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of the settings structure
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val create : ?color:Color.t -> ?clear_color:bool -> ?depth:bool -> ?stencil:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates new settings using the following parameters :

  - color - background color used when clearing (defaults to opaque black)

  - clear_color - whether to clear the color buffer or not when calling clear (defaults to true)

  - depth - whether to clear the depth buffer or not when calling clear (defaults to true)

  - stencil - whether to clear the stencil buffer or not when calling clear (defauls to false)

{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlGraphics.Color" %}

{% capture listing %}
val color : t -> Color.t
{% endcapture %}
{% capture description %}
Returns the background color requested by those settings
{% endcapture %}
{% include docelem.html listing=listing description=description related="OgamlGraphics.Color" %}

{% capture listing %}
val color_clearing : t -> bool
{% endcapture %}
{% capture description %}
Returns true iff the settings request the color buffer to be cleared
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val depth_testing : t -> bool
{% endcapture %}
{% capture description %}
Returns true iff the settings request the depth buffer to be cleared
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val stenciling : t -> bool
{% endcapture %}
{% capture description %}
Returns true iff the settings request the stencil buffer to be cleared
{% endcapture %}
{% include docelem.html listing=listing description=description %}

