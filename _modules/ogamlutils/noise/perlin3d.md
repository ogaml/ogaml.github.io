---
modulename: Perlin3D 
prefix: OgamlUtils.Noise
abstract: 3D Perlin noise
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a 3D Perlin noise
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create : unit -> t
{% endcapture %}
{% capture description %}
Creates a 3D Perlin noise with the current random state
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val create_with_seed : Random.State.t -> t
{% endcapture %}
{% capture description %}
Creates a 3D Perlin noise with a custom random state
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val get : t -> OgamlMath.Vector3f.t -> float
{% endcapture %}
{% capture description %}
Gets the value of a 3D noise at a given point
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

