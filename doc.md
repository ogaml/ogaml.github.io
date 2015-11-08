---
layout: doc
title: Home
---

# Welcome to the documentation of OGAML

-- *We'll work out the design later.*

## Main modules

{% for module in site.modules %}
### [{{ module.modulename }}]({{ module.url }})
{% endfor %}
