(function IntersectContext() {
  const targets = document.querySelectorAll("[data-intersect]");
  if (!targets.length) return;
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver(onIntersect, options);
  targets.forEach((target) => {
    observer.observe(target);
  });

  function onIntersect(entries) {
    entries.forEach(handleIntersection);
  }

  function handleIntersection(entry) {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-visible", "true");
    } else {
      entry.target.setAttribute("data-visible", "false");
    }
  }
})();
