---
layout: page
permalink: /cv/
title: cv
description: Updated Dec 10, 2025.
nav: true
nav_order: 6
cv_pdf: dec_10_cv.pdf # you can also use external links here
# description: This is a description of the page. You can modify it in '_pages/cv.md'. You can also change or remove the top pdf download button.
# toc:
#   sidebar: left
---
<!-- <embed 
      src="/assets/pdf/dec_10_cv.pdf" 
      type="application/pdf" 
      class="pdf-viewer"
/> -->
<header class="post-header">
      <h1 class="post-title">
        {{ page.title }}
        {% if page.cv_pdf %}
          <a
            {% if page.cv_pdf contains '://' %}
              href="{{ page.cv_pdf }}"
            {% else %}
              href="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}"
            {% endif %}
            target="_blank"
            rel="noopener noreferrer"
            class="float-right"
          >
            <i class="fa-solid fa-file-pdf"></i>
          </a>
        {% endif %}
      </h1>
      {% if page.description %}
        <p class="post-description">{{ page.description }}</p>
      {% endif %}
</HEADER>

<embed 
  src="/assets/pdf/dec_10_cv.pdf#toolbar=0&navpanes=0&scrollbar=0" 
  type="application/pdf"
  width="70%"
  height="500vh"
  style="display:block; margin: 0 auto; border:none;"
>
