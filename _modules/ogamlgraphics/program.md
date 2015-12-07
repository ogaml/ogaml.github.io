---
modulename: Program 
prefix: OgamlGraphics
abstract: High-level wrapper around GL shader programs
---


This module provides a high-level wrapper around GL shader programs
 and can be used to compile shaders.
{% capture listing %}
exception Compilation_error of string
{% endcapture %}
{% capture description %}
Raised when the compilation of a program fails
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Linking_error of string
{% endcapture %}
{% capture description %}
Raised when the linking of a program fails
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Invalid_version of string
{% endcapture %}
{% capture description %}
Raised when trying to compile a program with a version
 that is not supported by the current context
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a program
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type src = [`File of string | `String of string]
{% endcapture %}
{% capture description %}
Type of a source, from a file or from a string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val from_source : vertex_source:src -> fragment_source:src -> t
{% endcapture %}
{% capture description %}
Compiles a program from a vertex source and a fragment source.
 The source must begin with a version assigment {% include inline-ocaml.html code="#version xxx" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val from_source_list : State.t -> vertex_source:(int * src) list -> fragment_source:(int * src) list -> t
{% endcapture %}
{% capture description %}
Compiles a program from a state (gotten from a window) and
 a list of sources paired with their required GLSL version.
 The function will chose the best source for the current context.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.State" %}

{% capture listing %}
val from_source_pp : State.t -> vertex_source:src -> fragment_source:src -> t
{% endcapture %}
{% capture description %}
Compiles a program from a vertex source and a fragment source.
 The source should not begin with a {% include inline-ocaml.html code="#version xxx" %} assignment,
 as the function will preprocess the sources and prepend the
 best version declaration.
{% endcapture %}

{% include docelem.html listing=listing description=description  related = "OgamlGraphics.State" %}

