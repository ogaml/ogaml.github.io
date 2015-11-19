---
modulename: ContextSettings 
prefix: OgamlGraphics
abstract: Encapsulates data for context creation 
---


This module encapsulates the settings used to create a GL context 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of the settings structure 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : ?color:Color.t -> ?clear_color:bool -> ?depth:bool -> ?stencil:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates new settings using the following parameters : <br/>
   {% include inline-ocaml.html code="color" %} - background color used when clearing (defaults to opaque black) <br/>
   {% include inline-ocaml.html code="clear_color" %} - whether to clear the color buffer or not when calling clear (defaults to true) <br/>
   {% include inline-ocaml.html code="depth" %} - whether to clear the depth buffer or not when calling clear (defaults to true) <br/>
   {% include inline-ocaml.html code="stencil" %} - whether to clear the stencil buffer or not when calling clear (defaults to false) <br/>
     
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.Color" %}

