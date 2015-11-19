---
modulename: Poly 
prefix: OgamlGraphics
abstract: Creation of basic polygons and polyhedra 
---


This module provides helper functions that construct 
 various polygons and polyhedra 
{% capture listing %}
val cube : VertexArray.Source.t -> OgamlMath.Vector3f.t -> OgamlMath.Vector3f.t -> VertexArray.Source.t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="cube source corner size" %} appends to {% include inline-ocaml.html code="source" %} some CCW-oriented 
 triangles forming a cube whose bottom-left-back vertex is {% include inline-ocaml.html code="corner" %} and of 
 a given {% include inline-ocaml.html code="size" %}. Use Triangles as DrawMode with this source.
     * f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Source" related="OgamlMath.Vector" %}

{% capture listing %}
val axis : VertexArray.Source.t -> OgamlMath.Vector3f.t -> OgamlMath.Vector3f.t -> VertexArray.Source.t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="axis source min max" %} appends to {% include inline-ocaml.html code="source" %} 3 axis going
 from {% include inline-ocaml.html code="min.x" %} to {% include inline-ocaml.html code="max.x" %}, {% include inline-ocaml.html code="min.y" %} to {% include inline-ocaml.html code="max.y" %} and {% include inline-ocaml.html code="min.z" %} to {% include inline-ocaml.html code="max.z" %}.
 Use Lines as DrawMode with this source. 
     * f 
{% endcapture %}

{% include docelem.html listing=listing description=description  related="OgamlGraphics.VertexArray.Source" related="OgamlMath.Vector" %}

