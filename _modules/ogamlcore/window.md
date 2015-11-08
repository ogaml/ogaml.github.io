---
modulename: Window
parent: OgamlCore
abstract: Window management
---

### Creating a Window

```ocaml
type t
```
This is the type of a Window.

```ocaml
val create : width:int -> height:int -> t
```
Creates a window of size `width` x `height`.
