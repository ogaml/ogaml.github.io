---
modulename: ContextSettings 
prefix: OgamlCore
abstract: Encapsulates data for context creation
---


This module encapsulates the settings used to create a GL context
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of the settings structure
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create : ?depth:int -> ?stencil:int -> ?msaa:int -> ?resizable:bool -> ?fullscreen:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates new settings using the following parameters :<br/>
   {% include inline-ocaml.html code="depth" %} - bits allocated to the depth buffer (defaults to 24)<br/>
   {% include inline-ocaml.html code="stencil" %} - bits allocated to the stencil buffer (defaults to 0)<br/>
   {% include inline-ocaml.html code="msaa" %} - MSAA level (defaults to 0)<br/>
   {% include inline-ocaml.html code="resizable" %} - requests a resizable context (defaults to true)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val aa_level : t -> int
{% endcapture %}
{% capture description %}
Returns the requested AA level
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val depth_bits : t -> int
{% endcapture %}
{% capture description %}
Returns the requested number of depth buffer bits
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val stencil_bits : t -> int
{% endcapture %}
{% capture description %}
Returns the requested number of stencil buffer bits
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val resizable : t -> bool
{% endcapture %}
{% capture description %}
Returns true iff the settings require a resizable window
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val fullscreen : t -> bool
{% endcapture %}
{% capture description %}
Returns true iff the settings require fullscreen mode
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

