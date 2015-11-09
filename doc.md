---
layout: doc
title: Home
---

# Welcome to the documentation of OGAML

## Main modules

{% for module in site.modules %}
{% unless module.prefix %}
* [{{ module.modulename }}]({{ module.url }})
{% if module.abstract %}{{ module.abstract }}{% endif %}
{% endunless %}
{% endfor %}

## Example (triangle)
{% highlight ocaml %}
open OgamlGraphics
open OgamlMath

let window = Window.create ~width:800 ~height:600 

let vertex_shader_source = "
  in vec3 position;
  void main() {
    gl_Position = vec4(position, 1.0);
  }
"

let fragment_shader_source = "
  out vec4 out_color;
  void main() {
    out_color = vec4(1.0, 0.0, 0.0, 1.0);
  }
"

let program = 
  Program.from_source_pp 
    (Window.state window)
    ~vertex_source:(`String vertex_shader_source)
    ~fragment_source:(`String fragment_shader_source)

let vertex1 = 
  VertexArray.Vertex.create 
    ~position:Vector3f.({x = -0.75; y = -0.75; z = 0.0}) ()

let vertex2 = 
  VertexArray.Vertex.create
    ~position:(Vector3f.({x = 0.; y = 0.75; z = 0.0})) ()

let vertex3 =
  VertexArray.Vertex.create
    ~position:Vector3f.({x = 0.75; y = -0.75; z = 0.0}) ()

let vertex_source = VertexArray.Source.(
    empty ~position:"position" ~size:3 ()
    << vertex1 
    << vertex2 
    << vertex3
)

let vertices = VertexArray.static vertex_source DrawMode.Triangles

let parameters = DrawParameter.make ()

let uniform = Uniform.empty

let rec event_loop () =
  match Window.poll_event window with
  |Some e -> OgamlCore.Event.(
    match e with
    |Closed -> Window.close window
    | _     -> event_loop ()
  )
  |None -> ()

let rec main_loop () = 
  if Window.is_open window then begin 
    Window.clear window ~color:true ~stencil:false ~depth:false;
    Window.draw ~window ~vertices ~program ~parameters ~uniform;
    Window.display window;
    event_loop ();
    main_loop ();
  end

let () = main_loop ()
{% endhighlight %}




