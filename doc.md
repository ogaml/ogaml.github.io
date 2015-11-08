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
