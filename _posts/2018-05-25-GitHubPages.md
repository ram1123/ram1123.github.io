---
layout: post
title: "How to GitHub Pages"
date: 2018-05-25
categories: VCS
tags: git
giscus_comments: true
last_modified_at: 2022-09-05
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Some References

1. Basics of `liquid`: [link](https://shopify.github.io/liquid/)

# Others

1. Reference: [http://jmcglone.com/guides/github-pages/](http://jmcglone.com/guides/github-pages/)

2. Enable latex support for maths: [link](http://blog.lostinmyterminal.com/webpages/2015/01/09/math-support-in-jekyll.html)

3. Improve code highlighting: [Jekyll code snippet highlighting](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting)

   ```
   {/% highlight ruby linenos %}
   {/% endhighlight %}
   ```

4. Writing project from scratch: [link](https://www.zeolearn.com/magazine/github-pages-with-jekyll-scratch-up-your-own-blog)

5. Controling link in Jekyll: [link](https://www.digitalocean.com/community/tutorials/controlling-urls-and-links-in-jekyll)

6. Build blog site with Jekyll: [link](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)

7. Add figure and resize it:

   Here is an inline `![smiley](\{\{ site.url }}/assets/smiley.png){:height="36px" width="36px"}`.

   And here is a referenced `![smile]`

   `[smile]: \{\{ site.url }}/assets/smile.png {: height="36px" width="36px"}`

   Ref:

   1. [http://sgeos.github.io/github/jekyll/2016/08/30/adding_images_and_downloads_to_a_github_pages_jekyll_blog.html](http://sgeos.github.io/github/jekyll/2016/08/30/adding_images_and_downloads_to_a_github_pages_jekyll_blog.html)

   2. [https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown](https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown)

8. To add table of content in github pages:
   Add following two lines in the blog page in which you need table of content :

   ```sh
   * Do not remove this line (it will not be displayed)
   {:toc}
   ```

9. To image resize use

   ```html
   <img src="Link" width="200" height="200" />
   ```

10. How to link post, pages or any internal links; Reference: [stackoverflow](https://stackoverflow.com/a/41213193), [Jekyll documentation](https://jekyllrb.com/docs/liquid/tags/#links)

11. [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll)
