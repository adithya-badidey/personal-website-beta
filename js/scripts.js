document.addEventListener('DOMContentLoaded', () => {

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-171642977-1');

  const e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
  e.length > 0 && e.forEach(e => {
    e.addEventListener("click", () => {
      const t = e.dataset.target,
        a = document.getElementById(t);
      e.classList.toggle("is-active"), a.classList.toggle("is-active")
    })
  })

  // var disqus_config = function () {
  //   this.page.url = document.querySelector('meta[name="page_canonical_url"]').content;
  //   this.page.identifier = document.querySelector('meta[name="page_unique_id"]').content;
  // };
  // (function () {
  //   var d = document, s = d.createElement('script');
  //   s.src = 'https://adithyab-in.disqus.com/embed.js';
  //   s.setAttribute('data-timestamp', +new Date());
  //   (d.head || d.body).appendChild(s);
  // })();

});
