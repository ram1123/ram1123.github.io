---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 21
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
  {% endif %}

{% if site.display_tags or site.display_categories %}

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <a class="topic-chip" href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
          </a>
        </li>
      {% endfor %}
      {% for category in site.display_categories %}
        <li>
          <a class="topic-chip topic-chip--category" href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
            <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="card-item col">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <div class="blog-tools" aria-label="Blog filters">
    <div class="blog-tools__search">
      <label class="sr-only" for="blog-search">Search blog posts</label>
      <input id="blog-search" class="blog-tools__input" type="search" placeholder="Search posts by title, description, tag, or category">
    </div>
    <p id="blog-results-count" class="blog-tools__count" aria-live="polite"></p>
  </div>

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li
      class="post-list__item"
      data-search-title="{{ post.title | downcase | escape }}"
      data-search-description="{{ post.description | default: '' | strip_html | downcase | escape }}"
      data-search-tags="{{ post.tags | join: ' ' | downcase | escape }}"
      data-search-categories="{{ post.categories | join: ' ' | downcase | escape }}"
    >

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      <div class="post-taxonomy">
        <div class="post-taxonomy__group">
          <a class="post-chip post-chip--year" href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
            <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
          </a>
        </div>
        {% if tags != "" %}
          <div class="post-taxonomy__group">
            {% for tag in post.tags %}
              <a class="post-chip" href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
              </a>
            {% endfor %}
          </div>
        {% endif %}
        {% if categories != "" %}
          <div class="post-taxonomy__group">
            {% for category in post.categories %}
              <a class="post-chip post-chip--category" href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
              </a>
            {% endfor %}
          </div>
        {% endif %}
      </div>

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{post.thumbnail | relative_url}}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("blog-search");
    const resultCount = document.getElementById("blog-results-count");
    const paginatedList = document.querySelector(".post-list");
    const pagination = document.querySelector(".pagination");

    if (!searchInput || !resultCount || !paginatedList) return;

    // Container for full-index search results (injected next to the paginated list)
    const searchResultsList = document.createElement("ul");
    searchResultsList.className = "post-list";
    searchResultsList.id = "search-results-list";
    searchResultsList.style.display = "none";
    paginatedList.parentNode.insertBefore(searchResultsList, paginatedList.nextSibling);

    let allPosts = null; // cached after first fetch

    const fetchIndex = () =>
      fetch("{{ '/assets/json/posts_search.json' | relative_url }}")
        .then((r) => r.json())
        .then((data) => { allPosts = data; });

    const renderPost = (post) => {
      const li = document.createElement("li");
      li.className = "post-list__item";
      const tagHtml = post.tags
        ? post.tags.split(" ").filter(Boolean).map(t =>
            `<a class="post-chip" href="/blog/tag/${t}"><i class="fa-solid fa-hashtag fa-sm"></i> ${t}</a>`
          ).join("")
        : "";
      const catHtml = post.categories
        ? post.categories.split(" ").filter(Boolean).map(c =>
            `<a class="post-chip post-chip--category" href="/blog/category/${c}"><i class="fa-solid fa-tag fa-sm"></i> ${c}</a>`
          ).join("")
        : "";
      li.innerHTML = `
        <h3><a class="post-title" href="${post.url}">${post.title}</a></h3>
        ${post.description ? `<p>${post.description}</p>` : ""}
        <p class="post-meta">${post.date}</p>
        <div class="post-taxonomy">
          ${tagHtml ? `<div class="post-taxonomy__group">${tagHtml}</div>` : ""}
          ${catHtml ? `<div class="post-taxonomy__group">${catHtml}</div>` : ""}
        </div>`;
      return li;
    };

    const updateResults = async () => {
      const query = searchInput.value.trim().toLowerCase();

      if (query === "") {
        // Restore paginated view
        paginatedList.style.display = "";
        if (pagination) pagination.style.display = "";
        searchResultsList.style.display = "none";
        searchResultsList.innerHTML = "";
        resultCount.textContent = "";
        return;
      }

      // Lazy-load the index
      if (!allPosts) {
        try { await fetchIndex(); }
        catch (e) { console.error("Could not load search index:", e); return; }
      }

      const matches = allPosts.filter((post) => {
        const haystack = [post.title, post.description, post.tags, post.categories]
          .join(" ").toLowerCase();
        return haystack.includes(query);
      });

      // Render results
      searchResultsList.innerHTML = "";
      matches.forEach((post) => searchResultsList.appendChild(renderPost(post)));

      // Swap views
      paginatedList.style.display = "none";
      if (pagination) pagination.style.display = "none";
      searchResultsList.style.display = "";

      resultCount.textContent = `Showing ${matches.length} post${matches.length === 1 ? "" : "s"} for "${query}"`;
    };

    searchInput.addEventListener("input", updateResults);
  });
</script>
