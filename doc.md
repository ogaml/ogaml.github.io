---
layout: doc
title: Home
---

# Welcome to the documentation of OGAML

-- *We'll work out the design later.*

## Main modules

{% for module in site.modules %}
{% unless module.parent %}
* [{{ module.modulename }}]({{ module.url }})
{% if module.abstract %}{{ module.abstract }}{% endif %}
{% endunless %}
{% endfor %}
