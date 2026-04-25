---
layout: page
permalink: /repositories/
title: repositories
description: Research software, analysis workflows, and selected public repositories.
nav: true
nav_order: 4
---

{% assign profile = site.data.repositories.profile %}

{% if profile %}
<div class="repo-profile">
  <div class="repo-profile__content">
    <p class="repo-profile__eyebrow">Code and workflows</p>
    <h2>{{ profile.title }}</h2>
    <p>{{ profile.summary }}</p>
  </div>
  {% if profile.links %}
  <div class="repo-profile__links">
    {% for link in profile.links %}
      <a class="repo-profile__link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
    {% endfor %}
  </div>
  {% endif %}
</div>
{% endif %}

{% if site.data.repositories.featured_repositories %}
<div class="repo-grid">
  {% for repository in site.data.repositories.featured_repositories %}
    {% assign repo_parts = repository.repo | split: '/' %}
    <article class="repo-card">
      <div class="repo-card__header">
        <p class="repo-card__category">{{ repository.category }}</p>
        <h3><a href="https://github.com/{{ repository.repo }}" target="_blank" rel="noopener noreferrer">{{ repository.title }}</a></h3>
      </div>
      <p class="repo-card__description">{{ repository.description }}</p>
      {% if repository.stack %}
      <div class="repo-card__stack">
        {% for item in repository.stack %}
          <span class="repo-chip">{{ item }}</span>
        {% endfor %}
      </div>
      {% endif %}
      <div class="repo-card__meta">
        <a href="https://github.com/{{ repository.repo }}" target="_blank" rel="noopener noreferrer">{{ repository.repo }}</a>
      </div>
    </article>
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_users %}
## GitHub profiles

<div class="repo-links-list">
  {% for user in site.data.repositories.github_users %}
    <a class="repo-profile__link" href="https://github.com/{{ user }}" target="_blank" rel="noopener noreferrer">@{{ user }}</a>
  {% endfor %}
  </div>
{% endif %}
