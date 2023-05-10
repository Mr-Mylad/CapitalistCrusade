const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("viewingAnimation");
        } else {
            entry.target.classList.remove("viewingAnimation");
        };
    });
});

function addScrollAnimator(elements) {
    elements.forEach((element) => {
        observer.observe(element);
    });
};

export default addScrollAnimator;