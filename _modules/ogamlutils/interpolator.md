---
modulename: Interpolator 
prefix: OgamlUtils
abstract: Interpolation between multiple values
---


This module defines interpolators between two values.<br/>
 An interpolator between value v0 and v1 is a function
 f such that f(0) = v0, f(1) = v1.
{% capture listing %}
type 'a t
{% endcapture %}
{% capture description %}
Type of an interpolator returning type 'a
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
exception Invalid_interpolator of string
{% endcapture %}
{% capture description %}
Raised when an error occurs during the creation of an interpolator
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Accessors and modifiers


Those functions provide a way to modify the behaviour
 of interpolators.<br/>
 Unless otherwise specified, the modifiers applied to 
 an interpolator are kept by all subsequent operations. 
 This means that, for example, passing a time-based 
 interpolator to {% include inline-ocaml.html code="map" %} will return a new time-based 
 interpolator.
{% capture listing %}
val get : 'a t -> float -> 'a
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="get ip t" %} returns the value of the interpolator {% include inline-ocaml.html code="ip" %} 
 at time {% include inline-ocaml.html code="t" %} in [0;1]
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val current : 'a t -> 'a
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="current ip" %} returns the current value of a time-based
 interpolator (see function start).<br/>
 If {% include inline-ocaml.html code="ip" %} is not time-based then the result is {% include inline-ocaml.html code="ip(0)" %}.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val start : 'a t -> float -> float -> 'a t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="start ip t dt" %} returns a new time-based interpolator 
 {% include inline-ocaml.html code="tip" %} such that :<br/>
 {% include inline-ocaml.html code="current tip" %} = {% include inline-ocaml.html code="ip(0)" %} at time {% include inline-ocaml.html code="t" %}<br/>
 {% include inline-ocaml.html code="current tip" %} = {% include inline-ocaml.html code="ip(1)" %} at time {% include inline-ocaml.html code="t + dt" %}<br/>
 {% include inline-ocaml.html code="t" %} and {% include inline-ocaml.html code="dt" %} are given in seconds. 
 {% include inline-ocaml.html code="t = Unix.gettimeofday()" %} means that {% include inline-ocaml.html code="tip" %} starts immediately.<br/>
 If {% include inline-ocaml.html code="dt = 0" %} then {% include inline-ocaml.html code="current" %} will always return {% include inline-ocaml.html code="ip(0)" %}<br/>
 The result of {% include inline-ocaml.html code="get" %} on the {% include inline-ocaml.html code="tip" %} is left unchanged.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val repeat : 'a t -> 'a t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="repeat ip" %} returns a repeating interpolator {% include inline-ocaml.html code="lip" %} from {% include inline-ocaml.html code="ip" %} such that
 {% include inline-ocaml.html code="lip(x)" %} = {% include inline-ocaml.html code="ip(x)" %} for {% include inline-ocaml.html code="x" %} in [0;1] and {% include inline-ocaml.html code="lip" %} is 1-periodic.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val loop : 'a t -> 'a t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="loop ip" %} returns a repeating interpolator {% include inline-ocaml.html code="lip" %} from {% include inline-ocaml.html code="ip" %} such that :<br/>
 {% include inline-ocaml.html code="lip(x)" %} = {% include inline-ocaml.html code="ip(x)" %} for {% include inline-ocaml.html code="x" %} in [0;1] <br/>
 {% include inline-ocaml.html code="lip(x)" %} = {% include inline-ocaml.html code="ip(2-x)" %} for {% include inline-ocaml.html code="x" %} in [1;2]<br/>
 {% include inline-ocaml.html code="lip(x)" %} is 2-periodic
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Constructors


Those functions provide a way to construct various (and even
 user-defined) interpolators.<br/>
 Unless otherwise specified, parameters are clamped to
 [0;1], that is ip(x) for x < 0 equals ip(0) and ip(x) for
 x > 1 equals ip(1) <br/>
 Most constructors require a list of points of the form {% include inline-ocaml.html code="(dt, v)" %}
 such that the created interpolator will take the value {% include inline-ocaml.html code="v" %}
 at time {% include inline-ocaml.html code="dt" %}.<br/>
 The {% include inline-ocaml.html code="cst_*" %} variants create constant-speed interpolators 
 so the {% include inline-ocaml.html code="dt" %} parameter is not required.
{% capture listing %}
val custom : (float -> 'a) -> 'a t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="custom f" %} returns a custom interpolator that coincides with  
 the function {% include inline-ocaml.html code="f" %} on [0;1] and equals f(0) or f(1) elsewhere.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val copy : (float -> 'a) -> 'a t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="copy f" %} returns a custom interpolator that coincides with  
 the function {% include inline-ocaml.html code="f" %} everywhere
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val constant : float -> float t
{% endcapture %}
{% capture description %}
Returns a constant interpolator
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val linear : float -> (float * float) list -> float -> float t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="linear start steps end" %} creates a linear interpolator
 going from {% include inline-ocaml.html code="start" %} to {% include inline-ocaml.html code="end" %} passing through each point
 {% include inline-ocaml.html code="(dt, pos)" %} of {% include inline-ocaml.html code="steps" %} at time {% include inline-ocaml.html code="dt" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val cst_linear : float -> float list -> float -> float t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="cst_linear start steps end" %} creates a linear interpolator 
 going from {% include inline-ocaml.html code="start" %} to {% include inline-ocaml.html code="end" %} passing through each point 
 of {% include inline-ocaml.html code="steps" %} at constant speed
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val cubic : (float * float) -> (float * float) list -> (float * float) -> float t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="cubic (start, sm) steps (end, em)" %} creates a cubic spline interpolator
 going from {% include inline-ocaml.html code="start" %} with tangent {% include inline-ocaml.html code="sm" %} to {% include inline-ocaml.html code="end" %} with tangeant {% include inline-ocaml.html code="em" %}
 passing through each point {% include inline-ocaml.html code="(dt, pos)" %} of {% include inline-ocaml.html code="steps" %} at time {% include inline-ocaml.html code="dt" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val cst_cubic : (float * float) -> float list -> (float * float) -> float t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="cubic (start, sm) steps (end, em)" %} creates a cubic spline interpolator
 going from {% include inline-ocaml.html code="start" %} with tangent {% include inline-ocaml.html code="sm" %} to {% include inline-ocaml.html code="end" %} with tangeant {% include inline-ocaml.html code="em" %}
 passing through each point of {% include inline-ocaml.html code="steps" %} at constant speed
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

### Composition

{% capture listing %}
val compose : float t -> 'a t -> 'a t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="compose ip1 ip2" %} returns a new interpolator that takes the
 values of {% include inline-ocaml.html code="ip2" %} but using the values of {% include inline-ocaml.html code="ip1" %} as parameter<br/>
 The new interpolator will have the modifiers of {% include inline-ocaml.html code="ip1" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map : 'a t -> ('a -> 'b) -> 'b t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="map ip f" %} returns a new interpolator that takes
 the value of {% include inline-ocaml.html code="ip" %} and passes it to {% include inline-ocaml.html code="f" %}.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map_right : 'a t -> ('a -> 'b) -> 'b t
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="map_right" %} is an alias for {% include inline-ocaml.html code="map" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val map_left : ('a -> float) -> 'b t -> 'a -> 'b
{% endcapture %}
{% capture description %}
{% include inline-ocaml.html code="map_left f ip" %} returns a function {% include inline-ocaml.html code="g" %} such that 
 {% include inline-ocaml.html code="g(x) = ip(f(x))" %}
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val pair : 'a t -> 'b t -> ('a * 'b) t
{% endcapture %}
{% capture description %}
Returns a pair-interpolator from a pair of interpolators.
 
 The new interpolator will not have any modifiers.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val collapse : 'a t list -> 'a list t
{% endcapture %}
{% capture description %}
Returns a list-interpolator from a list of interpolators.<br/>
 The new interpolator will not have any modifiers.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val vector3f : float t -> float t -> float t -> OgamlMath.Vector3f.t t
{% endcapture %}
{% capture description %}
Returns a vector3f interpolator from three float interpolators. <br/>
 The new interpolator will not have any modifiers.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

{% capture listing %}
val vector2f : float t -> float t -> OgamlMath.Vector2f.t t
{% endcapture %}
{% capture description %}
Returns a vector2f interpolator from two float interpolators. <br/>
 The new interpolator will not have any modifiers.
{% endcapture %}

{% include docelem.html listing=listing description=description   %}

