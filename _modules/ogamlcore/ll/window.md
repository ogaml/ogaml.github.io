---
modulename: Window
prefix: OgamlCore.LL
abstract: Window management
---

### Creating a Window

{% highlight ocaml %}
type t
{% endhighlight %}
This is the type of a Window.

{% highlight ocaml %}
val create : width:int -> height:int -> t
{% endhighlight %}
Creates a window of size `width` x `height`.
