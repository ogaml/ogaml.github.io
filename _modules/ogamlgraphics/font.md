---
modulename: Font 
prefix: OgamlGraphics
abstract: Information about a font
---


This module stores a font and dynamically
 loads sizes and glyphs as requested by the user
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a font
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type code = [`Char of char | `Code of int]
{% endcapture %}
{% capture description %}
Type alias for a character given in ASCII or UTF-8
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val load : string -> t
{% endcapture %}
{% capture description %}
Loads a font from a file
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val glyph : t -> code -> int -> bool -> Glyph.t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="glyph font code size bold" %} returns the glyph
 representing the character {% include inline-ocaml.html code="code" %} in {% include inline-ocaml.html code="font" %}
 of size {% include inline-ocaml.html code="size" %} and with the modifier {% include inline-ocaml.html code="bold" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val kerning : t -> code -> code -> int -> float
{% endcapture %}
{% capture description %}
Returns the kerning between two chars of
 a given size, that is the horizontal offset
 that must be applied between the two glyphs
 (usually negative)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val ascent : t -> int -> float
{% endcapture %}
{% capture description %}
Returns the coordinate above the baseline the font extends
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val descent : t -> int -> float
{% endcapture %}
{% capture description %}
Returns the coordinate below the baseline the font
 extends (usually negative)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val linegap : t -> int -> float
{% endcapture %}
{% capture description %}
Returns the distance between the descent of a line
 and the ascent of the next line
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val spacing : t -> int -> float
{% endcapture %}
{% capture description %}
Returns the space between the baseline of two lines
 (equals ascent + linegap - descent)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

