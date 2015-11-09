---
modulename: Window
prefix: OgamlCore.LL
abstract: Window management
---

Here we can start with a discussion about how to (and not to) use this module.
We can also provide overall examples easily.
Once we are done with that we can start listing the content of the module.

Remember we can quote code to show examples.

```ocaml
let win = Window.create ~width:800 ~height:640 in
Window.display win
```

And even with line numbering.

{% highlight ocaml linenos %}
let win = Window.create ~width:800 ~height:640 in
Window.display win
{% endhighlight %}

### Creating a Window

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
This is the type of a Window.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val create : width:int -> height:int -> t
{% endcapture %}
{% capture description %}
Creates a window of size `width` x `height`.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Closing and destroying a Window

{% capture listing %}
val close : t -> unit
{% endcapture %}
{% capture description %}
Closes a window, but does not free the memory.
This should prevent segfaults when calling functions on this window.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val destroy : t -> unit
{% endcapture %}
{% capture description %}
Free the window and the memory.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Properties

{% capture listing %}
val size : t -> (int * int)
{% endcapture %}
{% capture description %}
Return the size of a window in pixels.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val is_open : t -> bool
{% endcapture %}
{% capture description %}
Return `true` iff the window is open.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

{% capture listing %}
val has_focus : t -> bool
{% endcapture %}
{% capture description %}
Return `true` iff the window has the focus.
This should prove useful when one wants to access the mouse or keyboard
directly.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Handling of events

{% capture listing %}
val poll_event : t -> Event.t option
{% endcapture %}
{% capture description %}
Return the event at the top of the stack, if it exists.
{% endcapture %}
{% include docelem.html listing=listing description=description %}

### Displaying

{% capture listing %}
val display : t -> unit
{% endcapture %}
{% capture description %}
Display the window after the GL calls.
{% endcapture %}
{% include docelem.html listing=listing description=description %}
