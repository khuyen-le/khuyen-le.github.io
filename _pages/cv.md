---
layout: page
permalink: /cv/
title: cv
description: Updated Dec 10, 2025.
nav: true
nav_order: 6
# cv_pdf: example_pdf.pdf # you can also use external links here
# description: This is a description of the page. You can modify it in '_pages/cv.md'. You can also change or remove the top pdf download button.
# toc:
#   sidebar: left
---
<!-- <embed 
      src="/assets/pdf/dec_10_cv.pdf" 
      type="application/pdf" 
      class="pdf-viewer"
/> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>

<canvas id="pdfCanvas" style="display:block; margin:0 auto;"></canvas>

<script>
  const url = "/assets/pdf/dec_10_cv.pdf";

  const loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then(pdf => {
    pdf.getPage(1).then(page => {
      const scale = 1.2;
      const viewport = page.getViewport({ scale });

      const canvas = document.getElementById('pdfCanvas');
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });
</script>
