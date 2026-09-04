---
layout: splash
title: Gravesend Code Club
classes:
  - wide

excerpt: >
  Learn to code, make games, build projects and have fun with technology.
  Open to children in Gravesend and the surrounding area.

header:
  overlay_image: /assets/img/hero.webp
  overlay_filter: 0.4
  
  actions:
    - label: "Projects"
      url: /tags/project

---

{% include next-club-banner.html %}

<div class="entries-list">
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
</div>
