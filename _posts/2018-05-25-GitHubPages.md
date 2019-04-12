---
layout: post
title: "How to GitHub Pages"
date: 2018-05-25
categories: git githubpage
---

* Do not remove this line (it will not be displayed)
{:toc}

# Some References

1. Basics of `liquid`: [link](https://shopify.github.io/liquid/)


# Others
1. Reference: [http://jmcglone.com/guides/github-pages/](http://jmcglone.com/guides/github-pages/)

2. Enable latex support for maths: [link](http://blog.lostinmyterminal.com/webpages/2015/01/09/math-support-in-jekyll.html)

2. Improve code hilighting : [link](https://demisx.github.io/jekyll/2014/01/13/improve-code-highlighting-in-jekyll.html)

    ```
        {/% highlight ruby linenos %}
        {/% endhighlight %}
    ```


3. Writing project from scratch: [link](https://www.zeolearn.com/magazine/github-pages-with-jekyll-scratch-up-your-own-blog)

4. Controling link in Jekyll: [link](https://www.digitalocean.com/community/tutorials/controlling-urls-and-links-in-jekyll)

5. Build blog site with Jekyll: [link](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)

6. Add figure and resize it:

    Here is an inline `![smiley](\{\{ site.url }}/assets/smiley.png){:height="36px" width="36px"}`.

    And here is a referenced `![smile]

    `[smile]: \{\{ site.url }}/assets/smile.png {: height="36px" width="36px"}`

    Ref: 
    1. [http://sgeos.github.io/github/jekyll/2016/08/30/adding_images_and_downloads_to_a_github_pages_jekyll_blog.html](http://sgeos.github.io/github/jekyll/2016/08/30/adding_images_and_downloads_to_a_github_pages_jekyll_blog.html)

    2. [https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown](https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown)

7. To add table of content in github pages:
    Add following two lines in the blog page in which you need table of content :
    
    ```sh
    * Do not remove this line (it will not be displayed)
    {:toc}
    ```

8. To image resize use

    ```html
    <img src="Link" width="200" height="200">
    ```

9. 