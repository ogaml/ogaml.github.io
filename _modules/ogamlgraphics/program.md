---
modulename: Program 
prefix: OgamlGraphics
abstract: High-level wrapper around GL shader programs 
---

{% capture listing %}
exception Compilation_error of string
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Linking_error of string
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
exception Invalid_version of string
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
type src = [`File of string | `String of string]
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val from_source : vertex_source:src -> fragment_source:src -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val from_source_list : State.t -> vertex_source:(int * src) list -> fragment_source:(int * src) list -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val from_source_pp : State.t -> vertex_source:src -> fragment_source:src -> t
{% endcapture %}
{% capture description %}

{% endcapture %}

{% include docelem.html listing=listing description=description  %}

