export function initScrollAnimations() {
  const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    },
  );

  elements.forEach((element) => observer.observe(element));
}
