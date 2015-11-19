---
modulename: State 
prefix: OgamlGraphics
abstract: Encapsulates data about an OpenGL internal state 
---


This module encapsulates a copy of the internal GL state.
 This allows efficient optimizations of state changes 
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a GL state 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val version : t -> (int * int)
{% endcapture %}
{% capture description %}
Returns the GL version supported by this state in (major, minor) format 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val is_version_supported : t -> (int * int) -> bool
{% endcapture %}
{% capture description %}
Returns true iff the given GL version in (major, minor) format
 is supported by the given state 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val glsl_version : t -> int
{% endcapture %}
{% capture description %}
Returns the GLSL version supported by this state 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val is_glsl_version_supported : t -> int -> bool
{% endcapture %}
{% capture description %}
Returns true iff the given GLSL version is supported by this state 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

