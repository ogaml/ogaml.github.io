---
modulename: G 
prefix: OgamlUtils.Graph
abstract: Output of Graph.Make
---

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type vertex
{% endcapture %}
{% capture description %}
Type of a vertex
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val empty : t
{% endcapture %}
{% capture description %}
Empty graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val vertices : t -> int
{% endcapture %}
{% capture description %}
Returns the number of vertices of a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val edges : t -> int
{% endcapture %}
{% capture description %}
Returns the number of edges of a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val iter_vertices : t -> (vertex -> unit) -> unit
{% endcapture %}
{% capture description %}
Iterates through all the vertices of a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val fold_vertices : t -> (vertex -> 'a -> 'a) -> 'a -> 'a
{% endcapture %}
{% capture description %}
Folds through all the vertices of a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val iter_edges : t -> (vertex -> vertex -> unit) -> unit
{% endcapture %}
{% capture description %}
Iterates through all the edges of a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val add_vertex : t -> vertex -> t
{% endcapture %}
{% capture description %}
Adds a vertex to a graph
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val add_edge : t -> ?cost:float -> vertex -> vertex -> t
{% endcapture %}
{% capture description %}
Adds an edge with an optional cost to a graph (adds the vertices if needed)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val add : ?cost:float -> vertex -> vertex -> t -> t
{% endcapture %}
{% capture description %}
Tail-call alias for {% include inline-ocaml.html code="add_edge" %} (for easy composition)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val remove_edge : t -> vertex -> vertex -> t
{% endcapture %}
{% capture description %}
Removes an edge from a graph (does nothing if the edge does not exist)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val remove_vertex : t -> vertex -> t
{% endcapture %}
{% capture description %}
Removes a vertex from a graph (and all of its adjacent edges)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val neighbours : t -> vertex -> vertex list
{% endcapture %}
{% capture description %}
Returns all the neighbours of a vertex
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val merge : t -> t -> t
{% endcapture %}
{% capture description %}
Merges two graphs
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val dfs : t -> vertex -> (vertex -> unit) -> unit
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="dfs g s f" %} iterates {% include inline-ocaml.html code="f" %} through all the vertices of {% include inline-ocaml.html code="g" %}, 
 starting from {% include inline-ocaml.html code="s" %} using a dfs
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val bfs : t -> vertex -> (vertex -> unit) -> unit
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="bfs g s f" %} iterates {% include inline-ocaml.html code="f" %} through all the vertices of {% include inline-ocaml.html code="g" %}, 
 starting from {% include inline-ocaml.html code="s" %} using a bfs
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val dijkstra : t -> vertex -> vertex -> (float * vertex list) option
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="dijkstra g v1 v2" %} runs Dijkstra's algorithm on {% include inline-ocaml.html code="g" %} from {% include inline-ocaml.html code="v1" %} to {% include inline-ocaml.html code="v2" %}
 and returns the minimal path as well as the distance between {% include inline-ocaml.html code="v1" %} and {% include inline-ocaml.html code="v2" %},
 or {% include inline-ocaml.html code="None" %} if {% include inline-ocaml.html code="v1" %} and {% include inline-ocaml.html code="v2" %} are not connected
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val astar : t -> vertex -> vertex -> (vertex -> float) -> (float * vertex list) option
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="astar g v1 v2 f" %} runs the A* algorithm on {% include inline-ocaml.html code="g" %} from {% include inline-ocaml.html code="v1" %} to {% include inline-ocaml.html code="v2" %}
 with the heuristic {% include inline-ocaml.html code="f" %} and returns the minimal path as well as the 
 distance between {% include inline-ocaml.html code="v1" %} and {% include inline-ocaml.html code="v2" %}, or {% include inline-ocaml.html code="None" %} if {% include inline-ocaml.html code="v1" %} and {% include inline-ocaml.html code="v2" %} are not connected
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

