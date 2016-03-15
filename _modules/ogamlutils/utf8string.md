---
modulename: UTF8String 
prefix: OgamlUtils
abstract: UTF-8 String representation and manipulation
---

{% capture listing %}
type code = int
{% endcapture %}
{% capture description %}
Type of a UTF-8 character code
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a UTF-8 encoded string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception UTF8_error of string
{% endcapture %}
{% capture description %}
Raised when a string is not correctly encoded
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Out_of_bounds of string
{% endcapture %}
{% capture description %}
Raised when an operation violates the bounds of the string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val empty : unit -> t
{% endcapture %}
{% capture description %}
Empty UTF-8 string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val make : int -> code -> t
{% endcapture %}
{% capture description %}
Makes a UTF-8 string filled with one character
 
 Raises UTF8_error if the code is not a valid UTF-8 character code
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val get : t -> int -> code
{% endcapture %}
{% capture description %}
Returns the ith character of a UTF-8 string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val set : t -> int -> code -> unit
{% endcapture %}
{% capture description %}
Sets the ith character of a UTF-8 string.<br/>
 Raises UTF8_error if the code is not a valid UTF-8 character code
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val length : t -> int
{% endcapture %}
{% capture description %}
Returns the length of a UTF-8 string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val byte_length : t -> int
{% endcapture %}
{% capture description %}
Returns the byte length of a UTF-8 string
 (the number of bytes required to encode it)
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val from_string : string -> t
{% endcapture %}
{% capture description %}
Returns a UTF-8 encoded string from a string.
 
 Raises UTF8_error if the string is not a valid UTF-8 encoding
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val to_string : t -> string
{% endcapture %}
{% capture description %}
Returns a string from a UTF-8 encoded string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val iter : t -> (code -> unit) -> unit
{% endcapture %}
{% capture description %}
Iterates through a UTF-8 string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val fold : t -> (code -> 'a -> 'a) -> 'a -> 'a
{% endcapture %}
{% capture description %}
Folds a UTF-8 string
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map : t -> (code -> code) -> t
{% endcapture %}
{% capture description %}
Maps a UTF-8 string<br/>
 Raises UTF8_error if the function returns an invalid UTF-8 code
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

