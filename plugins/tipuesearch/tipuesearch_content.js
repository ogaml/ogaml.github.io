---
---
var tipuesearch = {"pages": [
  {% for module in site.modules %}
    {
      "title": "{% if module.prefix %}{{ module.prefix }}.{% endif %}{{ module.modulename }}",
      "text":  "{{ module.abstract }}",
      "tags":  "",
      "url":   "{{ module.url }}"
    }{% if forloop.rindex0 > 0 %},{% endif %}
  {% endfor %}
]};
