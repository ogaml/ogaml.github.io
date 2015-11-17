---
modulename: GL
prefix: OgamlGraphics
abstract: Low-level, type-safe bindings of OpenGL functions
---

This module provides unsafe access to the internal openGL state.

All functions in this module modify the GL context without further verification.
Any call to one of these functions should be followed by an update of the
current window's {% include inline-ocaml code="State.t" %}.

**NOTE**: For internal use only, may cause bugs.
