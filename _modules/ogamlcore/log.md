---
modulename: Log 
prefix: OgamlCore
abstract: Log system 
---


This module provides a very simple log system to use with Ogaml 
{% capture listing %}
type level = 
| Debug
| Warn
| Error
| Info
| Fatal
{% endcapture %}
{% capture description %}
Enumeration of log message levels 
{% endcapture %}
{% include add_value.html value="Debug" %}
{% include add_value.html value="Warn" %}
{% include add_value.html value="Error" %}
{% include add_value.html value="Info" %}
{% include add_value.html value="Fatal" %}

{% include docelem.html listing=listing description=description values=values %}

{% capture listing %}
type t
{% endcapture %}
{% capture description %}
Type of a log 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val create : ?output:out_channel -> ?debug:bool -> ?color:bool -> ?short:bool -> unit -> t
{% endcapture %}
{% capture description %}
Creates a log<br/>
 - output : output channel of log messages (defaults to stderr)<br/>
 - debug : if false, debug messages will be ignored (defaults to true)<br/>
 - color : if false, messages will not be colored (defaults to true)<br/>
 - short : if true, timestamps will be shortened (defaults to false) 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val log : t -> level -> ('a, out_channel, unit) format -> 'a
{% endcapture %}
{% capture description %}
Logs a message 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val debug : t -> ('a, out_channel, unit) format -> 'a
{% endcapture %}
{% capture description %}
Logs a debug message 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val warn : t -> ('a, out_channel, unit) format -> 'a
{% endcapture %}
{% capture description %}
Logs a warn message 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val error : t -> ('a, out_channel, unit) format -> 'a
{% endcapture %}
{% capture description %}
Logs an error message 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val info : t -> ('a, out_channel, unit) format -> 'a
{% endcapture %}
{% capture description %}
Logs an info message 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

{% capture listing %}
val fatal : t -> ('a, out_channel, unit) format -> 'a
{% endcapture %}
{% capture description %}
Logs a fatal error message 
{% endcapture %}

{% include docelem.html listing=listing description=description  %}

