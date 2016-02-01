---
modulename: Q 
prefix: OgamlUtils.PriorityQueue
abstract: Type of PriorityQueue.Make
---


This module provides a basic implementation of priority queues
{% capture listing %}
exception Empty
{% endcapture %}
{% capture description %}
Raised when a queue is empty
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type priority
{% endcapture %}
{% capture description %}
Priorities used by the queue
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type 'a t
{% endcapture %}
{% capture description %}
Type of a queue storing elements of type {% include inline-ocaml.html code="'a" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val empty : 'a t
{% endcapture %}
{% capture description %}
Empty queue
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val is_empty : 'a t -> bool
{% endcapture %}
{% capture description %}
Returns {% include inline-ocaml.html code="true" %} iff the queue is empty
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val singleton : priority -> 'a -> 'a t
{% endcapture %}
{% capture description %}
Singleton queue
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val merge : 'a t -> 'a t -> 'a t
{% endcapture %}
{% capture description %}
Merges two queues
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val insert : 'a t -> priority -> 'a -> 'a t
{% endcapture %}
{% capture description %}
Inserts an element with a given priority
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val top : 'a t -> 'a
{% endcapture %}
{% capture description %}
Returns the top element of a queue<br/>
 Raises {% include inline-ocaml.html code="Empty" %} if the queue is empty
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val pop : 'a t -> 'a t
{% endcapture %}
{% capture description %}
Removes the top element of a queue<br/>
 Raises {% include inline-ocaml.html code="Empty" %} if the queue is empty
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val extract : 'a t -> ('a * 'a t)
{% endcapture %}
{% capture description %}
Returns the top element of a queue and the queue without its
 first element<br/>
 Raises {% include inline-ocaml.html code="Empty" %} if the queue is empty
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

