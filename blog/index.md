---
layout: layout
title: Jon Kuperman
---

<div class="content">
  <div class="related">
      {% for post in site.posts limit:1 %}
      <h1>{{ post.title }}</h1>
      <div>
        {{ post.content }}
      </div>
      {% endfor %}
  </div>
  <a href="/archives.html" class="center button large">Read More Posts...</a>
</div>
