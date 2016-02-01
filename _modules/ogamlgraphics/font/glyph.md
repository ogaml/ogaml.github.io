---
modulename: Glyph 
prefix: OgamlGraphics.Font
abstract: Representation of a character
---


This module encapsulates the data associated to a character's glyph.<br/>
 All coordinates are given relatively to the
 glyph's origin, and with an up-increasing Y coordinate
{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a glyph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val advance : t -> float
{% endcapture %}
{% capture description %}
Space between the origin of this glyph and the origin of the next glyph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val bearing : t -> OgamlMath.Vector2f.t
{% endcapture %}
{% capture description %}
Returns the offset between the origin and the top-left corner of the glyph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val rect : t -> OgamlMath.FloatRect.t
{% endcapture %}
{% capture description %}
Returns the bouding rectangle of the glyph
 relatively to the origin
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

